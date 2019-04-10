//package dev.FinchTest;

import edu.cmu.ri.createlab.terk.robot.finch.Finch;

public class Backward {

          public void backward(){
                  FinchTest.myf = new Finch();
                // Set LED white, and move backward full speed for one second
                  FinchTest.myf.setLED(255, 255, 255);
                  FinchTest.myf.setWheelVelocities(-200, -200, 1000);
                  FinchTest.myf.quit();
          }
 }
