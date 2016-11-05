
$(function(){

	var $img = $(".notiContentImg").find("img");
	// 宽度为父级元素的20%
	var $width = $(".notiContentImg").width()/5;
	$img.each(function(){
		$(this).css("height",$width);
	});
	
	$('.applyText').focus(function(){
		$('#footer').hide();
	}).blur(function(){
		$('#footer').show();
	});

	$('.leaveButton').click(function(){
		$('#toast').show();
		setTimeout(function(){
			$('#toast').hide();
			$('#leave-reason, .modal-backdrop').hide();
		},2000)
	});

	$('.notification-again').click(function(){
		$('#toast').show();
		setTimeout(function(){
			$('#toast').hide();
		},1000)
	});

	// 展开收起
	$(".notiShow").click(function(){
		if($(".notiNameHide").is(":visible")){
			$(".notiNameHide").hide();
		}
		else{
			$(".notiNameHide").show();
		}
	});

	

	
});
