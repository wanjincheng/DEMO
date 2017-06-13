<?php
  header("Content-type: application/json; charset=utf-8"); 
 require_once('mysql.php');
  if($sql){
   	$newsid=$_POST['newsid'];
   	$sq="SELECT * FROM news  WHERE newsid=$newsid";
   	mysqli_query($sql,"SET NAMES utf8");
   	$result=mysqli_query($sql,$sq);
   	$senddata=array();
   
   	while ($row = mysqli_fetch_assoc($result)){
		array_push($senddata,array(
						'newsid'=>htmlspecialchars_decode($row['newsid']),
						'newsimg'=>htmlspecialchars_decode($row['newsimg']),
						'newsdate'=>htmlspecialchars_decode($row['newsdate']),
						'newstitle'=>htmlspecialchars_decode($row['newstitle']),
						'newssrc'=>htmlspecialchars_decode($row['newssrc']),
						'newscla'=>htmlspecialchars_decode($row['newscla']),
		));
	}
	}
	echo json_encode($senddata);
   	mysqli_close($sql);
   	
   	
?>