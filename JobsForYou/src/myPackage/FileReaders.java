package myPackage;

import java.util.*; import java.io.*; 

public class FileReaders {
	
	public static ArrayList<String> readFieldToArrayList(String sFileName, String type){
		
		String target = Engine.switchType(type) ;
		BufferedReader breader = null;
		ArrayList<String> My_ArrayList = new ArrayList<String>();
		
		try
		{
			breader = new BufferedReader(new FileReader(sFileName));
			String line = null;
			String content = "" ;
			
			while ((line = breader.readLine()) != null) {
				if(line.equals("<--" + target + "-->")){
					while (!(line = breader.readLine()).equals("<--/" + target + "-->")){
						content += line ;
						content += "<br>" ;
					}
					My_ArrayList.add(content);
					content = "" ;
				}
			}
		}
		catch (FileNotFoundException ex)		// Catch the exception if the file does not exist
		{
			ex.printStackTrace();
		}
		catch (IOException ex)				// Catch the exception if an Input/Output error occurs
		{
			ex.printStackTrace();
		}
		finally								// Close the buffer handler
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
		return My_ArrayList;					// return the ArrayList
	}

	public static String readCellToString(String sFileName, String type, int questionID){
		
		String target = Engine.switchType(type) ;
		BufferedReader breader = null;
		String content = "" ;

		try
		{
			breader = new BufferedReader(new FileReader(sFileName));

			String line = null;
			int i = 0 ;

			while ((line = breader.readLine()) != null && i <= questionID)
				if(line.equals("<--" + target + "-->")){
					if(i == questionID)
						while (!(line = breader.readLine()).equals("<--/" + target + "-->")) {
							content += line ;
							content += "<br>" ;
						}
					i++ ;
				}
		}
		catch (FileNotFoundException ex)		// Catch the exception if the file does not exist
		{
			ex.printStackTrace();
		}
		catch (IOException ex)				// Catch the exception if an Input/Output error occurs
		{
			ex.printStackTrace();
		}
		finally								// Close the buffer handler
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
		return content;						// return the content
	}
	
	public static int countCell(String sFileName, String type){
		
		String target = Engine.switchType(type) ;
		BufferedReader breader = null;
		int count = 0 ;

		try
		{
			breader = new BufferedReader(new FileReader(sFileName));

			String line = null;

			while ((line = breader.readLine()) != null){
				if(line.equals("<--" + target + "-->"))
					count++ ;
			}
		}
		catch (FileNotFoundException ex)		// Catch the exception if the file does not exist
		{
			ex.printStackTrace();
		}
		catch (IOException ex)				// Catch the exception if an Input/Output error occurs
		{
			ex.printStackTrace();
		}
		finally								// Close the buffer handler
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
		return count;						// return the content
	}

	public static int countFilledCell(String sFileName, String type){
		
		String target = Engine.switchType(type) ;
		BufferedReader breader = null;
		String content = "" ;
		int count = 0 ;

		try
		{
			breader = new BufferedReader(new FileReader(sFileName));

			String line = null;

			while ((line = breader.readLine()) != null){
				if(line.equals("<--" + target + "-->")){
					while (!(line = breader.readLine()).equals("<--/" + target + "-->")){
						content += line ;
						content += "<br>" ;
					}
					if(!content.equals(""))
						count++ ;
				}
				content = "" ;
			}
		}
		catch (FileNotFoundException ex)		// Catch the exception if the file does not exist
		{
			ex.printStackTrace();
		}
		catch (IOException ex)				// Catch the exception if an Input/Output error occurs
		{
			ex.printStackTrace();
		}
		finally								// Close the buffer handler
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
		return count;						// return the content
	}

}