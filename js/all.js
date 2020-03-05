var floatId = "#compost-box";
var menuYloc = null;
var offset = 100;

$(document).ready(function(){
	/* Floating Booking Form */
	menuYloc = 200;
	$(window).scroll(function () { 
		offset = menuYloc+$(document).scrollTop()+"px";
		$(floatId).animate({top:offset},{duration:500,queue:false});
	});
	
	$('.btn-control').hover(function(){
		$(this).animate({width: 51},{duration:100});
	}, function(){
		$(this).animate({width: 48},{duration:100});
	});
});

/* Cufon Menu */
Cufon.replace('.cufon');