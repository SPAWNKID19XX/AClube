from django.urls import path, include
from dj_rest_auth.views import LogoutView

urlpatterns = [
    path('auth/registration/', include('dj_rest_auth.registration.urls')),

    path('auth/', include('dj_rest_auth.urls')),
    path('auth/logout/', LogoutView.as_view(), name='rest_logout'),

    path('accounts/', include('allauth.urls')),
]
