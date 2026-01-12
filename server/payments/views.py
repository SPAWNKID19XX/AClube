import requests.utils
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions, request
from rest_framework.exceptions import ValidationError
import stripe, os, requests
from rest_framework.response import Response
from rest_framework import status
from parties.models import Parties
from payments.models import OptionPrices

# Create your views here.
VITE_BASE_URL = os.getenv("VITE_BASE_URL")

def create_checkout_session_stripe(user_id, party_id, price_id):
    stripe.api_key = os.getenv("TEST_SK")
    party = get_object_or_404(Parties, pk=party_id)
    price = get_object_or_404(OptionPrices, pk=price_id)
    price_value_cents = int(price.price * 100)


    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data': {
                        'currency': 'eur',  # Или другая валюта
                        'unit_amount': price_value_cents,
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

            client_reference_id = str(user_id),
            metadata = {
                'user': user_id,
                'party': party_id,
                'price': price_id,
            },
            #customer_email = request.user.email if hasattr(request.user, 'email') else None,
        )

        url = checkout_session.url
        return Response(
            {'url': url}
        )
    except stripe.error.StripeError as e:
        return Response({'error': e.message}, status=status.HTTP_400_BAD_REQUEST)