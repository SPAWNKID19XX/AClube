from django.db import models
from django.contrib.auth import get_user_model



# Create your models here.
class Parties(models.Model):

    class Meta:
        verbose_name = "Party"
        verbose_name_plural = "Parties"

    created_by=models.ForeignKey(get_user_model(),on_delete=models.CASCADE, related_name="created_by")
    title = models.CharField(max_length=100)
    max_invited = models.IntegerField()
    country = models.CharField(max_length=2, help_text="ISO code (e.g. PT or ES)")
    region = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    zip_code = models.IntegerField()
    getting_places_1= models.CharField(max_length=100, null=False, blank=False)
    getting_places_2= models.CharField(max_length=100, null=False, blank=True)
    getting_places_3= models.CharField(max_length=100, null=False, blank=True)
    getting_places_4 = models.CharField(max_length=100, null=False, blank=True)
    getting_places_5 = models.CharField(max_length=100, null=False, blank=True)
    description = models.TextField()
    start_dt = models.DateTimeField()
    finish_dt = models.DateTimeField()
    ghosts = models.ManyToManyField(
        get_user_model(),
        blank=True,
        related_name="ghosts",
        null=True,
    )


    def __str__(self):
        return self.title
