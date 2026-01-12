from django.contrib import admin
from .models import Parties
from payments.models import PartyPrice, OptionPrices


class OptionPricesAdmin(admin.ModelAdmin):
    fields = ("name", "price")
    list_display = ("name", "price")


class PartyPricesAdmin(admin.ModelAdmin):
    fields = ("party", "price", "fixed_amount")
    list_display = ("party", "price", "fixed_amount")


# Register your models here.
class PartiesAdmin(admin.ModelAdmin):
    class Media:
        js = ('js/admin_locations.js',)

    fields = (
        "created_by",
        "title",
        "max_invited",
        "country",
        "region",
        "city",
        "address",
        "zip_code",
        "getting_places_1",
        "getting_places_2",
        "getting_places_3",
        "getting_places_4",
        "getting_places_5",
        "description",
        "start_dt",
        "finish_dt",
        "ghosts",
    )
    list_display = ("title","max_invited","country", "region", "city")
    readonly_fields=( "created_by", "ghosts")

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            obj.save()
        super().save_model(request, obj, form, change)

admin.site.register(Parties, PartiesAdmin)
admin.site.register(PartyPrice, PartyPricesAdmin)

admin.site.register(OptionPrices, OptionPricesAdmin)