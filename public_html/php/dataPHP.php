<?php
   session_start();
   
   include('connection.php');
   $data=json_decode(file_get_contents("php://input"));     
     $user=$data->user;
     $pass=$data->pass;
     $date=$data->inputDate;
     $lgUser=$data->lgUser;
     $author=$data->inputAuthor;
     $topic=$data->inputTopic;
     $news=$data->inputNews;
     $moreInfo=$data->inputMoreInfo;     
     $bildDaten=$data->bildDaten;
     $dbUser="";
     //$user="";
     //$pass="";
     

     /*Für Input der Daten:*/
     $sqlInsert="INSERT INTO daten (datum, verfasser, username, thema, nachricht, mehrInfos) VALUES(:datum, :author, :lgUser, :topic, :news, :moreInfo)"; 
        
     $insert=$connect->prepare($sqlInsert);
     $insert->bindParam(':datum',$date);     
     $insert->bindParam(':author',$author);
     $insert->bindParam(':topic',$topic);
     $insert->bindParam(':news',$news);
     $insert->bindParam(':moreInfo',$moreInfo);      
     $insert->bindParam(':lgUser',$lgUser);     
     $insert->execute(); 
     

     /*Zum Auslesen der Login-Daten*/
     $sql="SELECT username, vorname, section FROM login WHERE password='".$pass."  ' AND username='".$user."'";
     $result=$connect->prepare($sql);
     $result->execute();
     /*$dbData=$result->fetchAll(PDO::FETCH_ASSOC);
     $json = json_encode($dbData);
     echo $json;
     */
     while($row=$result->fetch(PDO::FETCH_ASSOC)){
             $dbUser=$row['username'];  
             $dbSection=$row['section'];
             $dbFirstName=$row['vorname'];                                    
     }
     //echo $dbUser.",".$dbSection.",".$dbPass."<br>";
     if($user==$dbUser && $dbSection=="noEdit"){
             //echo "match";
             echo $dbUser.",".$dbFirstName;

     }
      else if($user==$dbUser && $dbSection=="edit"){
             echo $dbUser."E,".$dbFirstName;
      }
      else{
         echo "mismatch";
      }    
?>