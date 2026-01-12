from django.shortcuts import redirect

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
from payments.views import create_checkout_session_stripe

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

        payment_session_url =  create_checkout_session_stripe(
            user_id=user,
            party_id=party.id,
            price_id=request.data.get("price_id")
        ).data["url"]
        return Response({"url": payment_session_url}, status=status.HTTP_200_OK)
