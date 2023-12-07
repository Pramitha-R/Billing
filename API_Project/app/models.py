from django.db import models


class Admin(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(db_column='userName', max_length=100, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    firstname = models.CharField(db_column='firstName', max_length=50, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    lastname = models.CharField(db_column='lastName', max_length=50, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    address = models.CharField(max_length=300, db_collation='SQL_Latin1_General_CP1_CI_AS')
    phone = models.CharField(max_length=20, db_collation='SQL_Latin1_General_CP1_CI_AS')
    password = models.CharField(max_length=50, db_collation='SQL_Latin1_General_CP1_CI_AS')
    role_id = models.IntegerField()

    class Meta:
        # managed = False
        db_table = 'admin'