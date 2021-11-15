<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('kolyasademetrio@gmail.com', 'Dima');
$mail->addAddress('gaida777777@gmail.com');
$mail->Subject = 'Привет';

if (trim(empty($_POST['name'])) && trim(empty($_POST['phone'])) && trim(empty($_POST['email']))) {
   $message = 'Please fill in the form fields.';
} else {
   $body = '<html><head><title>'.$Subject.'</title></head><body>';

   if(trim(!empty($_POST['name']))){
      $body .= '<p>Имя: ' . $_POST['name'] . '</p>';
  }
  if(trim(!empty($_POST['phone']))){
      $body .= '<p>Телефон: ' . $_POST['phone'] . '</p>';
  }
  if(trim(!empty($_POST['email']))){
      $body .= '<p>Почта: ' . $_POST['email'] . '</p>';
  }

  $body .= '</body></html>';

  $mail->Body = $body;
  
  if(!$mail->send()) {
      $message = 'The letter hasn\'t been sent';
  }else{
      $message = 'The letter has been sent!';
  }
}




$response = [
   'message' => $message,
   'data' => $body,
];

header('Content-type: application/json');

echo json_encode($response);
?>