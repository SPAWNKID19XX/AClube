from rest_framework import serializers
from django.contrib.auth import get_user_model
from datetime import datetime

from server.users.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('__all__')

class RegistrationSerializer(serializers.ModelSerializer):
    password_condition = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = get_user_model()
        fields=('username','email','password','password_condition','birth_date')
        extra_kwargs = {
            "password_condition":{"write_only":True},
            "password":{"write_only":True}
        }

    def validate_birth_date(self, value):
        today = datetime.today().date()

        try:
            limit_date = today.replace(year=today.year - 18)
        except ValueError:
            limit_date = today.replace(year=today.year - 18, day=today.day - 1)

        if value > limit_date:
            raise serializers.ValidationError("Registration allowed only for persons over 18 years old.")

        return value

    def validate(self, validated_data):
        if validated_data['password'] != validated_data['password_condition']:
            raise serializers.ValidationError("Passwords do not match.")
        return validated_data

    def create(self, validated_data):
        validated_data.pop("password_condition")
        user = CustomUser.objects.create_user(**validated_data)
        return user

