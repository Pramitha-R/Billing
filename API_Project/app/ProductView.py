from django.shortcuts import render,HttpResponse
from .models import User_roles,Products
from rest_framework.response import Response
from rest_framework.decorators  import api_view
import pandas as pd
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
import os
# from django.core.files.uploadedfile import InMemoryUploadedFile

@api_view(['POST'])
def _Create_Items(request, id):
    Item_Name=request.data.get('item_name')
    Item=request.data.get('item')
    Item_Price=request.data.get('item_price')
    # for extention checking purpose
    ConvertToString__Image=str(Item)
    
    # is_valid_image_extension(Item)
    if ConvertToString__Image.lower().endswith(('.jpg', '.jpeg', '.png')):
        user_instance = User_roles.objects.get(id=id)
        obj=Products()
        obj.Emp_Id=user_instance
        obj.Item_name=Item_Name
        obj.Item_Image=Item
        obj.price=float(Item_Price)
        obj.save()
        return Response({'msg':'Successfully creat the Products...','MsgType':'success'})

    else:
        return Response({'msg':'please select the [jpg,jpeng,png] extention files......','MsgType':'warning'})
@api_view(['GET'])
def _All_Products(request):
    products=Products.objects.values()
    product_pd = pd.DataFrame(products)
    product_pd[['price']]=product_pd[['price']].astype(float)
    product_pd[['id','Emp_Id_id','price']]=product_pd[['id','Emp_Id_id','price']].astype(str)
    product_dict=product_pd.to_dict(orient='records')
    return Response(product_dict)

@api_view(['GET'])
def _Edit_Product(request,eId,pId):
    if pId:
        try:
            product = Products.objects.get(id=pId)
            product.price = str(product.price)
            product_dict = {
                'id': str(product.id),
                'Emp_id':str(eId),
                'Item_name': product.Item_name,
                'Item_Image':str(product.Item_Image),
                'price':product.price
            }
            return Response({'product_dict':product_dict})
        except User_roles.DoesNotExist:
            return Response({"error": "product not found"}, status=404)
    else:
        return Response({"error": "ID parameter missing"}, status=400)

@api_view(['POST'])
def _Update_Product(request,eId,pId):
    Item_Name=request.data.get('item_name')
    Item=request.data.get('item')
    Item_Price=request.data.get('item_price')
    # for extention checking purpose
    ConvertToString__Image=str(Item)
    
    # is_valid_image_extension(Item)
    if ConvertToString__Image.lower().endswith(('.jpg', '.jpeg', '.png')):
        user_instance = User_roles.objects.get(id=eId)
        obj=Products.objects.get(id=pId)
        obj.Emp_Id=user_instance
        obj.Item_name=Item_Name
        obj.Item_Image=Item
        obj.price=float(Item_Price)
        obj.save()
        return Response({'msg':'Successfully updated the Products...','MsgType':'success'})

    else:
        return Response({'msg':'please select the [jpg,jpeng,png] extention files......','MsgType':'warning'})
    

@api_view(['POST'])
def _Delete_Product(request,eId,pId):
    product=Products.objects.get(id=pId)
    product.delete()
    return Response({'msg':'Successfuly deleted the Product','MsgType':'success'})