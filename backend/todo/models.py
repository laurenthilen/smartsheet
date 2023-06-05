from django.db import models
from .utils import StatusTypes


class Todo(models.Model):
    taskName = models.CharField(max_length=120)
    dueDate = models.DateTimeField(null=True)
    done = models.BooleanField(default=False)
    assignedTo = models.CharField(max_length=120)
    status = models.IntegerField(choices=StatusTypes.choices(), default=StatusTypes.NOTSTARTED)
    comments = models.TextField()

    def _str_(self):
        return self.taskName

