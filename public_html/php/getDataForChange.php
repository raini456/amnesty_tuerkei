<?php   
   require_once('connection.php');
     /*Zum Auslesen der zu verändernden News-Daten*/
     $data=json_decode(file_get_contents("php://input")); 
     //alert($data);
     $date=$data->inputDate;
     //$date="23.10.2016";
     $sql="SELECT datum, username, verfasser, thema, nachricht, mehrInfos FROM daten WHERE datum =:date";
     $result=$connect->prepare($sql);
     $result->bindParam(':date', $date);
     $result->execute();
     $json=$result->fetchAll(PDO::FETCH_ASSOC);     
     $json=json_encode($json);  
     if($json!=""){        
        echo nl2br($json);
    }
    else{
        echo "keine Daten erhalten";
    }
?>