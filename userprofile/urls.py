# users/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_user, name='create_user'),
    # Add more URL patterns for other user operations as needed
]
