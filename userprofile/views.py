from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie
import json

def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        #create a new user
        new_user = User.objects.create_user(username = username, password=password, email=email)
        return JsonResponse({'message': 'User created successfully', 'user_id': new_user.id})
    
    else:
        return JsonResponse({'error': 'Only POST requests allowed'})