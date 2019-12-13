import cozmo
from cozmo.util import degrees, distance_mm ,speed_mmps

#For Left,Right,Down,Up
def cozmo_program(robot: cozmo.robot.Robot):
    
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()

#For moving Right_Upward

def cozmo_RightUpward_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
 
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()

    # Turn 90 degrees to the left.
    # Note: To turn to the right, just use a negative number.
 

#cozmo.run_program(cozmo_RightUpward_program)



#For moving Left_Upward
def cozmo_LeftUpward_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
#    robot.turn_in_place(degrees(270)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(-90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    # Turn 90 degrees to the left
    # Note: To turn to the right, just use a negative number.
 


#cozmo.run_program(cozmo_LeftUpward_program)

#For moving Upward_Right

def cozmo_UpwardRight_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
#    robot.turn_in_place(degrees(270)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(-90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()

    # Turn 90 degrees to the left
    # Note: To turn to the right, just use a negative number.
 

#
#cozmo.run_program(cozmo_UpwardRight_program)


#For moving Upward_Left

def cozmo_UpwardLeft_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()

    # Turn 90 degrees to the left.
    # Note: To turn to the right, just use a negative number.
 


#cozmo.run_program(cozmo_UpwardLeft_program)
    
    #For moving DownwardRight
    

def cozmo_DownwardRight_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    
#cozmo.run_program(cozmo_DownwardRight_program)
    
    #For moving Downward_Left
    


def cozmo_DownwardLeft_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(-90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
#cozmo.run_program(cozmo_DownwardLeft_program)



    #For moving Right_Down
def cozmo_RightDown_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    
    
#cozmo.run_program(cozmo_RightDown_program)
#For moving Right_Up


def cozmo_RightUp_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(-90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    
#    
#cozmo.run_program(cozmo_RightUp_program)
#For moving Left_Down

#import cozmo
#from cozmo.util import degrees, distance_mm ,speed_mmps
def cozmo_LeftDown_program(robot: cozmo.robot.Robot):
   
    # Drive forwards for 150 millimeters at 50 millimeters-per-second.
  
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    robot.turn_in_place(degrees(90)).wait_for_completed()
    robot.drive_straight(distance_mm(150), speed_mmps(50)).wait_for_completed()
    
#cozmo.run_program(cozmo_LeftDown_program)

  ##############################################################################################################3end  
    
#from keras.models import load_model
#classifier = load_model('model_saved.h5')
#from glob import glob
#import cv2
#import numpy as np
#from keras.preprocessing import image
#img_mask = 'dataset/slicing/*.png'
#img_names = glob(img_mask)
#        #directions=np.array([])
#        
#for fn in img_names:
#        #count_images= count_images+1 
#    print('processing %s...' % fn,)
#    img = cv2.imread(fn)
#              
#            #    scale_percent = 64 # percent of original size
#            #    width =64 #int(img.shape[1] * scale_percent / 100)
#            #    height =64 #int(img.shape[0] * scale_percent / 100)
#            #    dim = (width, height)
#            ## resize image
#            #    im =cv2.resize(img ,(64,64))
#            #    #im = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
#            #    #img = cv2.resize(64,64)
#            #    test_image =(im)
#              
#    test_image = image.load_img(fn, target_size = (64, 64))
#    test_image = image.img_to_array(test_image)
#    test_image = np.expand_dims(test_image, axis = 0)
#    array=classifier.predict(test_image)
#    result = array[0]
#               # train_generator.class_indices
#              #print(result)
#    answer = np.argmax(result)
#    #directions.append(answer)
#               # moveDir=np.append(directions,answer)
#            #time.sleep(2)
#    if answer == 0:
#        print("Predicted: downward")
##        cozmo.run_program(cozmo_down_program)
#    elif answer == 1:
#        print("Predicted: left")
##        cozmo.run_program(cozmo_left_program)
#        
#        
#       
#    elif answer == 2:
#        print("Predicted: right")
##        cozmo.run_program(cozmo_right_program)
#     
#    elif answer == 3:
#        print("Predicted: up")
##        cozmo.run_program(cozmo_up_program)
#        
#    elif answer == 4:
#        print("Predicted: DownLeft")
##        cozmo.run_program(cozmo_up_program)
#        
#    elif answer == 5 :
#        print("Predicted: DownRight")
##        cozmo.run_program(cozmo_up_program)
#        
#    elif answer == 6:
#        print("Predicted: LeftUp")
##        cozmo.run_program(cozmo_up_program)
#        
#    elif answer == 7:
#        print("Predicted: RightUp")
##        cozmo.run_program(cozmo_up_program)
#        
#    
#        

      
      
        




       
         

#######################################\