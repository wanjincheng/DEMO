$(document).ready(function() {
	click();
	mouse();
	$("#a11").fadeOut(0);
	//当页面加载完成时 隐藏跳转到顶部的图标
	$(window).scroll(function() {
		var top = $(this).scrollTop();
		if(top > 50) {
			$("#a11").fadeIn(300);
		} //当页面滚动时   出现跳转到顶部的图标
		else {
			$("#a11").fadeOut(300);
		} //当页面到顶部时   隐藏跳转到顶部的图标
	})
})

function click() {
	$(".h_r1").click(function() {
		$(".inp").animate({
			width: "850px",
			padding: "5px"
		}, 800);
	});
	//点击展开搜索框
	$(".err").click(function() {
		$(".inp").animate({
			width: "0px",
			padding: "0"
		}, 800);
	});
	//点击收起搜索框
	$(".inlin").click(function() {
		$(".inline").show();
		$(".content").hide();
	});
	// 切换内容为横着排列
	$(".block").click(function() {
		$(".inline").hide();
		$(".content").show();
	});
	//切换内容为每行3个
}
//点击事件
function mouse() {
	$(".header_left>ul>li:nth-child(2)").mouseenter(function() {
		$(".header_left>ul>li:nth-child(2)>.school").fadeIn("1500", 'linear');
	});
	//顶部导航栏 职业学院 淡入效果
	$(".header_left>ul>li:nth-child(2)").mouseleave(function() {
		$(".header_left>ul>li:nth-child(2)>.school").fadeOut("1500", 'linear');
	});
	//顶部导航栏 职业学院 淡出效果
	$(".header_left>ul>li:nth-child(3)").mouseenter(function() {
		$(".header_left>ul>li:nth-child(3)>.school").fadeIn("1500", 'linear');
	});
	//顶部导航栏  会员课程 淡入效果
	$(".header_left>ul>li:nth-child(3)").mouseleave(function() {
		$(".header_left>ul>li:nth-child(3)>.school").fadeOut("1500", 'linear');
	});
	//顶部导航栏 会员课程 淡出效果
	$(".header_left>ul>li:nth-child(4)").mouseenter(function() {
		$(".header_left>ul>li:nth-child(4)>.school").fadeIn("1500", 'linear');
	});
	//顶部导航栏 极客社区 淡入效果
	$(".header_left>ul>li:nth-child(4)").mouseleave(function() {
		$(".header_left>ul>li:nth-child(4)>.school").fadeOut("1500", 'linear');
	});
	//顶部导航栏 极客社区 淡出效果
	$(".content li").each(function(index, value) {
		$(this).mouseenter(function() {
			$(this).children(".sp:eq(0)").stop().slideDown(600);
			$(this).children(".nonev:eq(0)").stop().animate({
				opacity: "1"
			}, 600);

		}); //鼠标移动到触发事件  课程视频
		$(this).mouseleave(function() {
			$(this).children(".sp:eq(0)").stop().slideUp(600);
			$(this).children(".nonev:eq(0)").stop().animate({
				opacity: "0"
			},600);
		}); //鼠标离开触发事件  课程视频
	});
	//-------------替换的文本样式
	$(".inline li").each(function(index, value) {
		$(this).mouseenter(function() {
			$(this).children(".no:eq(0)").stop().animate({
				opacity: "1"
			}, 0);

		}); //鼠标移动到触发事件  课程视频
		$(this).mouseleave(function() {
			$(this).children(".no:eq(0)").stop().animate({
				opacity: "0"
			}, 500);
		}); //鼠标离开触发事件  课程视频
	});
	//-------------替换的文本样式
}
//鼠标移动事件