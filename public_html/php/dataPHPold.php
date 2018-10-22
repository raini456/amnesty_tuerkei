<?php
 //error_reporting(0);
 try{
    $connect = new PDO('mysql:dbname=ai_tuerkei_bln;  host=localhost', 'root', '');
    //$connect= new PDO('mysql:dbname=db129586_189; host=127.0.0.3', 'db129586_189', 'Raini456#');
    echo "Datenverbindung steht<br>";
    /* $insert=$connect->prepare("INSERT INTO tuerkeidaten(datum, verfasser, thema, nachricht, mehrInfos) VALUES(:dates, :author, :topic, :message, :moreInfos)");
    $date = "18.10.2016";
    $author = "Stefan";
    $topic = "Noch mehr Wichtiges";
    $message = "Sehr aktuelle wichtige News";
    $moreInfos = "Diese News sind wichtiger als der Rest!";
    $insert->bindParam(':dates',$date);
    $insert->bindParam(':author',$author);
    $insert->bindParam(':topic',$topic);
    $insert->bindParam(':message', $message);
    $insert->bindParam(':moreInfos',$moreInfos);
    $insert->execute(); */

    $sql="SELECT * FROM tuerkeidaten WHERE thema='Mein kleines Hobby'";
    $result=$connect->prepare($sql);
    $result->execute();
    while($row=$result->fetch(PDO::FETCH_ASSOC)){
        echo $row['id']."<br>";
        echo $row['verfasser']."<br>";
        echo $row['datum']."<br>";
        echo $row['thema']."<br>";
        echo $row['nachricht']."<br>";
        echo $row['mehrInfos']."<br>";
      }
    }
    catch(PDOException $e) {
         exit('Unable to connect Database.');
         echo "Datenverbindung ging schief";
    }
 /* $data = json_decode(file_get_contents("php://input"));
 if($data->name=="icke" && $data->pass=="1234"){
    print "success";
 }
 else{
    print "error";
 }

 echo $data."<br>";
  echo "<br>Daten:<br>";
  print_r($data);
  echo "Array:<br>";
  var_dump($data);
  $date = $data->datum;
  $author = $data->verfasser;
  $topic =  $data->thema;
  $news = $data->nachricht;
  $moreInfos = $data->mehrInfos;


   if((isset($date) && $date!="" && (!is_array($date))) && (isset($author) && $author!="" && !is_array($author)) && (isset($topic) && $topic!="" && !is_array($topic))
   && (isset($news) && $news!="" && !is_array($news)) && (isset($moreInfos) && $moreInfos!="" && !is_array($moreInfos))){
     //Mit "PDO"-Kommando
     $sql="INSERT INTO tuerkeidaten(datum, verfasser, thema, nachricht, mehrInfos) VALUES(:date, :author, :topic, :news, :moreInfos)";
     //dynamische Daten unbedingt mit prepared statments binden !!!
     $command = $connect->prepare($sql);
     $command->bindParam(':date',$date);
     $command->bindParam(':author',$author);
     $command->bindParam(':topic',$topic);
     $command->bindParam(':news',$news);
     $command->bindParam(':moreInfos',$moreInfos);
     $command->execute();
   }
   else{
     $sql="";
   }
   if(isset($sql) && $sql!=""){
   $connect->exec($sql);
   }
   else{
     echo "Daten konnten nicht gesandt werden!";
   }*/
 //$connect->query("INSERT INTO tuerkeidaten(`datum`, `verfasser`, `thema`, `nachricht`, `mehrInfos`) VALUES ('".$date."','".$author."','".$theme."','".$news."','".$moreInfo."')");

 ?>