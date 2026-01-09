from django.contrib import admin

# Register your models here.
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    list_display = [
        "username",
        "first_name",
        "last_name",
        "email",
        "phone",
    ]



admin.site.register(CustomUser,CustomUserAdmin)