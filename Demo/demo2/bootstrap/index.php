<?php
header("Content-type: text/html; charset=utf-8"); 
$sql=mysqli_connect('localhost','root','','baidunews',3306);
if($sql){
	$newstitle= $_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newssrc=$_POST['newssrc'];
	$newsdate=$_POST['newsdate'];
	$newscla=$_POST['newscla'];
}
$con="INSERT INTO news (newstitle,newsimg,newssrc,newsdate,newscla) VALUES ('{$newstitle}','{$newsimg}','{$newssrc}','{$newsdate}','{$newscla}')";
mysqli_query($sql,"SET CHARACTER SET UTF8");
$result=mysqli_query($sql,$con);
echo json_encode(array('success'=>'ok'));
//mysqli_close($sql);
?>