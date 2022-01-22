from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    task_name = models.CharField(max_length=256)
    description = models.TextField(null=False, blank=False)
    completed = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.task_name #use python3 manage.py makemigrations and then python3 manage.py migrate

