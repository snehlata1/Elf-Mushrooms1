$(document).ready(function(){
	/* Slide Box */
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$(".slidebox .nav ul").tabs(".slidelist > .item", {
		// enable "cross-fading" effect
		effect: 'fade',
		fadeInSpeed: 'medium',
		fadeOutSpeed: "medium",
		// start from the beginning after the last tab
		rotate: true
	// use the slideshow plugin. It accepts its own configuration
	}).slideshow({
		interval: 7000,
		autoplay: true
	});
});