//打开后台页面的时候  发送请求 刷新新闻列表
$(document).ready(function(){
	refresNews();
	// getToken();
});
var token="";
function getToken(){
$.ajax({
		type:"get",
		url:"../php/token.php",
		datatype:'json',
		success:function(data){
			console.log(data);
		}
	})
}


var $newstable=$('#res');
function refresNews(){
	//清空所有的新闻
	$newstable.empty();
	$.ajax({
		type:"get",
		url:"../php/res.php",
		datatype:'json',
		success:function(data){
			data.forEach(function(item,index,array){
				var $tdid=$('<td>').html(item.newsid);
				var $tdcla=$('<td>').html(item.newscla);
				var $tdimg=$('<td>').html(item.newsimg);
				var $tdsrc=$('<td>').html(item.newssrc);
				var $tdtitle=$("<td>").html(item.newstitle);
				var $tddate=$("<td>").html(item.newsdate);
				var $tdbotton=$("<td>");
				var $bottntg=$("<botton>").addClass('btn btn-primary dropdown-toggle').html('修改');
				var $bottmcla=$('<botton>').addClass("btn btn-danger dropdown-toggle").html('删除');
				$tdbotton.append($bottntg,$bottmcla);
				var $tdtr=$('<tr>');
				$tdtr.append($tdid,$tdtitle,$tdimg,$tddate,$tdcla,$tdsrc,$tdbotton);
				$newstable.append($tdtr);
			})
			
		}
	
	});
}	