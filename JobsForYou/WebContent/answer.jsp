<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	import = "myPackage.FileReaders"
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
				 <li ><a href="graduatejobs.html" >Graduate Jobs</a>  
				 </li>
		 
				 <li><a href="Internship.html" >Internships</a>
				</li>
		 
				 <li><a href="summer.html">Summer Jobs</a>
				</li>
				 <li><a href="parttime0.html">Part-Time Jobs</a>
				   
				 </li>
				 <li><a href="forum.jsp" >Forum</a></li>
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
			
			<div class="con_g1">
	
			<%
				String qsid = request.getParameter("question_ID") ;
				int questionid = Integer.parseInt(qsid) ;
				
				FileReaders MyReader = new FileReaders();
				String question = MyReader.readCellToString(request.getRealPath("/request&answer.txt"),"qs",questionid);
				String answer = MyReader.readCellToString(request.getRealPath("/request&answer.txt"),"ans",questionid);
				answer = answer.replaceAll("<br>","\n");
			%>
			
	
		
				
				<h2>Answer Question <%=questionid+1%>.</h2>
				<p><%=question %></p>
				<p><strong>Please write down the answer. </strong></p>
				<form action="submitanswer.jsp" method="post">
					<textarea name="answer_content" maxlength="5000" style="height: 200px; width: 750px; background-color: #E0E0E0" required><%=answer %></textarea>
					<input type="hidden" name="question_ID" value="<%=questionid%>">
					<p><input type="submit" value="Post"></p>&nbsp
					<p><input type="button" value="BACK" onClick="history.go(-1);return true;"></p>
				</form>
			</div>
	
	
	
		</div><!-- /content -->
		
		<div class="home_footer">
		<br>
						<p>Jobs4U Project &copy; 2013 All Rights Reserved &nbsp;&nbsp; |&nbsp;&nbsp; Computer Science, Brunel University</p>
		</div>
	</div><!-- /main_home -->
	
</body>
</html>
