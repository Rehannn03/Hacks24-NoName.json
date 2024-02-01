from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import *
import os
from .models import *
from .getdata import ocr_data
# pages=convert_from_path(r'lal_path.pdf',poppler_path=POPPLER_PATH)
# Create your views here.

@api_view(['POST'])
def read_text(request):
    file=request.FILES['file']
    uname='ravika'
    prof = Profile.objects.filter(user__username=uname).first()
    customer=CustomerDetails.objects.create(profile=prof,file=file)
    customer.save()
    print(customer.file.url)
    # path=os.path.join('.',customer.file.url)
    path="./"+customer.file.url
    data=ocr_data(path)
    big_string=" ".join(data[0])
    hemoglobin=data[1][data[0].index('Hemoglobin')] if 'Hemoglo' in big_string else None
    rbc_count=data[1][data[0].index('RBC Count')]
    pcv=data[1][data[0].index('Packed Cell Volume (PCV)')] if 'Packed Cell Volume (PCV)' in big_string else None
    rdw=data[1][data[0].index('Red Cell Distribution Width (RDW)')]
    customer.platelet_count=data[1][data[0].index('Platelet Count')] if 'Platelet Count' in big_string else None
    customer.hemoglobin=hemoglobin
    customer.rbc_count=rbc_count
    customer.rdw=rdw
    customer.pcv=pcv
    customer.save()
    return JsonResponse({'mssg':'done'})










