from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http.response import HttpResponseRedirect
from django.urls import reverse
from django.views.generic.list import ListView
from .models import *


def index(request):  #Function for the index view
    if not request.user.is_authenticated or request.user == 'AnonymousUser':
        return render(request, "login/login.html", { 
            'message': 'Sign in first'
        }) 
    else: #If user is authenticated and not anonymous 
        return render(request, "login/index.html") #Sends the user to the home page

def login_view(request): 
    if request.method == "POST": #Uses the post method
        username = request.POST["username"] 
        password = request.POST["password"] 
        user = authenticate(request, username=username, password=password) 
        if user is not None: 
            login(request, user) 
            return HttpResponseRedirect(reverse("index"))
        else: #If the credentials are invalid or wrong
            return render(request, "login/login.html", {
                "message": "Invalid credentials." 
                })
    #Post ends here
    return render(request, "login/login.html") 

def logout_view(request):
    logout(request)
    return render(request, "ccr/login.html", {
        "message": "Logged out successfully."
    })


    

    

