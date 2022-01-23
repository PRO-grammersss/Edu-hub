from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http.response import HttpResponseRedirect
from django.urls import reverse
from django.views.generic.list import ListView
from .models import *

# Create your views here.
def index(request):  #Function for the index view
    if not request.user.is_authenticated or request.user == 'AnonymousUser': #User is not authenticated or not signed in 
        return render(request, "ccr/login.html", { #Redirects the user to the login page if they try to access the home page without signing in 
            'message': 'Sign in first'
        }) 
    else: #If user is authenticated and not anonymous 
        return render(request, "ccr/index.html") #Sends the user to the home page

def login_view(request): 
    if request.method == "POST": #Uses the post method
        username = request.POST["username"] #The variable for the username is created
        password = request.POST["password"] #The variable for the password is created
        user = authenticate(request, username=username, password=password) #The server authenticates the username and password
        if user is not None: #when credentials are given
            login(request, user) #Logs the user in 
            return HttpResponseRedirect(reverse("index")) #Sends the user to the home page 
        else: #If the credentials are invalid or wrong
            return render(request, "ccr/login.html", { #Sends the user to the login page agian
                "message": "Invalid credentials." #Says that the credentials are invalid
                })
    #Post ends here
    return render(request, "ccr/login.html") 

def logout_view(request):
    logout(request)
    return render(request, "ccr/login.html", {
        "message": "Logged out successfully."
    })


    

    

