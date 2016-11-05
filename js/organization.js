$(document).ready(function(){

	// 点击标题滑下社团列表
	$(".orgaName").click(function(){
		if($(".orgaSwitch").css("display") == "none"){
			$(".midHr").show();
			$(".orgaNameMask").show();
			$(".orgaSwitch").show();
		}
		else{
			$(".midHr").hide();
			$(".orgaNameMask").hide();
			$(".orgaSwitch").hide();
		}
	});

	
	// swiper bug
	// 防止小屏幕错位
	$(".swiper-slide").css("minHeight","200px");
	// 根据浏览器当前窗口可视区域高度计算滑动区域高度
	var $height = $(window).height() - 260 - 50; 
	$(".swiper-slide").css("height",$height/2);
	$(".swiper-no-swiping").css("height","auto");

	// swiper插件调用
	var mySwiper1 = new Swiper('.orgaTopPic', {
		//可选选项，自动滑动
		autoplay: 2000,
		// 淡入淡出效果
		effect : 'fade',
		// 无限循环
		loop:true,
	});
	var mySwiper2 = new Swiper('.orgaMain', {
		// 垂直方向滑动
		direction : 'vertical',
		// 上一页
		prevButton:'.orgaPrev',
		// 下一页
		nextButton:'.orgaNext',
        // mousewheelControl: true,
        // freeMode: true,
	});
})