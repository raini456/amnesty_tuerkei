<?php
/*secret key recaptcha:
  6LeAQgwUAAAAAEzXYNDbBBwYbJuEsnS81pxNdqS5
*/
$data=json_decode(file_get_contents("php://input"));     
$name=$data->kontaktName;
$email=$data->kontaktEmail;
$betreff=$data->kontaktBetreff;
$message=$data->kontaktMessage;
$checked=$data->checked;
$header = 'From: www.amnesty-tuerkei-berlin.de'. "\r\n" .'Reply-To: '.$email. "\r\n";

if(!isset($data) || $data=""){
  $name=$_POST['name'];
  $email=$_POST['email'];
  $betreff=$_POST['betreff'];
  $message=$_POST['nachricht'];
  $checked=$_POST['checked'];
}


$betreff= "Betreff: ".$betreff;
$emailTo="kontakt@peh-berlin.de";

if(!empty($name) && !empty($email) && !empty($betreff) && !empty($message) && $checked==false){
    $inhalt="Absender: ".$name."\n\nNachricht:\n\n".$message;
  }
  else if(!empty($name) && !empty($email) && !empty($betreff) && !empty($message) && $checked==true){
     $inhalt="Absender: ".$name."\n\nNachricht:\n\n".$message."\n\nWunsch: Bitte in Verteiler aufnehmen";
    }

if($name!="" && $email!="" && $betreff!="" && $message!=""){
   @mail($emailTo, $betreff, $inhalt, $header); 
   echo "gesendet";
  }
   else{
     echo "nicht gesendet";
   }  
?>