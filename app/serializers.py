from rest_framework import serializers
from .models import *
class CustomerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomerDetails
        fields="__all__"

