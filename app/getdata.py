import cv2
import layoutparser as lp
from pytesseract import *
from pdf2image import convert_from_path
import numpy as np
# import cv2 as cv
import tensorflow as tf
from .apps import *
from PIL import Image
pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
POPPLER_PATH=r'C:\poppler-23.05.0\Library\bin'

def ocr_data(path):
    pages=convert_from_path(path,poppler_path=POPPLER_PATH)[0]
    cv2.imwrite("captured.png",np.array(pages))
    print("page saved\n")
    image = cv2.imread("captured.png")
    image=image[900:2500,:]
    image = image[..., ::-1]
    layout = AppConfig.model.detect(image)
    x_1=0
    y_1=0
    x_2=0
    y_2=0

    for l in layout:
        #print(l)
        if l.type == 'Table':
            x_1 = int(l.block.x_1)
            print(l.block.x_1)
            y_1 = int(l.block.y_1)
            x_2 = int(l.block.x_2)
            y_2 = int(l.block.y_2)
            
            break
    
    print(x_1,y_1,x_2,y_2)
    cv2.imwrite('ext_im.jpg', image[y_1:y_2,x_1:x_2])
    image_cv = image[y_1:y_2,x_1:x_2]
    image_height = image_cv.shape[0]
    image_width = image_cv.shape[1]
    # cv2.imread(image_path)
    output = AppConfig.ocr.ocr('ext_im.jpg')
    print("output came from model")
    boxes = [line[0] for line in output]
    texts = [line[1][0] for line in output]
    probabilities = [line[1][1] for line in output]
    image_boxes = image_cv.copy()

    horiz_boxes = []
    vert_boxes = []
    im = image_cv.copy()
    for box in boxes:
        x_h, x_v = 0,int(box[0][0])
        y_h, y_v = int(box[0][1]),0
        width_h,width_v = image_width, int(box[2][0]-box[0][0])
        height_h,height_v = int(box[2][1]-box[0][1]),image_height

        horiz_boxes.append([x_h,y_h,x_h+width_h,y_h+height_h])
        vert_boxes.append([x_v,y_v,x_v+width_v,y_v+height_v])

        cv2.rectangle(im,(x_h,y_h), (x_h+width_h,y_h+height_h),(0,0,255),1)
        cv2.rectangle(im,(x_v,y_v), (x_v+width_v,y_v+height_v),(0,255,0),1)

    horiz_out = tf.image.non_max_suppression(
    horiz_boxes,
    probabilities,
    max_output_size = 1000,
    iou_threshold=0.1,
    score_threshold=float('-inf'),
    name=None
        )
    
    horiz_lines = np.sort(np.array(horiz_out))
    print(horiz_lines)
    im_nms = image_cv.copy()
    for val in horiz_lines:
        cv2.rectangle(im_nms, (int(horiz_boxes[val][0]),int(horiz_boxes[val][1])), (int(horiz_boxes[val][2]),int(horiz_boxes[val][3])),(0,0,255),1)

    vert_out = tf.image.non_max_suppression(
    vert_boxes,
    probabilities,
    max_output_size = 1000,
    iou_threshold=0.1,
    score_threshold=float('-inf'),
    name=None
        )
    vert_lines = np.sort(np.array(vert_out))
    print(vert_lines)

    for val in vert_lines:
        cv2.rectangle(im_nms, (int(vert_boxes[val][0]),int(vert_boxes[val][1])), (int(vert_boxes[val][2]),int(vert_boxes[val][3])),(255,0,0),1)
    
    out_array = [["" for i in range(len(vert_lines))] for j in range(len(horiz_lines))]
    print(np.array(out_array).shape)

    unordered_boxes = []

    for i in vert_lines:
        print(vert_boxes[i])
        unordered_boxes.append(vert_boxes[i][0])
    
    ordered_boxes = np.argsort(unordered_boxes)
    print(ordered_boxes)    


    for i in range(len(horiz_lines)):
        for j in range(len(vert_lines)):
            resultant = intersection(horiz_boxes[horiz_lines[i]], vert_boxes[vert_lines[ordered_boxes[j]]] )

            for b in range(len(boxes)):
                the_box = [boxes[b][0][0],boxes[b][0][1],boxes[b][2][0],boxes[b][2][1]]
                if(iou(resultant,the_box)>0.1):
                    out_array[i][j] = texts[b]

    out_array=np.array(out_array)
    df=pd.DataFrame(out_array)
    print(df)
    data=df.to_dict('list')
    return data


def intersection(box_1, box_2):
  return [box_2[0], box_1[1],box_2[2], box_1[3]]

import pandas as pd
def iou(box_1, box_2):

  x_1 = max(box_1[0], box_2[0])
  y_1 = max(box_1[1], box_2[1])
  x_2 = min(box_1[2], box_2[2])
  y_2 = min(box_1[3], box_2[3])

  inter = abs(max((x_2 - x_1, 0)) * max((y_2 - y_1), 0))
  if inter == 0:
      return 0
      
  box_1_area = abs((box_1[2] - box_1[0]) * (box_1[3] - box_1[1]))
  box_2_area = abs((box_2[2] - box_2[0]) * (box_2[3] - box_2[1]))
  
  return inter / float(box_1_area + box_2_area - inter)