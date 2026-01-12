from rest_framework import serializers
from .models import Parties
from payments.models import PartyPrice, OptionPrices
from payments.serializers import PartyPricesSerializer, OptionPriceSerializer


class PartiesSerializer(serializers.ModelSerializer):
    reg_counted = serializers.IntegerField(read_only=True)
    parties = PartyPricesSerializer(many=True,read_only=True)
    prices = serializers.SerializerMethodField()
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


    def get_prices(self, obj):
        queryset=OptionPrices.objects.all()
        serializer = OptionPriceSerializer(queryset, many=True, read_only=True)
        return serializer.data