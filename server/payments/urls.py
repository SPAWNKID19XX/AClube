from django.urls import path


urlpatterns = [
    path('create-session/', CreateChackoutSessionApi.as_view(), name='create-session'),
]