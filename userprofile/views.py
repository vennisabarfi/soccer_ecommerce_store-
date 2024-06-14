from django.shortcuts import render, redirect 
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login 
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm #user registration form
from django import template

import json

def home(request):
    return render(request, 'home.html')  

def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.cleaned_data.get('username')
        password = make_password.cleaned_data.get('password')
        email = data.get('email')

        #create a new user
        new_user = User.objects.create_user(username = username, password=password, email=email)
        return HttpResponse({'message': 'User created successfully', 'user_id': new_user.id})
   
    
    else:
        return HttpResponse({'error': 'Only POST requests allowed'})
    
#register a user
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')
            return redirect('login.html')
        
    else:
        form = UserRegisterForm()
        args = {'form': form, 'title': 'register here'}
    return render(request, 'register.html', args)

# login a user
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username = username, password = password)
        if user is not None:
            form  = login(request, user)
            messages.success(request, f"Welcome {username}. Login Successful!")
            return redirect('profile') 
        else: 
            messages.info(request, f"Account does not exist. Please register and then log in")
    form = AuthenticationForm()
    args = {'form': form, 'title': 'log in'}
    return render(request, 'login.html', args)

