from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

# Create your views here.

class NewsView(APIView):
    
    serializer_class = NewsSerializer
  
    def get(self, request):
        mails = [ {"mail": mails.mail} 
        for mails in News.objects.all()]
        return Response(mails)
  
    def post(self, request):
  
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
