<?php
header("Content-type: text/html; charset=utf-8"); 
require_once('mysql.php');

if($sql){
	foreach ($_POST as $key => $value) {
		$_POST[$key]=addslashes(htmlspecialchars($value));
	}
	$newstitle= $_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newssrc=$_POST['newssrc'];
	$newsdate=$_POST['newsdate'];
	$newscla=$_POST['newscla'];
	$newsid=$_POST['newsid'];
}

$con="UPDATE  `news` SET `newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newssrc`='{$newssrc}',`newsdate`='$newsdate',`newscla`='{$newscla}' WHERE `newsid`='{$newsid}'";
mysqli_query($sql,"SET CHARACTER SET UTF8");
$result=mysqli_query($sql,$con);
echo json_encode(array('success'=>'ok'));
//mysqli_close($sql);
?>