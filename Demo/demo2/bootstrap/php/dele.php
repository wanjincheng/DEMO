<?php
  header("Content-type: text/html; charset=utf-8"); 
require_once('mysql.php');
 if($sql){
 	$newsid=$_POST['newsid'];
 	$sq="DELETE FROM news WHERE news.newsid=$newsid";
 	mysqli_query($sql,$sq);
 	mysqli_close($sql);
 	echo json_encode(array('shanchu'=>'chenggong'));
 }
?>