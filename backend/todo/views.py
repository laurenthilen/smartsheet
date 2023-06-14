from django.conf import settings
from django.http import HttpResponse
import requests


def home(request):
    url = f'https://api.smartsheet.com/2.0/sheets/{settings.SHEET_ID}'
    response = requests.get(url, headers={'Authorization': f'Bearer {settings.API_KEY}', 'Content-Type': 'application/json'})
    http_response = HttpResponse(
        content=response.content,
        status=response.status_code,
        content_type=response.headers['Content-Type']
    )
    return http_response
