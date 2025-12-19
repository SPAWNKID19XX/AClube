from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AxceptNotificationsView

router = DefaultRouter()
router.register(r"subscribe", AxceptNotificationsView, basename="AxceptNotificationsView")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("", include(router.urls)),
]
