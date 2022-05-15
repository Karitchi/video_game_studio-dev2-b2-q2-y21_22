
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
 
require 'vendor\autoload.php';
 
$to = $_POST['to'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$mail=new PHPMailer();
$mail-> isSMTP();
$mail->SMTPAuth= true;
$mail->SMTPSecure="ssl";
$mail->Host="smtp.gmail.com";
$mail->Port=465;
 
$mail->Username = 'kali07490@gmail.com';
 
$mail->Password = ' secret';
$mail->AddAddress("$email", "$to");
$mail->FromName="Fawad khan";
$mail->Subject ="$subject";
$mail->AltBody ="You cannot see Html tags";
$mail->MsgHTML($message);
$mail->IsHTML(true);
if(!$mail->Send())
{
 
    echo"Mailer Error:".$mail->ErrorInfo;
 
}else{
 
    echo "message has been sent";
}
 
?>

