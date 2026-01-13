import requests.utils
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions, request
from rest_framework.exceptions import ValidationError
import stripe, os, requests
from rest_framework.response import Response
from rest_framework import status
from parties.models import Parties
from payments.models import OptionPrices, Ticket

from payments.models import PartyPrice

# Create your views here.
VITE_BASE_URL = os.getenv("VITE_BASE_URL")
stripe.api_key = os.getenv("TEST_SK")

def create_checkout_session_stripe(user_id, party_id, price_id):
    stripe.api_key = os.getenv("TEST_SK")
    party = get_object_or_404(Parties, pk=party_id)
    price = get_object_or_404(OptionPrices, pk=price_id)
    price_value_cents = int(price.price * 100)

    if not party.ghosts.filter(id=user_id.id).exists():
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
                customer_email=user_id.email,
                client_reference_id = str(user_id),
                metadata = {
                    'user': user_id.id,
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


class ConfirmationPaymentAPIView(APIView):

    def post(self, request, *args, **kwargs):
        session_id = request.data.get('session_id')

        if not session_id:
            return Response({'error': 'session_id is required'}, status=status.HTTP_400_BAD_REQUEST)

        session = stripe.checkout.Session.retrieve(
            session_id,
        )
        if session.payment_status == 'paid':
            party = get_object_or_404(Parties, pk=int(session.metadata.get('party')))
            price = get_object_or_404(OptionPrices, pk=int(session.metadata.get('price')))
            print('********************',price)
            if not request.user.id == int(session.metadata.get('user')):
                return Response({'error': "Authentificated user not the same witch joined to party"},
                            status=status.HTTP_401_UNAUTHORIZED)  # user alredy exist in party
            if party.ghosts.filter(id=request.user.id).exists():
                print("Error user already exists in party")
                return Response({'error': "User already in party"},
                                status=status.HTTP_409_CONFLICT)  # user alredy exist in party

            if price.id == 3:
                tikets = 2
            else:
                tikets = 1
            party.ghosts.add(request.user)
            Ticket.objects.create(
                user_created=request.user,
                party=party,
                party_price=price,
                purchased_price_name=price.name,
                purchased_amount=price.price,
                persons_count=tikets,
            )
        return Response({'session_id': session_id}, status=status.HTTP_200_OK)