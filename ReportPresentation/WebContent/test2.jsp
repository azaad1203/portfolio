<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
// calling methods
String Fname = request.getParameter("name");
String Addr = request.getParameter("address");
String Numberofpies = request.getParameter("pies");
String size = request.getParameter("size");
String toppings = request.getParameter("top");
%>
<%
// printing methods directly
%>
<p>Thanks for your order: <%= Fname %></p>
<p>The order will be sent to this address:<%= Addr %></p>
<p>Pizza size:<%= size %>-inch</p>
<p>Number of pies:<%= Numberofpies %></p>
<% 
// to print name of the items you have selected
String[] topp = request.getParameterValues("top");
for (int i=0; i<topp.length; i++){
	out.println("you have selected:"+topp[i]+"<br>");
}
%>
<%
// to print number of thing you have selected
String[] toppingsa = request.getParameterValues("top");
%>
<% 
// making string to integer
String Npies = request.getParameter("pies");
int pienumber = Integer.valueOf(Npies);
%>
<% 
// using if condition
if (pienumber>=2)
		
	out.println("you got free delivery"+"<BR>");
else
	if(pienumber>3)
		out.println("You got free delivery and a free drink with your order"+"<BR>");
	else
		out.println("you have to pay 3 pd for delivery"+"<BR>");
%>
<%
// if condition to compare valuse in jsp
if ((size.equals("12")) || (size.equals("14")))
	out.println("you got 10% discount");
%>
<form action="test2.jsp" method="post">
<input type="submit" value="Return">
</form>


</body>
</html>
