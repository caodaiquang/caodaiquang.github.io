$(function(){

	$(".kn, .sp").click(function(){
		$('body, html').animate({scrollTop:$('#edu').offset().top}, 600);
		return false;
	})


	$(".phanhoi").click(function(){
		$('body, html').animate({scrollTop:$('#phanhoii').offset().top}, 600);
		return false;
	})

})