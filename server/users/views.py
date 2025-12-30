from rest_framework import generics
from .serializers import CustomUserSerializer, RegistrationSerializer,MeCustomUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model

class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = get_user_model().objects.all()
    serializer_class = RegistrationSerializer

class MeCustomUserView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = MeCustomUserSerializer

    def get_object(self):
        return self.request.user