from django.urls import path
from .views import PartyListAPIView, JoinPartyAPIView


urlpatterns = [
    path('party-list/', PartyListAPIView.as_view(),name='party-list'),
    path('party-list/<int:pk>/join/', JoinPartyAPIView.as_view(), name='join-party'),
]
