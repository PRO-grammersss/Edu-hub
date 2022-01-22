from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
htmlfilename = "forum.html"
def main():
    return render(htmlfilename)
