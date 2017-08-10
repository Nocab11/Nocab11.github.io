$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});
$(function(){
	$('.hide2').on('click', function (){
		$('.pamela').slideToggle();
	})
});
$(function(){
	$('.hide3').on('click', function (){
		$('.lieyn').slideToggle();
	})
});