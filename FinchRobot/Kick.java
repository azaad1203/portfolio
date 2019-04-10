//package dev.FinchTest;

import edu.cmu.ri.createlab.terk.robot.finch.Finch;

public class Kick {

        public void kick1(){
                FinchTest.myf = new Finch();
                // Set LED yellow, and finch will kick football
                FinchTest.myf.setLED(255, 0, 0);
                FinchTest.myf.setWheelVelocities(-200, -200, 800);// to move finch back
                FinchTest.myf.quit();
        }
        public void kick2(){
                FinchTest.myf = new Finch();
                FinchTest.myf.setWheelVelocities(250, 250, 2000);// to move finch forward
                FinchTest.myf.quit();
        }
}
