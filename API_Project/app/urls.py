from django.contrib import admin
from django.urls import path
from app import views,ProductView
urlpatterns = [
    path('checklogin/', views._checklogin),
    # path('')
    # path('fetching/',views.FetchingNames),
    path('createUsers/',views._CreateUsers),
    path('UpdateUsers/<int:id>',views._Update_User),
    path('ClickToUpdate/<int:id>',views._Click_Update),
    path('DeleteUser/<int:id>',views._Delete_User),
    
    path('CreateItems/<int:id>',ProductView._Create_Items),
    path('allProducts/',ProductView._All_Products),
    path('EditProduct/<int:eId>/<int:pId>',ProductView._Edit_Product),
    path('UpdateProduct/<int:eId>/<int:pId>',ProductView._Update_Product),
    path('DeleteProduct/<int:eId>/<int:pId>',ProductView._Delete_Product),

    
]