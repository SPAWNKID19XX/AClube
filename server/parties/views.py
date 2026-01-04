from django.shortcuts import render
from rest_framework import permissions
from rest_framework.generics import ListAPIView

from .models import Parties
from .serializers import PartiesSerializer


# Create your views here.
class PartyListAPIView(ListAPIView):
    queryset = Parties.objects.all()
    serializer_class = PartiesSerializer
    permission_classes = [permissions.AllowAny]