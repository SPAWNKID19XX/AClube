from django.utils.translation.trans_null import activate
from rest_framework import serializers, settings
from django.contrib.auth import get_user_model
from datetime import datetime
from django.core.mail import send_mail
from .models import CustomUser
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator


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
            "password":{"write_only":True},
            "email": {"write_only": True, "required":True},
            "birth_date":{"write_only":True, "required":True},
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
        uid=urlsafe_base64_encode(force_bytes(user.pk))
        print('+++',uid)
        token = default_token_generator.make_token(user)
        print(token)

        send_mail(
            subject='Registration Request Alibi Club',
            from_email="server.settings.DEFAULT_FROM_EMAIL",
            message=f"link to activate your account http://localhost:8000/account/{uid}/{token}",
            recipient_list=[user.email]
        )
        return user

