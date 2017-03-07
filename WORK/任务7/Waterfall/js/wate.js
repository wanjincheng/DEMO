$(document).ready(function(){
	imgIn();
	$(window).resize(function(){
		imgIn();
	});
	
	var datai={"data":[{"src":"1.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"},{"src":"5.jpg"}]}
	//模拟加载数据
	 window.onscroll=function(){
		if(scr()){
			$.each(datai.data, function(index,value) {
				var box=$("<div>").addClass("box").appendTo("#body");
//				创建box
				var content=$("<div>").addClass("content").appendTo(box);
//				创建content
				$("<img>").attr("src","./image/"+$(value).attr("src")).appendTo(content);
				});
//				加载图片
				imgIn();
		}
}})
function scr(){
	var box=$(".box");
	var lastHight=box.last().get(0).offsetTop+Math.floor(box.last().height());
	//得到最上面距离最下面一张图片的高度
	var bodyheight=$(document).width();
	//获取容器的高度
	var scro=$(window).scrollTop();
	//鼠标滚动的距离
	return (lastHight<bodyheight+scro)?true:false;
   }
	function imgIn(){
	var box=$(".box");
	var bodyWidth=$(window).width();//取得窗口的宽度
	var num=Math.floor(bodyWidth/box.eq(0).width());//取得窗口显示的数目
	var imgArr=[];
	box.each(function(index,value){
		var imgHe=box.eq(index).height();//取得图片的高度
		if(index<num){
			imgArr[index]=imgHe;//储存数据
			$(value).css({
				"position":"relative",
				"float":"left",
				'top':'0',
			})//重置第一行图片的css
		}
		else{
			var imgMinHe=Math.min.apply(null,imgArr);//取得最小的高度
			var minHeIn=$.inArray(imgMinHe,imgArr);//取得最小高度的位置
			$(value).css({
				"position":"absolute",
				"top":imgMinHe,
				"left":box.eq(minHeIn).position().left
			});//改变位置
			imgArr[minHeIn]+=box.eq(index).height();//重新储存值
		}
	})
}
