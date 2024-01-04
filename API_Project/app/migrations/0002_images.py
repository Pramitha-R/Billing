# Generated by Django 4.2.8 on 2024-01-02 10:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Item_name', models.CharField(max_length=50)),
                ('Item_Image', models.ImageField(upload_to='picture')),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('Emp_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user_roles')),
            ],
        ),
    ]
