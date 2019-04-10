//package dev.FinchTest;

import edu.cmu.ri.createlab.terk.robot.finch.Finch;

public class Forward{

          public void forward(){
                  FinchTest.myf = new Finch();
                //Set LED green, and move forward full speed for one second
                  FinchTest.myf.setLED(0, 255, 0);
                  FinchTest.myf.setWheelVelocities(255, 255, 2000);
                  FinchTest.myf.quit();
          }
}
