from django.db import models


class User_roles(models.Model):
    # id = models.IntegerField(primary_key=True)
    username = models.CharField( max_length=100)  
    firstname = models.CharField( max_length=50)  
    lastname = models.CharField( max_length=50)  
    address = models.CharField(max_length=300)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=50)
    role_id = models.IntegerField()

class Products(models.Model):
    # Emp_Id=models.IntegerField(max_length=2)
    Emp_Id = models.ForeignKey(User_roles, on_delete=models.CASCADE)
    Item_name=models.CharField(max_length=50)
    Item_Image=models.ImageField(upload_to='picture')
    price=models.DecimalField(max_digits=5, decimal_places=2)


