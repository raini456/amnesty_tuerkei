<?php
   session_start();
   
   include('connection.php');
   // Formular abgeschickt
    if(isset($_FILES['img'])) {

        // Datei hochgeladen
        if(is_uploaded_file($_FILES['img']['tmp_name'])) {

            // Verweis auf Bild
            $image = $_FILES['img']['tmp_name'];

            // Vorbereiten für den Upload in DB
            $data = addslashes(file_get_contents($image));

            // Metadaten auslesen
            $meta = getimagesize($image);
            $mime = $meta['mime'];

            // Bild in DB speichern
            $ins="INSERT INTO daten(bilder) VALUES(:image)";
            $insert=$connect->prepare($ins);
            $insert->bindParam(':image', $image);
            $insert->execute;
        }
    }

   $data=json_decode(file_get_contents("php://input"));     
     $file=$data->fd;
     

     /*Für Input der Daten:*/
     $sqlInsert="INSERT INTO daten (bilder) VALUES(:bild)";     
     $insert=$connect->prepare($sqlInsert);
     $insert->bindParam(':bild', $bild);
     $insert->execute(); 

     /*Zum Auslesen der Bild-Daten
     $sql="SELECT bilder FROM daten";
     $result=$connect->prepare($sql);
     $result->execute();
     $dbBilder=$result->fetchAll(PDO::FETCH_ASSOC);
     $json = json_encode($dbBilder);
     echo $json;
     */
     
?>