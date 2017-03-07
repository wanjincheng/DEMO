var inp = Array(document.getElementById('inp'));
var y = 0; //第二个值储存值
var z = 0; //标记符号
var w = 0; //计算值
var num = 0;
var operate = 0; //判断计算状态的标志
var quit = 0; //防止重复按键的标志
function numm(num) {
	var str = document.getElementById('inp').value;
	str = (str != '0') ? ((operate == 0) ? str : "") : "";
	//如果当前值不是0  且状态为0 则返回空值
	str = str + String(num); //给当前值追加字符
	document.getElementById('inp').value = str;
	operate = 0;
	quit = 0; //重置
}

function spot() {
	var str = document.getElementById('inp').value;
	str = (str != '0') ? ((operate == 0) ? str : "") : "0"; //如果当前值不是0 且状态为0 则返回0
	for(var i = 0; i <= str.length; i++) {
		if(str.substr(i, 1) == '.')
			return false;
	} //检查当前有没有点号  如果没有则插入  如果有则不理会
	str = str + '.';
	document.getElementById('inp').value = str;
	operate = 0;
} //点号
function back() {
	var str = document.getElementById('inp').value;
	str = (str != '0') ? str : '';
	str = str.substr(0, str.length - 1);
	str = (str != '') ? str : '0';
	document.getElementById('inp').value = str;
} //退格
function clearW() {
	var str = document.getElementById('inp').value;
	num = 0;
	w = 0;
	y = "0";
	document.getElementById('inp').value = '0';
} //清除
function numb() {
	var str = document.getElementById('inp').value;
	str = -str;
	document.getElementById('inp').value = str;
} //正负值
function operation() {
	y = Number(document.getElementById('inp').value);
	y=parseFloat(y.toFixed(8));
	if(num != 0 && quit != 1) { //判断第一个值
		switch(z) {
			case 1:
				w = num + y;
				break; //加法
			case 2:
				w = num - y;
				break; //减法
			case 3:
				w = num * y;
				break; //乘法
			case 4:
				if(y != 0) {
					w = num / y;
				} else {
					alert('除数不能为0');
				}
				break;
				break; //除法
			case 5:
				w = num % y;
				break; //求余
			case 6:
				w = Math.sin(num);
				break; //sin
			case 7:
				w = Math.cos(num);
				break; //cos
			case 8:
				y = 0;
				num = Math.pow(num, 2);
				w = num + y;
				break; //平方
			case 9:
				w = Math.pow(num, 3);
				break; //3次方
		}
		quit = 1; //避免重复按键 
	} else {
		w = y;
	}
	y = String(w);
	document.getElementById('inp').value = y;
	num = w; //储存
}

function plus() {
	operation(); //调用函数
	operate = 1; //更改为输入第二个值
	z = 1; //计算状态
} //加法
function reduce() {
	operation();
	operate = 1;
	z = 2;
} //减法
function ride() {
	operation();
	operate = 1;
	z = 3;
} //乘法
function except() {
	operation();
	operate = 1;
	z = 4;
} //除法
function more() {
	operation();
	operate = 1;
	z = 5;
} //求余
function sin() {
	operation();
	operate = 0;
	z = 6;
} //sin
function cos() {
	operation();
	operate = 0;
	z = 7;
} //cos
function twice() {
	operation();
	operate = 1;
	z = 8;
} //平方
function thrTimes() {
	operation();
	operate = 0;
	z = 9;
} //3次方
function equal() {
	operation();
	operate = 1;
	num = 0;
	w = 0;
	y = '0';
} //等于