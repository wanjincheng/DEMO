$(document).ready(function() {
	resnews('精选');
	
	$(".cl ul li a").click(function(e){
		e.preventDefault();
		var type=$(this).text();
		resnews(type);
	})
	loginHref();

})

function resnews(type) {
	
	var $lists = $(".content");
		$lists.empty();//清空当前数据
	$.ajax({
		url:'php/news.php',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data) {
			console.log(data);
			data.forEach(function(item,index,array){
			var $list = $("<li></li>").addClass("news").prependTo($lists);
			var $newImg = $("<div></div>").addClass("img").appendTo($list);
			var $img=$("<img>").attr('src',item.newsimg).appendTo($newImg);
			var $newsct = $("<div></div>").addClass("newsct").appendTo($list);
			var $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsct);
			var $p = $("<p></p>").appendTo($newsct);
			var $times = $("<span></span>").html(item.newstitle).addClass("times").appendTo($p);
			var $span = $("<span></span>").html(item.newssrc).addClass("span").appendTo($p);
			})
			
		}
	});

}
function loginHref(){
	$(".login").click(function(){
			window.location.href="login/login.html";
	})
}