package myPackage;

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat ;
import java.text.DateFormat ;
import java.util.*;

public class FileWriters {

	public void writeQuestion(String sFileName, String Contents)
	{try
		{// Create a new file writer

			FileWriter mywriter = new FileWriter(sFileName, true);
			PrintWriter pw= new PrintWriter(mywriter);
			Date date1=new Date() ;
			DateFormat dateFormatter = new  SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			String st1 = dateFormatter.format(date1) ;


			pw.println("<--Request-->");
			pw.println("<--Question-->");
			pw.println(Contents);          
			pw.println("<--/Question-->");
			pw.println("<--Qtime-->");
			pw.println(st1);					// writing date
			pw.println("<--/Qtime-->");
			pw.println("<--Answer-->");
			pw.println("<--/Answer-->");
			pw.println("<--Atime-->");
			pw.println("<--/Atime-->");
			pw.println("<--/Request-->");
			pw.println();
			// Save and close the file
			pw.close();
			mywriter.close();
		}
		// Catch the exception if an Input/Output error occurs
		catch (IOException ex)
		{
			ex.printStackTrace();
		}
	}

	public void genStatisticReport(String sFileName, String srFileName)
	{try
		{// Create a new file writer
			File oldFile = new File(srFileName);
			oldFile.delete() ;						//delete the old Statistic Report
			FileWriter mywriter = new FileWriter(srFileName, true);
			PrintWriter pw= new PrintWriter(mywriter);
			
			Date dt1=new Date() ;
			DateFormat dateFormatter = new  SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			String s1 = dateFormatter.format(dt1) ;
			
			ArrayList<String> qstimetemp = new ArrayList<String>();
			ArrayList<String> anstimetemp = new ArrayList<String>();
			qstimetemp = FileReaders.readFieldToArrayList(sFileName,"qst");
			anstimetemp = FileReaders.readFieldToArrayList(sFileName,"anst");
			ArrayList<Date> qstime = new ArrayList<Date>();
			ArrayList<Date> anstime = new ArrayList<Date>();
			ArrayList<Long> diffr = new ArrayList<Long>();
			
			for(int i=0;i<qstimetemp.size();i++)			//Changing the data type of question times to Date
				if(!qstimetemp.get(i).equals(""))
					qstime.add(dateFormatter.parse(qstimetemp.get(i))) ;
			for(int i=0;i<anstimetemp.size();i++)			//Changing the data type of answer times to Date
				if(!anstimetemp.get(i).equals(""))
					anstime.add(dateFormatter.parse(anstimetemp.get(i))) ;
			
			diffr = Engine.timeToArrayList(anstime,qstime) ;
			long mean = Engine.meanofArrayList(diffr) ;
            long max = Engine.maxofArrayList(diffr) ;
            long median = Engine.medianofArrayList(diffr) ;
            int numofanswered = FileReaders.countFilledCell(sFileName, "ans") ;
            int numofquestion = FileReaders.countCell(sFileName, "qs") ;
			

			pw.println("============================ Statistical Summary Report ============================") ;
			pw.println("Time of Generation :\t\t\t\t\t\t" + s1) ;
			pw.println("------------------------------------------------------------------------------------") ;
			pw.println();
			pw.println("Maximum number of hours taken to  ");
			pw.println("reply to a request:\t\t\t\t\t" + Engine.longtoString(max));
			pw.println();
			pw.println("Mean number of hours taken to ");
			pw.println("reply to answered requests:\t\t\t\t" + Engine.longtoString(mean));
			pw.println();
			pw.println("Median number of hours taken to ");
			pw.println("reply to answered requests:\t\t\t\t" + Engine.longtoString(median));
			pw.println();
			pw.println("Number of requests that have been answered:\t\t\t\t\t" + numofanswered);
			pw.println();
			pw.println("Number of currently archived messages:\t\t\t\t\t\t" + numofquestion);
			pw.println();

			// Save and close the file
			pw.close();
			mywriter.close();
		}
		// Catch the exception if an Input/Output error occurs
		catch (IOException e)
		{
			e.printStackTrace();
		} catch (ParseException ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
		}
	}

}