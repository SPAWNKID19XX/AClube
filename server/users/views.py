from rest_framework import generics
from .serializers import CustomUserSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model

class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = get_user_model().objects.all()
    serializer_class = CustomUserSerializer