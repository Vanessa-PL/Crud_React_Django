from rest_framework import viewsets
from .serializer import TaskSerializers
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()  
    