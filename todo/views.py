<<<<<<< Updated upstream
from django.shortcuts import render, redirect
from django.contrib import messages
def index(request):
    return render(request, "todolist.HTML")
=======
from django.shortcuts import render

def index(request):
    return render(request, 'todolist.HTML')  
>>>>>>> Stashed changes
