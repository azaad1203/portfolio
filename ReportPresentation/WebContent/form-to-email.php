<?php
if(isset($_POST['submit']))
{

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_from = 'vashanitm@gmail.com';//destination email address
$email_subject = "User query";
$email_body = "You have received a new message from the user $name.\n".
		"Here is the message:\n$message".

$to = "aaav_21@yahoo.com";//destination email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: submit.html');
}


//Validate first
if(empty($name)||empty($visitor_email))
{
	echo "Name and email are mandatory!";
	exit;
}

if(IsInjected($visitor_email))
{
	echo "Bad email value!";
	exit;
}




// Function to validate against any email injection attempts
function IsInjected($str)
{
	$injections = array('(\n+)',
			'(\r+)',
			'(\t+)',
			'(%0A+)',
			'(%0D+)',
			'(%08+)',
			'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str))
	{
		return true;
	}
	else
	{
		return false;
	}
}
 
?>