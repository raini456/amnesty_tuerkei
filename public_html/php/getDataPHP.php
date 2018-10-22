<?php   
   require_once('connection.php');
     /*Zum Auslesen der News-Daten*/
     $sql="SELECT datum, thema, nachricht, mehrInfos, bilderDaten FROM daten";
     $result=$connect->prepare($sql);
     $result->execute();
     $json=$result->fetchAll(PDO::FETCH_ASSOC);
     /*$json = array();
     $datum = array();
     $thema = array();
     $nachricht = array();
     $mehrInfos = array();
     while($row=$result->fetch(PDO::FETCH_ASSOC)){
        array_push($datum, $row['datum']);
        array_push($thema, $row['thema']);
        array_push($nachricht, $row['nachricht']);
        array_push($mehrInfos, $row['mehrInfos']);
    }    
        array_push($json, $datum, $thema, $nachricht, $mehrInfos);
     
     
     
     $json[0]=$datum;
     $json[1]=$thema;
     $json[2]=$nachricht;
     $json[3]=$mehrInfos;/**/
     $json=json_encode($json);  
     if($json!=""){
        echo nl2br($json);
    }
?>