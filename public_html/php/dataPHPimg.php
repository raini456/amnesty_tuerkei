<?php
 //error_reporting(0);
    $connect = mysql_connect('localhost', 'root', '') or die(mysql_error());
    mysql_select_db('ai_tuerkei_bln') or die(mysql_error());
    //$connect= new PDO('mysql:dbname=db129586_189; host=127.0.0.3', 'db129586_189', 'Raini456#');
    echo "Datenverbindung steht<br>";
    // Formular abgeschickt
  if(isset($_FILES['image'])) {

    // Datei hochgeladen
    if(is_uploaded_file($_FILES['image']['tmp_name'])) {

      // Verweis auf Bild
      $image = $_FILES['image']['tmp_name'];

      // Vorbereiten für den Upload in DB
      $data = addslashes(file_get_contents($image));

      // Metadaten auslesen
      $meta = getimagesize($image);
      $mime = $meta['mime'];

      // Bild in DB speichern
      mysql_query("INSERT INTO images VALUES('', '$data', '$mime')");
    }
  }
  // Bild ausgeben
  /*$id = addslashes($_GET['id']);
  $result = mysql_query("SELECT image, mimetype FROM images WHERE id='$id'");
  $row = mysql_fetch_object($result);
  header("Content-type: $row->mimetype");
  echo $row->image;*/
 ?>