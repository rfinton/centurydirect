<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * upload this to Amazon EC2 server:  scp -i ~/aws/Ubuntu-1.pem trigger.php ubuntu@52.91.158.44:/var/www/html
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require '../PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "7bridgesmarketing@gmail.com";

//Password to use for SMTP authentication
$mail->Password = "Marketingisfun7";

//Set who the message is to be sent from
$mail->setFrom('7bridgesmarketing@gmail.com', 'Century Direct Campaign Trigger');

//Set an alternative reply-to address
$mail->addReplyTo('shanna@7bridgesmarketing.com', 'Shanna Vollmer');

//Set the subject line
$mail->Subject = 'Contact submitted form data';

// =================================================================================
//                          Email Recipients
// =================================================================================

$mail->addAddress('ray@7bridgesmarketing.com', 'Ray Finton');
//$mail->addCC('shanna@7bridgesmarketing.com', 'Shanna Vollmer');
//$mail->addCC('carrie@7bridgesmarketing.com', 'Carrie Hill');
//$mail->addCC('contact@centurydirect.net', 'Mike Kellogg');


// =================================================================================
// =================================================================================

$html = "<table cellpadding=6 style='border-collapse:collapse;'><tbody>";

foreach ($_POST as $key => $value) {
    $html = $html . "<tr><td bgcolor='gray' style='color:white; border:solid 1px darkgray;'>" . $key . "</td><td style='border:solid 1px darkgray;'>" . $value . "</td></tr>";
}

$html = $html . "</tbody></table>";

$mail->isHTML (true);
$mail->Body = $html;

//send the message, check for errors
if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}