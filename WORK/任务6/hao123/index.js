var colors=['#d8dc26','#2d58d8','#d43a3a','#1ea29d'];//创建一个颜色选择
var serial=0;
function bg(rep){
	var color=rep || colors[serial++];
	document.getElementById('nav').style.borderBottomColor = color;
	document.getElementById('nav').style.borderTopColor=color;
	document.getElementById('sy').style.background=color;
	document.getElementById('qw').style.color=color;
	document.getElementById('like').style.backgroundColor=color;
	document.getElementById('sw').style.borderColor=color;
	document.getElementById('right-1').style.borderColor=color;
	//以上为边框颜色
	var s=document.getElementsByClassName('size');
	for (var i=0;i<s.length;i++) {
		var w=s[i];
	w.style.color=color;
	}//class循环绑定
	if(serial==colors.length){
		serial=0;
	}//如果循环到最后一个颜色 则从头开始
	document.cookie='col='+color;

	localStorage.co=color;

}
if(localStorage.co){
	bg(localStorage.co);
}
//var username=document.cookie.split("=")[1];
