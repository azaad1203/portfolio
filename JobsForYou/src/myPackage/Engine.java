package myPackage;

import java.util.*;

public class Engine {

	public static String switchType(String type){
		if(type.equals("qs"))
			return "Question" ;
		else if(type.equals("ans"))
			return "Answer" ;
		else if(type.equals("qst"))
			return "Qtime" ;
		else if(type.equals("anst"))
			return "Atime" ;
		else if(type.equals("r"))
			return "Request" ;
		else{
			System.out.print("Type Error!") ;
			return null ;
		}
	}
	
	public static String statusCheck(String answer){		// to change status of questions
		if(answer.equals(""))
			return "Pending" ;
		else
			return "Answered" ;
	}

	public static ArrayList<Long> timeToArrayList(ArrayList<Date> AList1, ArrayList<Date> AList2){
		int Size ;
		ArrayList<Long> tdifference = new ArrayList<Long>();
		
		if(AList1.size()<AList2.size())
			Size = AList1.size() ;
		else
			Size = AList2.size() ;
		
		for(int i=0;i<Size;i++)
			if(AList1.get(i) != null && AList2.get(i) != null)
				tdifference.add(AList1.get(i).getTime()-AList2.get(i).getTime()) ;
		
		return tdifference ;
	}
	
	public static long meanofArrayList(ArrayList<Long> AList){
		long sum = 0 ;
		for(int i=0;i<AList.size();i++)
			sum += AList.get(i) ;
		return sum/AList.size() ;
	}

	public static long maxofArrayList(ArrayList<Long> AList){
		Collections.sort(AList) ;						//Sort the ArrayList
		return AList.get(AList.size()-1) ;
	}

	public static long medianofArrayList(ArrayList<Long> AList){
		Collections.sort(AList) ;
		if(AList.size()%2==0)
			return((AList.get(AList.size()/2)+AList.get(AList.size()/2-1))/2) ;
		else
			return AList.get((AList.size()-1)/2) ;
	}

	public static String longtoString(long date){
		long dateSeconds = date / 1000;
        long dateMinutes = dateSeconds/60;
        long dateHours = dateMinutes/60;
        long dateDays = dateHours/24;
        long dateInHours= dateHours % 24;
        long dateInMinutes= dateMinutes % 60;
        
        return(dateDays + " Days" + dateInHours+ " Hours" + dateInMinutes+ " Minutes");
	}

}