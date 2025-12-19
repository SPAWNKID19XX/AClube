from django.shortcuts import render
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import NotificationSerializer
from .models import AxceptNotifications


class AxceptNotificationsView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = NotificationSerializer
    queryset = AxceptNotifications.objects.all()

    def create(self, request, *args, **kwargs):
        print("=== HEADERS ===")
        #print(request.headers)
        print("Accept-Language:", request.headers.get("Accept-Language"))
        print("================")

        return super().create(request, *args, **kwargs)