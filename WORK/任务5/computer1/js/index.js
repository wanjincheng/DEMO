function adm(){
	var x=document.getElementById('qwr').value;
	var y=document.getElementById('qwr2').value;
	if(isNaN(x) || isNaN(y)){
		alert("请输入数字");
		return;
	}//如果输入的值不是数字 则提示
	var char=document.getElementById('qwr1').value;//取得值
	var z=0;//结果初始化
	if(!x || !y){
		alert('请输入需要计算的自然数');
			return;
	}//如果x 或者 y 没有输入正确的值  提示错误
	switch(char){
	case char="+":
	z=Number(x)+Number(y);
	break;
	case char="-":
	z=Number(x)-Number(y);
	break;
	case char="*":
	z=Number(x)*Number(y);
	break;
	case char="/":
	if(Number(y)!=0){
	z=Number(x)/Number(y);
	}//如果除数等于0  提示错误
	else{
//		document.getElementById("zz").value=NaN;
		alert("除数不能为0");
		return;
	}
	break;
	default:
	alert("请输入正确的运算符号 + - * /");//如果运算符号输入错误 提示
	break;
	}
	document.getElementById("zz").value=parseFloat(z.toFixed(8));
}

