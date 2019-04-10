import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class photo {

          public static void main(String[] args) throws Exception {
	
 //         String command = "raspistill -vf -hf -o /home/pi/camera/X.jpg -q 1";
   //       Process p = Runtime.getRuntime().exec(command);
           String[] command = {"sh", "/home/pi/dev/FinchTest/camera.sh"};
           Process p = Runtime.getRuntime().exec(command);
           p.waitFor();
         //BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
         //String line = "";
         //while((line = r.readLine()) != null) System.out.println(line);
          System.out.println("Captured");
	}
}
