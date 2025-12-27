from django.core.validators import RegexValidator
from django.db import models
from django.contrib.auth.models import  AbstractUser
from django.utils.translation import gettext_lazy as _


class CustomUser(AbstractUser):
    class Gender(models.TextChoices):
        MALE = 'M', _("male")
        FEMALE = 'F', _("female")
        NA = 'na', _("NA")

    class Orientation(models.TextChoices):
        HETEROSEXUAL = "heterosexual", _("Heterosexual")
        HOMOSEXUAL =  "homosexual", _("Homosexual")
        NA = 'na', _("NA")

    class Location(models.TextChoices):
        AVEIRO = "aveiro", "Aveiro"
        BEJA = "beja", "Beja"
        BRAGA = "braga", "Braga"
        BRAGANCA = "braganca", "Bragança"
        CASTELO_BRANCO = "castelo_branco", "Castelo Branco"
        COIMBRA = "coimbra", "Coimbra"
        EVORA = "evora", "Évora"
        FARO = "faro", "Faro"
        GUARDA = "guarda", "Guarda"
        LEIRIA = "leiria", "Leiria"
        LISBOA = "lisboa", "Lisboa"
        PORTALEGRE = "portalegre", "Portalegre"
        PORTO = "porto", "Porto"
        SANTAREM = "santarem", "Santarém"
        SETUBAL = "setubal", "Setúbal"
        VIANA_DO_CASTELO = "viana_do_castelo", "Viana do Castelo"
        VILA_REAL = "vila_real", "Vila Real"
        VISEU = "viseu", "Viseu"


#todo
    # birth_date null=True, но blank=False.
    # Для сайта знакомств дата рождения обязательна,
    # поэтому в будущем в сериализаторе мы сделаем это поле required=True.
    phone = models.CharField(
        max_length=15,blank=True,
        null=True,
        validators=[
            RegexValidator(
                r'^\d+$',
                message=_("Phone number must contain only numbers.")
            )
        ]
    )
    gender = models.CharField(choices=Gender.choices, default=Gender.NA)
    birth_date = models.DateField(null=True, blank=False)
    orientation = models.CharField(choices=Orientation.choices, default=Orientation.NA)
    location = models.CharField(choices=Location.choices, default=Location.FARO)
    is_confirmed = models.BooleanField(default=False)
    is_accepted = models.BooleanField(default=False)


