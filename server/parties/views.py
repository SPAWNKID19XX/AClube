from .models import Parties
from payments.models import PartyPrice, OptionPrices
import os
from django.db.models import Count
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.exceptions import ValidationError
from rest_framework.generics import ListAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.views import APIView
import stripe
from .models import Parties
from .serializers import PartiesSerializer, PartyPricesSerializer

# Create your views here.
VITE_BASE_URL = os.getenv("VITE_BASE_URL")

class PartyListAPIView(ListAPIView):
    queryset = Parties.objects.annotate(reg_counted=Count("ghosts"))
    serializer_class = PartiesSerializer
    permission_classes = [permissions.AllowAny]

class PartyDetailAPIView(RetrieveAPIView):
    queryset = Parties.objects.prefetch_related('prices').all()
    serializer_class = PartiesSerializer
    permission_classes = [permissions.AllowAny]



class JoinPartyAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PartiesSerializer

    def post(self, request, *args, **kwargs):
        party = get_object_or_404(Parties, pk=kwargs["pk"])
        user = request.user

        if party.ghosts.filter(id=user.id).exists():
            raise ValidationError({"detail": "Are you already in party"})

        try:
            price_obj_id = request.data.get("price_id")
            price_obj = get_object_or_404(OptionPrices, pk=price_obj_id)

            stripe.api_key = os.getenv("TEST_SK")

            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price_data': {
                            'currency': 'eur',  # Или другая валюта
                            'unit_amount': int(price_obj.price*100),
                            'product_data': {
                                'name': f"{party}-{price_obj.name}",
                            },
                        },
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=VITE_BASE_URL + '/success.html?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=VITE_BASE_URL + '/cancel.html',
            )
            return Response(
                {'url': checkout_session.url},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            print(f"Error: {e}")  # Для отладки в консоли
            return Response(
                {"detail": "Server error", "error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
