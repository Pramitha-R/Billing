from django.contrib import admin
from django.urls import path
from app import views,ProductView,EmployeeView
# from rest_framework_simplejwt import views as jwt_views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
urlpatterns = [
    path('checklogin/', views._checklogin),
    # path('')
    #  path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # path('fetching/',views.FetchingNames),
    path('createUsers/',views._CreateUsers),
    path('UpdateUsers/<int:id>',views._Update_User),
    path('ClickToUpdate/<int:id>',views._Click_Update),
    path('DeleteUser/<int:id>',views._Delete_User),

    path('AllEmp_details/',EmployeeView.AllDetails),
    
    path('CreateItems/<int:id>',ProductView._Create_Items),
    path('allProducts/',ProductView._All_Products),
    path('EditProduct/<int:eId>/<int:pId>',ProductView._Edit_Product),
    path('UpdateProduct/<int:eId>/<int:pId>',ProductView._Update_Product),
    path('DeleteProduct/<int:eId>/<int:pId>',ProductView._Delete_Product),

    
]