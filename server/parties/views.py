from django.db.models import Count
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.exceptions import ValidationError
from rest_framework.generics import ListAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.views import APIView

from .models import Parties
from .serializers import PartiesSerializer, PartyPricesSerializer


# Create your views here.
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
    '''def post(self, request, *args, **kwargs):
        party = get_object_or_404(Parties, pk=kwargs["pk"])
        user=request.user

        if party.ghosts.filter(id=user.id).exists():
            raise ValidationError({"detail": "Are you already in party"})

        party.ghosts.add(user)
        return Response({"detail": "success Joined to party"}, status=status.HTTP_200_OK)


'''

    def post(self, request, *args, **kwargs):
        party = get_object_or_404(Parties, pk=kwargs["pk"])
        user = request.user

        if party.ghosts.filter(id=user.id).exists():
            raise ValidationError({"detail": "Are you already in party"})

        #party.ghosts.add(user)
        price_data = request.data.get("price_id")
        print(float(price_data[-7:-1])*100, party, user)
        #party.ghosts.add(user)
        return Response({"detail": "success Joined to party"}, status=status.HTTP_200_OK)




        # 1. Проверяем, что прилетело в теле запроса
        print("--- DATA FROM FRONTEND ---")
        print(f"Body: {request.data}")  # Тут должен быть твой {'price_id': '...'}

        # 2. Получаем конкретное поле
        price_id = request.data.get('price_id')
        print(f"Selected Price ID: {price_id}")

        # 3. Проверяем ID вечеринки из URL
        party_id = kwargs.get('pk')
        print(f"Party ID: {party_id}")
        print("--------------------------")

        # Твоя дальнейшая логика...
        return Response({"detail": "Data received"})