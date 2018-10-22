<?php
   session_start();
   
   include('connection.php');
   $data=json_decode(file_get_contents("php://input"));     
     $date=$data->datum;
     $username=$data->username;
     $topic=$data->thema;
     

         
     $sqlDelete="DELETE FROM daten WHERE username=:username AND datum=:date AND thema=:topic";
        
     $delete=$connect->prepare($sqlDelete);
     $delete->bindParam(':date',$date);          
     $delete->bindParam(':username', $username);
     $delete->bindParam(':topic', $topic);//     
     /*$delete->execute(); */
     if($delete->execute()){
        echo "deleted";
     }
     /*$select="SELECT FROM daten WHERE username=:username AND datum=:date AND thema=:topic" ;
     $check=$connect->prepare($select);
     $check->bindParam(':date',$date);               
     $check->bindParam(':username', $username);
     $check->execute();
     $json=$check->fetchAll(PDO::FETCH_ASSOC);     
     $json=json_encode($json);
     if($json['data']==""){
       echo "deleted";
     }
     else{
        echo "failed";
     }*/
?>