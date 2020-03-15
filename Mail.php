<?php
$get_sender = $_GET['to'];
$get_msg = $_GET['msg'];
// the message
// $msg = '
//     Registration Successful
//     A new user has been added to your site.


//         The Registration is successful. Now you can login with the
//         same credentials. 
   
//     Thank you for Registration. Your data is secure wuth us.
    

// ';

// $User = Request.QueryString('user')
// use wordwrap() if lines are longer than 70 characters
// $msg = wordwrap($msg,70);
$headers = "From: bleedink@indev.com";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$send = $get_sender;

$subject = $_GET['subject'];

// send email
$mail = mail($send,$subject,$get_msg, $headers);

if($mail)
{
    echo "ok";
}
?>