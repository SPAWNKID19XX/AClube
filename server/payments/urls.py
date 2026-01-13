from django.urls import path
from .views import ConfirmationPaymentAPIView



urlpatterns = [
    path('confirmation-payment/', ConfirmationPaymentAPIView.as_view(), name='confirmation-payment'),
]