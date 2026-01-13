from django.db import models
from parties.models import Parties
from django.contrib.auth import get_user_model

# Create your models here.

class OptionPrices(models.Model):
    class Meta:
        verbose_name = "Option Price"

    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.price}"

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
        OptionPrices,
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