//package dev.FinchTest;

import java.awt.image.BufferedImage;
import java.io.*;
import java.awt.*;
import javax.swing.JButton;
import javax.swing.JFrame;
import java.awt.Color;
import java.awt.Container;
import java.awt.Font;
import javax.swing.UIManager;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import edu.cmu.ri.createlab.terk.robot.finch.Finch;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

//imports for transforming image
import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class FinchTest {

public static Finch myf = new Finch();

    final static boolean shouldFill = true;
    final static boolean shouldWeightX = true;
    final static boolean RIGHT_TO_LEFT = false;

    public static void addComponentsToPane(Container pane) {
        if (RIGHT_TO_LEFT) {
            pane.setComponentOrientation(ComponentOrientation.RIGHT_TO_LEFT);
        }

        //JButton button;
        pane.setLayout(new GridBagLayout());
        GridBagConstraints c = new GridBagConstraints();
        if (shouldFill) {
        //natural height, maximum width
        c.fill = GridBagConstraints.HORIZONTAL;
        }
        UIManager.put("Button.background", Color.red);// background is the color of the button background
        UIManager.put("Button.foreground", Color.white);// foreground is the color of the font
        Font f = new Font("Serif", Font.ITALIC, 24);// font style, and size mentioned here
        UIManager.put("Button.font", f);
//---------------------------------------------------------------- B 1 (forward button)
        //distribute space among columns "weightx"
        //distribute space among rows "weighty"
        // "ipady" to make button tall
        //insets = new Insets(10,0,0,0) we use insets to put space between two buttons
        //Insets(int top, int left, int bottom, int right)
        //Creates and initializes a new Insets object with the specified top, left, bottom, and right insets.
        JButton forward = new JButton("Forward");
        if (shouldWeightX) {
        c.weightx = 0.3;
        }
        c.fill = GridBagConstraints.RELATIVE;
        c.ipady = 30;
        c.gridwidth = 3;//it says how many cell the button will cover
        c.fill = GridBagConstraints.HORIZONTAL;
        c.gridx = 0;
        c.gridy = 0;
        //adding action listener
            ActionListener b1 = new AListener1();
            forward.addActionListener(b1);//adding action listener
            pane.add(forward);
        //adding buttons to the control pane;
        pane.add(forward, c);
//----------------------------------------------------------------- B 2 (left button)

        JButton left = new JButton("Left");
        c.fill = GridBagConstraints.NONE;
        c.fill = GridBagConstraints.RELATIVE;
        c.weightx = 0.5;
        c.anchor = GridBagConstraints.LINE_START;
        //c.fill = GridBagConstraints.HORIZONTAL;
        c.insets = new Insets(0,50,0,0);//moving the button from left border
        //c.ipady = 20;//it changes the size of a button, according to height and width
        //c.gridwidth = 3;
        //c.gridheight = 1;
        c.gridx = 0;
        c.gridy = 1;
        //adding action listener
            ActionListener b2 = new AListener2();
            left.addActionListener(b2);//adding action listener
            pane.add(left);
        //adding buttons to the control pane;
        pane.add(left, c);
//----------------------------------------------------------------- B 3 (right button)
        JButton right = new JButton("Right");
        c.fill = GridBagConstraints.NONE;
        c.fill = GridBagConstraints.RELATIVE;
        //c.fill = GridBagConstraints.HORIZONTAL;
        c.anchor = GridBagConstraints.LINE_END;
        c.insets = new Insets(0,0,0,50);//moving the button from right border
        //c.ipady = 40;
        c.gridwidth = 0;
        c.weightx = 0.5;
        c.gridx = 0;
        c.gridy = 1;
        //adding action listener
                ActionListener b3 = new AListener3();
                right.addActionListener(b3);//adding action listener
                pane.add(right);
        pane.add(right, c);//adding buttons to the control pane;
//----------------------------------------------------------------- B 4 (back button)
        JButton back = new JButton("Backward");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.insets = new Insets(0,0,0,0);
        c.ipady = 30;      //make this component tall
        c.weightx = 0.0;
        c.gridwidth = 3;
        c.gridx = 0;
        c.gridy = 2;
        //adding action listener
          ActionListener b4 = new AListener4();
          back.addActionListener(b4);//adding action listener
          pane.add(back);
        pane.add(back, c);//adding buttons to the control pane;
//----------------------------------------------------------------------B 5 (kick)
        JButton kick = new JButton("Kick");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.insets = new Insets(0,0,0,0);
        c.ipady = 30;      //make this component tall
        c.weightx = 0.0;
        c.gridwidth = 3;
        c.gridx = 0;
        c.gridy = 3;
        //adding action listener
          ActionListener b5 = new AListener5();
          kick.addActionListener(b5);//adding action listener
          pane.add(kick);
        pane.add(kick, c);//adding buttons to the control pane;

//---------------------------------------------------------------------- B 6 (camera)
        JButton camera = new JButton("Camera");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.ipady = 20;       //reset to default
        c.weighty = 0.0;   //request any extra vertical space
        c.anchor = GridBagConstraints.PAGE_END; //bottom of space
        c.insets = new Insets(1,0,0,0);  //top padding
        c.gridx = 1;       //aligned with button 2
        c.gridwidth = 2;   //2 columns wide
        c.gridy = 4;       //third row
        //adding action listener
          ActionListener b6 = new AListener6();
          camera.addActionListener(b6);//adding action listener
          pane.add(camera);
        pane.add(camera, c);//adding buttons to the control pane;*/


    }//-----------------------------------------------------------addComponentsToPane(Container pane)-----------------------------

    /**
     * Create the GUI and show it. For thread safety,
     * this method should be invoked from the
     * event-dispatching thread.
     */
    private static void createAndShowGUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("GridBagLayoutDemo");
        frame.setPreferredSize(new Dimension(475, 400));
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Set up the content pane.
        addComponentsToPane(frame.getContentPane());

        //Display the window.
        frame.pack();//Basically Pack() function automatically sizes the JFrame based on the size of the components
        frame.setVisible(true);//setVisible(true) method makes the window visible
    }//----------------------------------------------------- createAndShowGUI()---------------------------------------------


    public static void main(String[] args) throws Exception{
        myf.setLED(0, 255, 0,1000);
        System.out.println("Finch is connected....................................................");

                /**setDefaultCloseOperation can be written as setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE)
             * or an integer can be used instead of that
             * DO_NOTHING_ON_CLOSE = 0
             * HIDE_ON_CLOSE = 1
             * DISPOSE_ON_CLOSE = 2
             * EXIT_ON_CLOSE = 3
             */

        //Schedule a job for the event-dispatching thread:
        //creating and showing this application's GUI.
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
        myf.quit();
    }//-------------------------------------------/main ----------------------------------------
}//-----------------------------------------------------------/class--------------------------------------------

