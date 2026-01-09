from rest_framework import serializers
from .models import Parties, PartyPrice

class PartyPricesSerializer(serializers.ModelSerializer):
    price_name = serializers.CharField(read_only=True, source='price.name')

    class Meta:
        model = PartyPrice
        fields = (
            'party',
            'price_name',
            'fixed_amount',
        )


class PartiesSerializer(serializers.ModelSerializer):
    reg_counted = serializers.IntegerField(read_only=True)
    parties = PartyPricesSerializer(many=True,read_only=True)
    prices = PartyPricesSerializer(many=True,read_only=True)
    class Meta:
        model = Parties
        fields = (
            'id',
            'title',
            'max_invited',
            'country',
            'region',
            'city',
            'getting_places_1',
            'getting_places_2',
            'getting_places_3',
            'getting_places_4',
            'getting_places_5',
            'description',
            'start_dt',
            'reg_counted',
            'parties',
            'prices'
        )
