from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Parties, PartyPrice, OptionPrices

@receiver(post_save, sender=Parties)
def create_default_prices(sender, instance, created, **kwargs):
    if created:
        option_prices = OptionPrices.objects.all()

        for option in option_prices:
            PartyPrice.objects.create(
                party=instance,
                price=option,
                fixed_amount=option.price
            )

        print(f"Цены для вечеринки '{instance.title}' успешно созданы!")