//-----------------------------------------------------forward----------------------------------------------------
class AListener1 implements ActionListener {

        //AListener1() {
          //}
	Forward FW = new Forward();
          public void actionPerformed(ActionEvent e) {
            if (e.getActionCommand().equals("Forward")) {
                System.out.println("Finch moving forward");
               FW.forward();
             }
          }
        }
//-------------------------------------------------------backward--------------------------------------------------------
class AListener4 implements ActionListener {

        //AListener4() {
        //  }
	Backward BW = new Backward();
          public void actionPerformed(ActionEvent e) {
            if (e.getActionCommand().equals("Backward")) {
                System.out.println("Finch moving backward");
               BW.backward();
            }
          }
        }
//-------------------------------------------------------right-------------------------------------------------------
class AListener3 implements ActionListener {

        //AListener3() {
        //  }
	Right R = new Right();
          public void actionPerformed(ActionEvent e) {
            if (e.getActionCommand().equals("Right")) {
                System.out.println("Finch moving right");
               R.right();
            }
          }
        }
//----------------------------------------------------------left----------------------------------------------------
class AListener2 implements ActionListener {

        //AListener2() {
        //  }
	Left L = new Left();
          public void actionPerformed(ActionEvent e) {
            if (e.getActionCommand().equals("Left")) {
              System.out.println("Finch moving left");
              L.left();
            }
          }
        }
//-----------------------------------------------------------kick----------------------------------------------------
class AListener5 implements ActionListener {

        //AListener5(){
        //}
	Kick K = new Kick();
        public void actionPerformed(ActionEvent e) {
                if (e.getActionCommand().equals("Kick")) {
                        System.out.println("Finch will kick football");
                        K.kick1();
                        K.kick2();
                }
        }
}
//----------------------------------------------------------Camera----------------------------------------------------
class AListener6 implements ActionListener {
         //AListener6() {
         // }
	Camera CM = new Camera();
          public void actionPerformed(ActionEvent e) {
            if (e.getActionCommand().equals("Camera")) {
              System.out.println("Finch will take photo");
                  try {
                        CM.camera();
                }
		 catch (IOException e1) {
                        e1.printStackTrace();
                }
		catch (Exception e1) {
			e1.printStackTrace();
		}
		CM.gray();
		CM.binary();
              }//------------------------------------------------------------------------if closed
          }//----------------------------------------------method closed

}//---------------------------------class closed

