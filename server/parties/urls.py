from django.urls import path
from .views import PartyListAPIView


urlpatterns = [
    path('party-list/', PartyListAPIView.as_view(),name='party-list'),
]
