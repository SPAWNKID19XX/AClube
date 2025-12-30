from django.urls import path, include

from .views import RegisterView, MeCustomUserView

urlpatterns = [
    path('auth/registration/', include('dj_rest_auth.registration.urls')),

    path('me/', MeCustomUserView.as_view(), name='me'),

    path('auth/', include('dj_rest_auth.urls')),

    path('accounts/', include('allauth.urls')),
]
