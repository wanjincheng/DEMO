<?php
header("Content-type:application/json;charset=utf-8");
require_once('mysql.php');
if($sql){
	//执行成功的过程
	$sl='SELECT * FROM news';
	mysqli_query($sql,"SET NAMES utf8");
	$result=mysqli_query($sql,$sl);
	$senddata=array();
	while($row=mysqli_fetch_assoc($result)){
		array_push($senddata,array(
						'newsid'=>$row['newsid'],
						'newsimg'=>$row['newsimg'],
						'newsdate'=>$row['newsdate'],
						'newstitle'=>$row['newstitle'],
						'newssrc'=>$row['newssrc'],
						'newscla'=>$row['newscla'],
		));
	}
	echo json_encode($senddata);
}

else{
	echo json_encode(array('success'=>'none'));
}
mysqli_close($sql);
?>