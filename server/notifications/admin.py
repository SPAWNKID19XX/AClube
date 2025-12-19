from django.contrib import admin
from .models import AxceptNotifications

# Register your models here.
class AxceptNotificationsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'axcepted', "subscribed_at")
    fields = ['name', 'email', 'phone', 'axcepted']

admin.site.register(AxceptNotifications, AxceptNotificationsAdmin)