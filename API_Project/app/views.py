from django.shortcuts import render,HttpResponse
from .models import User_roles
from rest_framework.response import Response
from rest_framework.decorators  import api_view
import pandas as pd
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth.hashers import check_password
# Create your views here.

# Login for 3 users
@api_view(['POST'])
def _checklogin(request):
    username=request.data.get('username')
    password=request.data.get('password')
    try:
        user = User_roles.objects.get(username=username)
        if (user.password == password):
            user.role_id=str(user.role_id)
            # Password matches - user authenticated
            user_dict=model_to_dict(user)
            return Response(user_dict)
        else:
            return Response({'msg': 'Password Incorect'})
    except User_roles.DoesNotExist:
        return Response({'msg': 'Authentication failed'})
    
# Create User [Admin,employee,customer]
@api_view(['POST'])
def _CreateUsers(request):
    username=request.data.get('username')
    firstname=request.data.get('firstname')
    lastname=request.data.get('lastname')
    address=request.data.get('address')
    phone=request.data.get('phone')
    password=request.data.get('password')
    confirm_Password=request.data.get('confirm_Password')
    role_id=request.data.get('role_id')

    if password == confirm_Password:
        obj=User_roles()
        obj.username=username
        obj.firstname=firstname
        obj.lastname=lastname
        obj.address=address
        obj.phone=phone
        obj.password=password
        obj.role_id=role_id
        obj.save()
        if role_id==2:
            return Response({'msg':'Successfully creat the employee...','MsgType':'success'})
        elif role_id==3:
            return Response({'msg':'Successfully Register the customer...','MsgType':'success'})
        else:
            return Response({'msg':'Successfully Register the customer...','MsgType':'danger'})
    else:
        return Response({'msg':'password is not maching the confirm password','MsgType':'danger'})


@api_view(['GET'])
def _Update_User(request,id):
    if id:
        try:
            user = User_roles.objects.get(id=id)
            user.role_id = str(user.role_id)
            user_dict = model_to_dict(user)
            return Response(user_dict)
        except User_roles.DoesNotExist:
            return Response({"error": "User not found"}, status=404)
    else:
        return Response({"error": "ID parameter missing"}, status=400)


@api_view(['POST'])
def _Click_Update(request,id):
    username=request.data.get('username')
    firstname=request.data.get('firstname')
    lastname=request.data.get('lastname')
    address=request.data.get('address')
    phone=request.data.get('phone')
    role_id=request.data.get('role_id')

    obj = User_roles.objects.get(id=id)
    obj.username=username
    obj.firstname=firstname
    obj.lastname=lastname
    obj.address=address
    obj.phone=phone
    obj.save()
    if role_id==2:
        return Response({'msg':'Successfully updated the employee...','MsgType':'success'})
    elif role_id==3:
        return Response({'msg':'Successfully update the customer...','MsgType':'success'})

@api_view(['POST'])
def _Delete_User(request,id):
    user=User_roles.objects.get(id=id)
    Dettail_Of_Deleted_person=None
    try:
        if user.role_id==2:
            Dettail_Of_Deleted_person=user.delete()
            return Response({'msg':'Successfuly deleted the Employee','MsgType':'success'})
        elif user.role_id==3:
            Dettail_Of_Deleted_person=user.delete()
            return Response({'msg':'Successfuly deleted the Customer','MsgType':'success'})
        else:
            return Response({'msg':'admin id can\'t be deleted ','MsgType':'danger'})
    except Exception as e:
        if Dettail_Of_Deleted_person!=None:
            user.save()
        return Response({'msg':f'{e}','MsgType':'danger'})
@api_view(['GET'])
def FetchingNames(request):
    name=request.GET.get('name')
    try:
        user = User_roles.objects.get(username=name)
        user_dict = {
            'msg':'success',
            'id': str(user.id),
            'username': user.username,
            'Firstname':user.firstname,
            'lastname':user.lastname,
            'address':user.address,
            'role_id': str(user.role_id),
        }
        return Response({'user_dict':user_dict})
    except User_roles.DoesNotExist:
        return Response({'user_dict':{'msg':'nothing'}})
