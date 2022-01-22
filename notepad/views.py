from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
htmlfilename = "notepad.html"
def main():
    return render(htmlfilename)
