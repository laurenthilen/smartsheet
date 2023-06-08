from django.http import HttpResponse
from rest_framework.response import Response
import requests
from .models import Todo
from .serializers import TodoSerializer

SHEET_ID = '2331777645367172'
TOKEN = 'fQXgr53KnB4dxbRSRqugKKf3QlYY6zs7isWA8'


def home(request):
    url = f'https://api.smartsheet.com/2.0/sheets/{SHEET_ID}'
    response = requests.get(url, headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json'})
    http_response = HttpResponse(
        content=response.content,
        status=response.status_code,
        content_type=response.headers['Content-Type']
    )
    return http_response
