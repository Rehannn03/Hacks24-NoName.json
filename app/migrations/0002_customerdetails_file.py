# Generated by Django 3.2.23 on 2024-02-01 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customerdetails',
            name='file',
            field=models.FileField(null=True, upload_to='user_docs/'),
        ),
    ]
