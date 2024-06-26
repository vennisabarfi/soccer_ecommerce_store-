from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    username = forms.CharField(max_length = 20)
    first_name = forms.CharField(max_length = 20)
    last_name = forms.CharField(max_length = 20)
    password = forms.CharField(widget=forms.PasswordInput)
    # password2 = forms.PasswordInput()

    class Meta:
        model = User
        fields = ["username", 'email', 'first_name', 'last_name', "password"]