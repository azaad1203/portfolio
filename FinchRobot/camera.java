//package dev.FinchTest;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import edu.cmu.ri.createlab.terk.robot.finch.Finch;
//to transform images from color to gray
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import javax.imageio.ImageIO;
//To transform image to binary
import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class Camera {

          public void camera() throws Exception{
         
	  FinchTest.myf = new Finch();
          FinchTest.myf.setLED(255, 255, 0, 1500);//color yellow
          String command = "raspistill -vf -hf -o /home/pi/camera/X.jpg -q 6";
          Process p = Runtime.getRuntime().exec(command);
          // String[] command = {"sh", "/home/pi/dev/FinchTest/camera.sh"};
          // Process p = Runtime.getRuntime().exec(command);
           p.waitFor();
         //BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
         //String line = "";
         //while((line = r.readLine()) != null) System.out.println(line);
          System.out.println("Captured");
	}//--------------------------------------------------/camera
        //codes for transforming image to gray image-----------------------------------------------------
          public void gray(){

              BufferedImage  image;
          	   int width;
          	   int height;
 
       	   try {
       	      File input = new File("/home/pi/camera/X.jpg");
       	      image = ImageIO.read(input);
       	      width = image.getWidth();
       	      height = image.getHeight();
 
       	      for(int i=0; i<height; i++){
 
       	         for(int j=0; j<width; j++){

       	            Color c = new Color(image.getRGB(j, i));
       	            int red = (int)(c.getRed() * 0.299);
       	            int green = (int)(c.getGreen() * 0.587);
       	            int blue = (int)(c.getBlue() *0.114);
       	            Color newColor = new Color(red+green+blue,
       	               
       	            red+green+blue,red+green+blue);
       	               
       	            image.setRGB(j,i,newColor.getRGB());
       	         }
       	      }
       	         
       	      File ouptut = new File("/home/pi/camera/gray.jpg");
       	      ImageIO.write(image, "jpg", ouptut);
       	      System.out.println("image transformed to gray");
       	      
       	   }//---------------------------------/try
       	   catch (Exception e) {}

          }
       public void binary(){
//code to transform gray image to binary image--------------------------------------
	   try
       		 {
        	 BufferedImage original = ImageIO.read(new File("/home/pi/camera/gray.jpg"));

                 BufferedImage binarized = new BufferedImage(original.getWidth(), original.getHeight(),BufferedImage.TYPE_BYTE_BINARY);

         int red;
         int newPixel;
         int threshold =230;

         for(int i=0; i<original.getWidth(); i++)
            {
                for(int j=0; j<original.getHeight(); j++)
                {

                    // Get pixels
                  red = new Color(original.getRGB(i, j)).getRed();

                  int alpha = new Color(original.getRGB(i, j)).getAlpha();

                  if(red > threshold)
                    {
                        newPixel = 0;
                    }
                    else
                    {
                        newPixel = 255;
                    }
                    newPixel = colorToRGB(alpha, newPixel, newPixel, newPixel);
                    binarized.setRGB(i, j, newPixel);

                }//-------------------------------------for loop 2 closed
            } //-----------------------for loop 1 closed
            ImageIO.write(binarized, "png",new File("/home/pi/camera/binary.png") );
           //to view the converted image in a window(JOptionPane)
        /**
            try {
                BufferedImage img = ImageIO.read(new File("/home/pi/camera/blackwhiteimage.png"));
                ImageIcon icon = new ImageIcon(img);
                JOptionPane.showMessageDialog(null, icon);

             } catch (IOException e) {
                e.printStackTrace();
             }*/
         }//----------------------------------try closed
        catch (IOException e)
        {
                e.printStackTrace();
        }

        System.out.println("Image transformed to binary");

        FinchTest.myf.quit();
       } //------------------------------------------------method binary closed
       
	 private static int colorToRGB(int alpha, int red, int green, int blue) {
            int newPixel = 0;
            newPixel += alpha;
            newPixel = newPixel << 8;
            newPixel += red; newPixel = newPixel << 8;
            newPixel += green; newPixel = newPixel << 8;
            newPixel += blue;

            return newPixel;
        }//------------------------------------------/colorToRGB


}//---------------------------------class closed
