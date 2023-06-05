from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('taskName', 'dueDate', 'done', 'assignedTo', 'status', 'comments')


admin.site.register(Todo, TodoAdmin)

