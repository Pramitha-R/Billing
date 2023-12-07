from django.shortcuts import render,HttpResponse
from .models import Admin
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators  import api_view
# from django.forms.models import model_to_dict
from django.contrib.auth.hashers import check_password
# Create your views here.

@api_view(['POST'])
def _checklogin(request):
    username=request.data.get('username')
    password=request.data.get('password')

    try:
        user = Admin.objects.get(username=username)
        if (user.password == password):
            # Password matches - user authenticated
            user_dict = {
                'id': str(user.id),
                'username': user.username,
                'role_id': str(user.role_id),
                # Include other necessary fields
            }
            return Response(user_dict)
        else:
            return Response({'msg': 'Password Incorect'})
    except Admin.DoesNotExist:
        return Response({'msg': 'Authentication failed'})
    
# @api_view(['GET'])
# def 