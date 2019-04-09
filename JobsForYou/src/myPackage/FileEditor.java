package myPackage;

import java.io.*; import java.text.SimpleDateFormat ; import java.text.DateFormat ; import java.util.*;

public class FileEditor {

	public void writeAnswer(String sFileName, String tFileName, String answer, int questionID){
		try
		{// Create a new file writer

			FileWriter mywriter = new FileWriter(tFileName, true);
			PrintWriter pw= new PrintWriter(mywriter);
			Date dt1=new Date() ;
			DateFormat dateFormatter = new  SimpleDateFormat("dd/MM/yyyy HH:mm:ss");	//DteFormat is a concrete class
			String s1 = dateFormatter.format(dt1) ;

			BufferedReader breader = null;
			try
			{
				breader = new BufferedReader(new FileReader(sFileName));

				String line = null;
				int i = 0 ;

				while ((line = breader.readLine()) != null && i <= questionID) {	//copy requests to the temperate file
					if(line.equals("<--Answer-->"))
						i++ ;
					pw.println(line);
				}

				pw.println(answer) ;		//printing the answer to the temperate file

				while(line != null && !line.equals("<--/Answer-->")) {	//Skip the remaining line until it reach <--/Answer-->
					line = breader.readLine();
				}
				
				pw.println(line);			//print <--/Answer-->
				pw.println("<--Atime-->");
				pw.println(s1);
				
				while(line != null && !line.equals("<--/Atime-->")) {	//Skip the remaining line until it reach <--/Atime-->
					line = breader.readLine();
				}

				do{
					pw.println(line);		//copy the remaining requests to the temperate file
				}while((line = breader.readLine()) != null) ;
				
			}
			// Catch the exception if the file does not exist
			catch (FileNotFoundException ex)
			{
				ex.printStackTrace();
			}
			// Catch the exception if an Input/Output error occurs
			catch (IOException ex)
			{
				ex.printStackTrace();
			}
			// Close the buffer handler
			finally
			{
				try
				{
					if (breader != null)
						breader.close();
				} catch (IOException ex)
				{
					ex.printStackTrace();
				}
			}
			// Save and close the file
			pw.close();
			mywriter.close();
		}
		// Catch the exception if an Input/Output error occurs
		catch (IOException ex){
			ex.printStackTrace();
		}
		
		File oldFile = new File(sFileName);
		oldFile.delete() ;						//delete the original file
		File newFile = new File(tFileName);
		newFile.renameTo(oldFile) ;				//replace the original file by renaming the temperate file with the path of the original file 
	}

	public void editQuestion(String sFileName, String tFileName, String question, int questionID){
		try
		{// Create a new file writer

			FileWriter mywriter = new FileWriter(tFileName, true);
			PrintWriter pw= new PrintWriter(mywriter);

			BufferedReader breader = null;
			try
			{
				breader = new BufferedReader(new FileReader(sFileName));

				String line = null;
				int i = 0 ;

				while ((line = breader.readLine()) != null && i <= questionID) {	//copy requests to the temperate file
					if(line.equals("<--Question-->"))
						i++ ;
					pw.println(line);
				}

				pw.println(question) ;		//printing the answer to the temperate file

				while(line != null && !line.equals("<--/Question-->")) {	//Skip the remaining line until it reach <--/Question-->
					line = breader.readLine();
				}

				do{
					pw.println(line);		//copy the remaining requests to the temperate file
				}while((line = breader.readLine()) != null) ;
				
			}
			// Catch the exception if the file does not exist
			catch (FileNotFoundException ex)
			{
				ex.printStackTrace();
			}
			// Catch the exception if an Input/Output error occurs
			catch (IOException ex)
			{
				ex.printStackTrace();
			}
			// Close the buffer handler
			finally
			{
				try
				{
					if (breader != null)
						breader.close();
				} catch (IOException ex)
				{
					ex.printStackTrace();
				}
			}
			// Save and close the file
			pw.close();
			mywriter.close();
		}
		// Catch the exception if an Input/Output error occurs
		catch (IOException ex){
			ex.printStackTrace();
		}
		
		File oldFile = new File(sFileName);
		oldFile.delete() ;						//delete the original file
		File newFile = new File(tFileName);
		newFile.renameTo(oldFile) ;				//replace the original file by renaming the temperate file with the path of the original file 
	}

	public void deleteItem(String sFileName, String tFileName, String type, int questionID){
		try			// Create a new file writer
		{
			String target = Engine.switchType(type) ;

			FileWriter mywriter = new FileWriter(tFileName, true);
			PrintWriter pw= new PrintWriter(mywriter);

			BufferedReader breader = null;
			try
			{
				breader = new BufferedReader(new FileReader(sFileName));

				String line = null;
				int i = 0 ;

				while ((line = breader.readLine()) != null && (i < questionID || !line.equals("<--" + target + "-->"))) {	//copy the content to the temperate file until it reach the record to delete
					if(line.equals("<--" + target + "-->"))
						i++ ;
					pw.println(line);
				}

				do{						//Skip the remaining line until it reach the start of the next target tag
					line = breader.readLine();
				}while(line != null && !line.equals("<--" + target + "-->")) ;

				if (line != null){				//if breader already reach the end of the file, no need to run the remaining part
					do{
						pw.println(line);		//copy the remaining parts to the temperate file
					}while((line = breader.readLine()) != null) ;
				}
				
			}
			// Catch the exception if the file does not exist
			catch (FileNotFoundException ex)
			{
				ex.printStackTrace();
			}
			// Catch the exception if an Input/Output error occurs
			catch (IOException ex)
			{
				ex.printStackTrace();
			}
			// Close the buffer handler
			finally
			{
				try
				{
					if (breader != null)
						breader.close();
				} catch (IOException ex)
				{
					ex.printStackTrace();
				}
			}
			// Save and close the file
			pw.close();
			mywriter.close();
		}
		// Catch the exception if an Input/Output error occurs
		catch (IOException ex){
			ex.printStackTrace();
		}
		
		File oldFile = new File(sFileName);
		oldFile.delete() ;						//delete the original file
		File newFile = new File(tFileName);
		newFile.renameTo(oldFile) ;				//replace the original file by renaming the temperate file with the path of the original file 
	}

}