from rest_framework import serializers

from .models import PartyPrice, OptionPrices

class PartyPricesSerializer(serializers.ModelSerializer):
    price_name = serializers.CharField(read_only=True, source='price.name')

    class Meta:
        model = PartyPrice
        fields = (
            'id',
            'party',
            'price_name',
            'fixed_amount',
        )



class OptionPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model=OptionPrices
        fields=(
            'id',
            'name',
            'price',
        )
