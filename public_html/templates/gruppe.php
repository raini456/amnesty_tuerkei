<?php
        session_start();
?>
<h3>Unsere Gruppe</h3>


<h3>Wer wir sind</h3>
<p>
  In der Türkeigruppe Berlin treffen sich einmal im Monat Freiwillige, die sich aus unterschiedlichen Gründen für die Entwicklung der Menschenrechte in der Türkei interessieren. <br>
  Die Treffen dienen dazu, sich über die aktuelle Situation in der Türkei auszutauschen und verschiedene Aktionen, Infostände und Veranstaltungen zu organisieren. Dabei geht es in erster Linie darum, andere Menschen über Missstände und Probleme aufzuklären und eine breitere Öffentlichkeit über die Situation der Menschenrechte in der Türkei zu informieren. Der Fokus liegt dabei auf Themen wie der Meinungs- und Pressefreiheit, die Situation der kurdischen Minderheit und die kriegerischen Auseinandersetzungen in den kurdischen Gebieten im Süd-Osten der Türkei. <br><br>
Wir freuen uns immer über neue Mitglieder und Interessierte. Gerne könnt ihr mit und Kontakt aufnehmen und erfahrt so, den nächsten Termin für unser Gruppentreffen.
</p>


<h4>Gruppensprecher</h4>

Stephan Cooper<br><br>
Du möchtest uns kennenlernen?<br>
Du willst etwas für die Menschenrechte tun?<br><br>

<h5>Kontaktmöglichkeit</h5>

Wir treffen uns jeden letzten Mittwoch im Monat bei einem unserer Gruppenmitglieder. Genauere Informationen unter "<a href="#/termine">Termine</a>",
eine Nachricht kannst Du uns über unser <a href="#/kontakt">Kontaktformular</a> zukommen lassen<br><br>

Oder Du besuchst uns auf unserer <a href="https://www.facebook.com/amnesty1547"" target="fenster">Facebookseite</a><br><br>


<h4>Informationen zur Barrierefreiheit</h4>
Die Treffpunkte der Berliner Amnesty-Türkei-Gruppe sind nicht immer barrierefrei. Falls Du einen barrierefreien Ort benötigst, kontaktiere uns bitte frühzeitig, damit wir einen solchen verabreden können.

<br>


<hr><br>


<div >
 Login (für Gruppenmitglieder)<br><br>

 <!--?php
         $_SESSION['groupMember']="";
         $_SESSION['password']="";
         $_SESSION['groupMember']=$_POST['groupMember'];
         $_SESSION['password']=$_POST['password'];
 ?-->
 <article class="loginForm">
  <form method="post" action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>"  enctype="multipart/form-data">
    <input type="text" ng-model="member.name" name="groupMember" placeholder="Gruppenmitglied"><br>
    <input type="password" ng-model="member.pass" name="password" placeholder="Passwort"><br>
    <input type="submit" value="absenden" ng-click="login(member)">
  </form>
 </article>
<!--?php if((isset($_SESSION['groupMember']) && isset($_SESSION['password'])) && $_SESSION['groupMember']==="Hans" && $_SESSION['password']==="Gretel"){
  echo '
 ?-->
  <article id="inputAktuelles" ng-include="'templates/formulars/mbInputFormular.html'"></article>
  <!--?php
   ';}
        else{
          echo "Keine Zugangsberechtigung";
        }
 ?-->
