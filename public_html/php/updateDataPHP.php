<?php
   session_start();
   
   include('connection.php');
   $data=json_decode(file_get_contents("php://input"));     
     $date=$data->datum;
     $username=$data->username;
     $author=$data->verfasser;
     $topic=$data->thema;
     $news=$data->nachricht;
     $moreInfo=$data->mehrInfos; 
     

         
     /*$date="26.10.2016";
     $author="nächster Autor";
     $topic="LATEST NEWS";
     $news="Hier kommt die latest News";
     $moreInfo="und weiter ...";*/
     

     /*Für Update der Daten:*/     
     $sqlUpdate="UPDATE daten SET verfasser=:author, username=:username, thema=:topic, nachricht=:news, mehrInfos=:moreInfo WHERE datum=:date AND username=:username";
        
     $update=$connect->prepare($sqlUpdate);
     $update->bindParam(':date',$date);     
     $update->bindParam(':author',$author);
     $update->bindParam(':username', $username);
     $update->bindParam(':topic',$topic);
     $update->bindParam(':news',$news);
     $update->bindParam(':moreInfo',$moreInfo); 
       
     if($update->execute()){   
       echo "match";
     }
?>