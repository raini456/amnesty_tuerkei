<?php
   include('connection.php');

   $data=json_decode(file_get_contents("php://input"));
     json_encode($data);
     $name=$data->name;
     $pass=$data->pass;
     /*Für Input der Daten:
     $sqlInsert="INSERT INTO users(name, pass, email) VALUES(:name, :pass, :email)";
     $insert=$connect->prepare($sqlInsert);
     $insert->bindParam(':name',$name);
     $insert->bindParam(':pass',$pass);
     $insert->bindParam(':email',$email);

     $insert->execute();  */

     $sql="SELECT name FROM users WHERE pass='".$pass."'";
     $result=$connect->prepare($sql);
     $result->execute();
     while($row=$result->fetch(PDO::FETCH_ASSOC)){
             $dbName=$row['name'];
     }
     if($name==$dbName){
             echo "match";
     }
     else{
        echo "mismatch";
     }
?>