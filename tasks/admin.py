from django.contrib import admin
from .models import Task

# Register your models here.
#Agregar tabla a el panel
admin.site.register(Task)