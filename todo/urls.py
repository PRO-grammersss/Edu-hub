from django.urls import path
from todo import views
from django.contrib import admin 


urlpatterns = [

    path('', views.index, name="todo"),
    path('del/', views.remove, name="del"),
    path('admin/', admin.site.urls),
]