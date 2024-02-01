from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    is_doctor=models.BooleanField(default=False)
    name=models.CharField(max_length=200,null=False,blank=False)
    age=models.CharField(max_length=200,null=False,blank=False)

    def __str__(self) -> str:
        return self.user.username
    

class CustomerDetails(models.Model):
    profile=models.ForeignKey(Profile,on_delete=models.CASCADE)
    hemoglobin=models.CharField(max_length=200,null=True,blank=True)
    rbc_count=models.CharField(max_length=200,null=True,blank=True)
    pcv=models.CharField(max_length=200,null=True,blank=True)
    rdw=models.CharField(max_length=200,null=True,blank=True)
    platelet_count=models.CharField(max_length=200,null=True,blank=True)
    file=models.FileField(upload_to='user_docs/',null=True)
    date=models.DateField(auto_now_add=True)


    def __str__(self) -> str:
        return self.profile.user.username
