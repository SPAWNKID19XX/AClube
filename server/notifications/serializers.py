from rest_framework import serializers
from .models import AxceptNotifications

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AxceptNotifications
        fields = ["id", "name", "email", "phone", "axcepted", "subscribed_at"]
        read_only_fields = ["subscribed_at"]

    def create(self, validated_data):
        return AxceptNotifications.objects.create(**validated_data)