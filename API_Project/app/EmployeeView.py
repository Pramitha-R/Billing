from django.shortcuts import render,HttpResponse
from .models import User_roles
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators  import api_view
import pandas as pd
from django.forms.models import model_to_dict
from django.middleware.csrf import get_token
import re

# For getting employees' all details. This is for admin dashboard purpose
@api_view(['GET'])
def AllDetails(request):
    emps = User_roles.objects.filter(role_id=2)
    if not emps.exists():
        return Response({"msg": "No User_roles found with role_id=2","MsgType":"danger"},)
    
    # Alternatively, if you want to retrieve details for all matching objects
    employeDet= [model_to_dict(e) for e in emps]

    emp_df=pd.DataFrame(employeDet)
    emp_df[['id','role_id']]=emp_df[['id','role_id']].astype(str)
    emp_dict=emp_df.to_dict('records')

    return Response(emp_dict)