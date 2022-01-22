from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
htmlfilename = "index.html"
def main():
    return render(htmlfilename)
