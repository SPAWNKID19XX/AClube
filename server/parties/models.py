from django.db import models
from django.contrib.auth import get_user_model


class OptionPrices(models.Model):
    class Meta:
        verbose_name = "Option Price"

    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.price}"



# Create your models here.
class Parties(models.Model):
    class Country(models.TextChoices):
        PT = ('PT', "PT")
        ES = ('ES', "ES")

    class Meta:
        verbose_name = "Party"
        verbose_name_plural = "Parties"

    created_by=models.ForeignKey(get_user_model(),on_delete=models.CASCADE, related_name="user_parties")
    title = models.CharField(max_length=100)
    max_invited = models.IntegerField()
    country = models.CharField(max_length=2,choices=Country ,help_text="ISO code (e.g. PT or ES)")
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
        related_name="party_ghosts",
    )


    def __str__(self):
        return self.title


class PartyPrice(models.Model):
    class Meta:
        verbose_name = "Party Price"

    party = models.ForeignKey(
        Parties,
        on_delete=models.CASCADE,
        related_name="prices",
    )
    price = models.ForeignKey(
        OptionPrices,
        on_delete=models.CASCADE
    )

    fixed_amount = models.DecimalField(max_digits=10, decimal_places=2)

class Ticket(models.Model):
    user_created = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name="user_tickets"
    )
    party = models.ForeignKey(
        Parties,
        on_delete=models.CASCADE
    )
    party_price = models.ForeignKey(
        PartyPrice,
        on_delete=models.SET_NULL,
        null=True,
        related_name="tickets"
    )
    purchased_price_name = models.CharField(max_length=50)
    purchased_amount = models.DecimalField(max_digits=10, decimal_places=2)
    persons_count = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_created}-{self.purchased_price_name}"