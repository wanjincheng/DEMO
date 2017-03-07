$(document).ready(function(){
  if(localStorage.bd){
	var cc=localStorage.bd;
	$('body').css("background-image","url("+cc+")");
	$("#none").show();
			$("header a").css("color","#ffffff");
			$(".logo>img").attr("src","img/logo_white.png");
			$(".hd_se>ul>li>a").css("color","#666666");
			$(".hd_more1>a").css("color","#666666");
}else{
	false;
}//如果之前保存了背景 则优先使用 如果没有 则返回false
});
$(".weater>img:nth-child(1)").click(
		function() {
			var none = $(".hd_left img:nth-child(2)").css("display");
			if(none == "block") {
				$(".hd_left img:nth-child(2)").css("display", "none");
			}
			else if(none=="none"){
				$(".hd_left img:nth-child(2)").css("display", "block");
			}
		}
)
	// 天气栏
$(".hd_se").last().mouseenter(function() {
	$(".hd_se>ul").last().css("display", "block");
})
$(".hd_se").first().mouseenter(function() {
	$(".hd_se>ul").first().css("display", "block");
})
$(".hd_se").last().mouseleave(function() {
	$(".hd_se>ul").last().css("display", "none");
})
$(".hd_se").first().mouseleave(function() {
		$(".hd_se>ul").first().css("display", "none");
	})
	//左侧的两个hover效果
$(".hd_more").mouseenter(function() {
		$(".hd_more>span").css({
			"background": "#f9f9f9",
			"color": "#000000"
		});
		$(".hd_more1").css("display", "block");
	})
	//导航栏更多产品鼠标移动到上面事件
$(".hd_more").mouseleave(function() {
		$(".hd_more>span").css({
			"background": "#3388ff",
			"color": "#ffffff"
		});
		$(".hd_more1").css("display", "none");
	})
	//导航栏更多产品鼠标离开事件
$(".bd_sel_hd li").each(
	function(index){
		if (index==0) {
			$(this).click(function(){
				$(".bd_img_re").show();
				$(".bd_img_fen,.bd_img_gm,.bd_img_jyue,.bd_img_nv,.bd_img_con").hide();
			})
		}
		else if(index==1){
			$(this).click(function(){
				$(".bd_img_gm").show();
				$(".bd_img_fen,.bd_img_re,.bd_img_jyue,.bd_img_nv,.bd_img_con").hide();
			})
		}
		else if(index==2){
			$(this).click(function(){
				$(".bd_img_con").show();
				$(".bd_img_fen,.bd_img_re,.bd_img_jyue,.bd_img_nv,.bd_img_gm").hide();
			})
		}
		else if(index==3){
			$(this).click(function(){
				$(".bd_img_nv").show();
				$(".bd_img_fen,.bd_img_re,.bd_img_jyue,.bd_img_gm,.bd_img_con").hide();
			})
		}
		else if(index==4){
			$(this).click(function(){
				$(".bd_img_fen").show();
				$(".bd_img_gm,.bd_img_re,.bd_img_jyue,.bd_img_nv,.bd_img_con").hide();
			})
		}
		else{
			$(this).click(function(){
				$(".bd_img_jyue").show();
				$(".bd_img_fen,.bd_img_re,.bd_img_gm,.bd_img_nv,.bd_img_con").hide();
			})
		}
	}
);

//导航栏背景图片风格切换
$(".bd_img_re li>img,.bd_img_fen li>img,.bd_img_jyue li>img,.bd_img_gm li>img,.bd_img_con li>img,.bd_img_nv li>img").each(
	function(index){
		var bdmou;
		$(this).mouseenter(function(){
			bdmou=$(this).attr("src");
			$("#bd_bd").css({"background-position":"0px 0px","top":"8px"});
			$("#bd_sh").css("background-image",("url("+bdmou+")"));
		})
		$(this).mouseleave(function(){
			$("#bd_sh").css("background","none");
			$("#bd_bd").css({"background-position":"-275px 0px","top":"8px"});
		})
		$(this).click(function(){
			bdmou=$(this).attr("src");
			$("body").css({"background-image":("url("+bdmou+")"),"background-repeat":"repeat","backgroung":"100% 100%"});
			$("#none").show();
			$("header a").css("color","#ffffff");
			$(".logo>img").attr("src","img/logo_white.png");
			$(".hd_se>ul>li>a").css("color","#666666");
			$(".hd_more1>a").css("color","#666666");
			f=$('body').css("background");
			localStorage.bd=bdmou;
			})
		}
)//背景图片更换和点击效果
$("#stop").click(function(){
	$(".bd_sel").slideUp(500);
})//点击收起换肤事件
$("#bd").click(function(){
	$(".bd_sel").slideDown(500);
	$(".logo>img").attr("src","img/bd_logo1_31bdc765.png");
})//点击出现换肤事件
$("#none").click(function(){
	$("body").css("background-image","url()");
	$("header a").css("color","#666666")
	$("#none").hide();
})//点击取消使用皮肤事件 并且 隐藏按钮
$(".c_head_font").each(
	function(index){
		if(index==0){
			$(this).click(
				function(){
					$(".follow").show();
					$(".groom,.vd,.nav,.shop").hide();
					$(".c_head_font").css({"background":"#FFFFFF","color":"#666666"});
					$(this).css({"background":"#808d9e","color":"#ffffff"});
				}
			)
		}
		else if(index==1){
			$(this).click(
				function(){
					$(".groom").show();
					$(".follow,.vd,.nav,.shop").hide();
					$(".c_head_font").css({"background":"#FFFFFF","color":"#666666"});
					$(this).css({"background":"#808d9e","color":"#ffffff"});
				}
			)
		}
		else if(index==4){
			$(this).click(
				function(){
					$(".shop").show();
					$(".follow,.vd,.nav,.groom").hide();
					$(".c_head_font").css({"background":"#FFFFFF","color":"#666666"});
					$(this).css({"background":"#808d9e","color":"#ffffff"});
				}
			)
		}
		else if(index==2){
			$(this).click(
				function(){
					$(".nav").show();
					$(".follow,.vd,.groom,.shop").hide();
					$(".c_head_font").css({"background":"#FFFFFF","color":"#666666"});
					$(this).css({"background":"#808d9e","color":"#ffffff"});
				}
			)
		}
		else if(index==3){
			$(this).click(
				function(){
					$(".vd").show();
					$(".follow,.groom,.nav,.shop").hide();
					$(".c_head_font").css({"background":"#FFFFFF","color":"#666666"});
					$(this).css({"background":"#808d9e","color":"#ffffff"});
				}
			)
		}
	}
)
//内容切换

$(".body").mousewheel(
	function(event,delta){
	var d=$(".case").height();
	if(delta<0){
		d=d+100;
		$("#mo").hide();
		$(".case").height(d);
	}
	else if(delta>0){
		d=d;
	}
	}
)//当页面每滚动一次则加100px的内容	
$(window).scroll( function() {
	 var be=$(document).scrollTop(); 
	 if(be>200){
	 	$(".logo1").show();
	 	$(".logo").hide();
	 	$("#top").show();
	 }
	 else{
	 	$(".logo1").hide();
	 	$(".logo").show();
	 	$("#top").hide();
	 }
} )
//百度logo的隐藏和悬浮效果


