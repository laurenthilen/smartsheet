from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from .utils import StatusTypes


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


    def get_context_data(self, **kwargs):
        if self.get_object().type == StatusTypes.NOTSTARTED:
            context["ad"] = Ad.objects.get(target=StatusTypes.NOTSTARTED)

