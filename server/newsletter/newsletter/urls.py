from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from core.views import *
  
urlpatterns = [
    path('admin/', admin.site.urls),
    path('wel/', NewsView.as_view()),
]