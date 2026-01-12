from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.exceptions import ValidationError

import stripe, os
from rest_framework.response import Response
from rest_framework import status

from parties.models import Parties
from payments.models import OptionPrices

# Create your views here.
VITE_BASE_URL = os.getenv("VITE_BASE_URL")

def create_checkout_session_stripe(request):
    user=request.user
    party=Parties.objects.get(id=user.id)
    price=OptionPrices.objects.get(id=party.id)
    print(user, party, price)

    '''if party.ghosts.filter(id=user.id).exists():
        raise ValidationError({"detail": "Are you already in party"})

    stripe.api_key = os.getenv("TEST_SK")

    try:
        checkout_session = stripe.checkout.Session.create(
            metadata={
                "user": str(user.id),
                "party": str(party.id),
                "price": str(price.id),
            },
            line_items=[
                {
                    'price_data': {
                        'currency': 'eur',  # Или другая валюта
                        'unit_amount': int(price.price * 100),
                        'product_data': {
                            'name': f"{party}-{price.name}",
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=VITE_BASE_URL + '/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url=VITE_BASE_URL + '/cancel.html',
        )
        return Response(
            {'url': checkout_session.url},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        print(f"Error: {e}")
        return Response(
            {"detail": "Server error", "error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

        '''