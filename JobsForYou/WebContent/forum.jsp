<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	import = "java.util.*" import = "myPackage.FileReaders" import = "myPackage.Engine" import = "javax.servlet.http.HttpServletRequest"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<!-- codes for website icon to the title of the page -->
<link rel="icon" 
  type="images/jpg" 
  href="Images/t-logo.jpg">
	<title>Jobs4U</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<link href="css/body.css" media="screen" rel="stylesheet" type="text/css" />
 
</head>
<body>
	
	<div class="main_home">
		<div class="left_menu">
			<div class="logo"> <a href="index.html"><img  src="Images/logo.gif"  alt="Image"  height="130" width="80"></a> </div>
					
			<ul id="nav" class="dropdown dropdown-vertical">
				 <li ><a href="graduatejobs.html">Graduate Jobs</a></li>
		 
				 <li><a href="Internship.html" >Internships</a>
				</li>
		 
				 <li><a href="summer.html">Summer Jobs</a>
				</li>
				 <li><a href="parttime0.html">Part-Time Jobs</a>
				   
				 </li>
				 <li><a href="#" >Forum</a></li>
				 <li><a href="AC.html" >About Us</a></li>
				 <li><a href="register.html" >Register</a></li>
				 <li><a href="contact.html" >Contact</a></li>
				 <li><a href="help.html" >Help</a></li>
			</ul><!-- -----------------------------------/menu------------------------------------------ -->
		
		<div class="link2"><a href="https://twitter.com/" target="_blank"><p>Twitter</p></a></div>
		<div class="link"><a href="https://www.facebook.com/" target="_blank"><p>Facebook</p></a></div>
			
		</div><!-- /left_menu -->
		
		<div class="content2">
		
			<div class="header">
				<div class="site_name"><p> Jobs4U</p></div>
				
				<div class="search">
					<form method="get" action="http://www.google.com/custom" target="_top">
					    <table cellpadding="0px" cellspacing="0px">
					     	<tr>
					      	<td style="border-style:solid none solid solid;border-color:#4B7B9F;border-width:1px;">
					      	 <input type="text" name="sa" style="width:100px; border:0px solid; height:17px; padding:0px 3px; position:relative;">
					     	 </td>
					     	 <td style="border-style:solid;border-color:#4B7B9F;border-width:1px;">
					       <input type="submit" value="" style="border-style: none; background: url('Images/searchbutton3.gif') no-repeat; width: 24px; height: 20px;">
					    	  </td>
					    	 </tr>
					    </table>
					</form> 
				</div><!-- /search -->
			</div><!-- /header -->
				
			<div class="con_g"><img  src="Images/forum.png"  alt="Image"  height="300" width="870"></div>
			
			<div class="con_g1">
					
				<h2>Recent Requests:</h2>
				<hr>
				<p>Take a look at some recent requests or you can <a href="request.html"><font color="blue">submit your request</font></a></p>
				<p><a href="genstatisticreport.jsp"><font color="	#FF8566">Download</font></a> our statistical summary report providing from all current and previous requests</p>
				<hr>
				<%
					ArrayList<String> questions = new ArrayList<String>();
						ArrayList<String> answers = new ArrayList<String>();
						ArrayList<String> qstime = new ArrayList<String>();
						ArrayList<String> anstime = new ArrayList<String>();
									
						FileReaders MyFileReader = new FileReaders();
						questions = MyFileReader.readFieldToArrayList(request.getRealPath("/request&answer.txt"),"qs");
						answers = MyFileReader.readFieldToArrayList(request.getRealPath("/request&answer.txt"),"ans");
						qstime = MyFileReader.readFieldToArrayList(request.getRealPath("/request&answer.txt"),"qst");
						anstime = MyFileReader.readFieldToArrayList(request.getRealPath("/request&answer.txt"),"anst");
				%>
				<table align="center" style="width: 100%">
				<col style="background-color:#FFCCCC" />
				<col style="background-color:#A3E0FF" />
				<col style="background-color:#FFCCCC" />
				<col style="background-color:#A3E0FF" />
				<col style="background-color:#FFCCCC" />
				
					<tr>
						<th >	Date/time</th>
						<th >	Question</th>
						<th >	Status</th>
						<th >	Response</th>
						<th >	Date/time</th>
					</tr>
					<%
						for(int i = questions.size()-1; i>=0; i--)
							{
						%>
							<tr>
							<td><%=qstime.get(i)%></td>
							<td><%=questions.get(i)%></td>
							<td><%=Engine.statusCheck(answers.get(i))%></td>
							<td><%=answers.get(i)%></td>
							<td><%=anstime.get(i)%></td>
							</tr>
							
							<%
						}
					%>
				</table>
				
					<hr>
			<br>
				<fieldset> <legend> <h2>Administrator Login Panel</h2></legend>
					<form action = "adminpanel.jsp" method="post">
						<p>
							Name:<br><input type = "text" name = "user_name" maxlength="10" required><BR>
							Password:<br><input type = "password" name = "password" maxlength="10" required>
						</p>
						<p>
							<input type = "submit" value = "Login">
						</p>
					</form>
				</fieldset>
				<br>
				<br>
			</div>
			
			</div><!-- /content -->
		
		<div class="home_footer">
		<br>
						<p>Jobs4U Project &copy; 2013 All Rights Reserved &nbsp;&nbsp; |&nbsp;&nbsp; Computer Science, Brunel University</p>
		</div>
	</div><!-- /main_home -->
	
</body>
</html>
