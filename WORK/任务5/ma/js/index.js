function adm() 
{
	var a = ['a', 'x','m', 'b','d', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
	var s = {}; //用于存放数据结果
	var b = ""; //存放出现最多的字母
	var d = 0; //出现最多字母的次数
	var w=0;
	var e="";
	for(var i = 0; i < a.length; i++) 
	{
		var con = a[i];
		if(!s[con]) {
			s[con] = [];
		}
		s[con].push(i);
		if(s[con].length > d) 
		{
			b = a[i];
			d = s[con].length;
}alert('出现次数的最多的字母是'+b+'\n'+'出现的次数为'+d+'次'+'\n'+'出现的位置分别是'+s[b]);
}
adm();
