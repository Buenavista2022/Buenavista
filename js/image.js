
$(function() {
		
	$("#slideshows > div:gt(0)").hide();
	   setInterval(function() { 
	     $('#slideshows > div:first')
	        .fadeOut(1000)
	        .next()
		.fadeIn(1000)
	        .end()
	        .appendTo('#slideshows');
		},  3000);
			
	});