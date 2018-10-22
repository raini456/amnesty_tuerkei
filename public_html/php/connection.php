<?php
 error_reporting(0);
 try{
    //$connect = new PDO('mysql:dbname=test;  host=localhost', 'root', '');
    $connect= new PDO('mysql:dbname=db129586_189; host=127.0.0.3', 'db129586_189', 'Raini456#', array(PDO::ATTR_PERSISTENT => true));
    //echo "Datenverbindung steht\n";
 }
 catch(PDOException $e) {
         exit('Unable to connect Database.');
         echo "Datenverbindung ging schief";
    }
 ?>