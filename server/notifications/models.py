from django.db import models

# Create your models here.
class AxceptNotifications(models.Model):
    name=models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=20)
    axcepted = models.BooleanField(default=False)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

