from django.db import models

class News(models.Model):
    mail = models.CharField(max_length=100)
