# users/urls.py

from django.urls import path
from . import views #import views from userprofile

urlpatterns = [
    path('create/', views.create_user, name='create_user'),
    path('', views.home, name = "home"),
    path('register/', views.register, name = "register" ),
    path('login/', views.login, name = "login"),
    
    # Add more URL patterns for other user operations as needed
]
