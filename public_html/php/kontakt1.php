<h3>Kontakt</h3>

<div class="contentView1">
 <div class="row-fluid">
  <div class="col-md-12">
<?php
/*secret key recaptcha:
  6LeAQgwUAAAAAEzXYNDbBBwYbJuEsnS81pxNdqS5
*/



$name=$_POST['name'];
$email=$_POST['email'];
$betreff=$_POST['betreff'];
$nachricht=$_POST['nachricht'];
$checked=$_POST['checked'];

echo $name."<br>".$email."<br>".$betreff."<br>".$nachricht."<br>".$checked."<br>";

$header = 'From: www.amnesty-tuerkei-berlin.de'. "\r\n" .'Reply-To: '.$email. "\r\n";
$betreff= "Betreff: ".$betreff;
$emailTo="kontakt@peh-berlin.de";

if($checked==false){
    $inhalt="Absender: ".$name."\n\nNachricht:\n\n".$nachricht;
  }
  else if($checked=="checked"){
     $inhalt="Absender: ".$name."\n\nNachricht:\n\n".$nachricht."\n\nWunsch: Bitte in Verteiler aufnehmen";
    }

if($name!="" && $email!="" && $betreff!="" && $nachricht!=""){
   @mail($emailTo, $betreff, $inhalt, $header);
   echo "gesendet";
   }
    else{
      echo "nicht gesendet";
    }
?>
<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
  <br><input type="text" ng-model="contact.kontaktName" name="name" placeholder="Name" / >*<br><br>
  <input type="email" name="email" ng-model="contact.kontaktEmail" required placeholder="Email" />*<br>
  <input type="text" name="betreff" ng-model="contact.kontaktBetreff" required placeholder="Betreff" />*<br>
  <textarea name="nachricht" placeholder="Deine Nachricht" col=20 row=4 ng-model="contact.kontaktMessage"></textarea>*<br>
  <font size=2 color="#102568">*Die Felder müssen ausgefüllt sein</font>
  <div id="kontaktMessage">
  Deine Nachricht:<br>
    <i>
      {{contact.kontaktName}}<br>
      {{contact.kontaktEmail}}<br>
      {{contact.kontaktBetreff}}<br>
      {{contact.kontaktMessage}}<br>
    </i><input type="checkbox" value="checked" ng-model="contact.checked" name="checked" />Ich möchte regelmäßig über Aktivitäten der Gruppe informiert werden<br><br>
  </div>
 </div>
 <div class="g-recaptcha col-md-6" data-sitekey="6LeAQgwUAAAAADhVZGVENNmGZMwTr4_Vn97go7L3"></div>
  <input type="submit" value="absenden" class="col-md-6">
</form>
</div>
<script src='https://www.google.com/recaptcha/api.js'></script>
