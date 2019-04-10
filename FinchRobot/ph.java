import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.io.*;

public class ph {

        public static void main(String[] args) throws Exception {
   //     String command = "raspistill -o x.jpg";
     //   Process p = Runtime.getRuntime().exec(command);
	String[] command = {"sh", "/home/pi/dev/FinchTest/camera.sh"};
        p = Runtime.getRuntime().exec(command); 
        p.waitFor();
        //BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
        //String line = "";
        //while((line = r.readLine()) != null) System.out.println(line);
        System.out.println("Captured");

        }    

}
