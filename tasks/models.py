from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200) 
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False) 
    
    # Que dato queremos ver en el panel de django
    def __str__(self):
        return self.title
    