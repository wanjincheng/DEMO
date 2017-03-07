var grade; //传入的分数
function query(grade) 
	{
		grade=document.getElementById('group').value;
		if(!grade){
			alert('请输入0-100之间的正确分数');
			return;
	}//	如果没有输入值 则提示
		switch(true) {
			case grade <= 100 && grade >= 90:
				alert("1等生");
				break;
			case grade < 90 && grade >= 80:
				alert("2等生");
				break;
			case grade < 80 && grade >= 70:
				alert('3等生');
				break;
			case grade < 70 && grade >= 60:
				alert('4等生');
				break;
			case grade < 60 && grade >= 50:
				alert('5等生');
				break;
			case grade < 50 && grade >= 40:
				alert('6等生');
				break;
			case grade < 40 && grade >= 30:
				alert('7等生');
				break;
			case grade < 30 && grade >= 20:
				alert('8等生');
				break;
			case grade < 20 && grade >= 10:
				alert('9等生');
				break;
			case grade < 10 && grade >= 0:
				alert('10等生');
				break;
			default:
				alert('请输入0-100之间的正确分数');
		}//查询信息
	}
