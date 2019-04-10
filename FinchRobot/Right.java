//package dev.FinchTest;

import edu.cmu.ri.createlab.terk.robot.finch.Finch;

public class Right {

          public void right(){
                  FinchTest.myf = new Finch();
                // Set LED orange, and move left full speed for one second
                  FinchTest.myf.setLED(255, 165, 0);
                  FinchTest.myf.setWheelVelocities(180, -180, 2000/2);
                  FinchTest.myf.quit();
          }
}
