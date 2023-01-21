
$('document').ready(function($){
  
  var bloque = $('.elemento'),
      enlaces = $('.grt-menu').find('a');
  
  enlaces.click(function(e){
    
    e.preventDefault();
    
    var hash = $(this).attr('href');
    
    bloque
      .filter(hash)
      .addClass('visible')
      .siblings()
      .removeClass('visible');
    
    enlaces
      .removeClass('activo');
    
    $(this)
      .addClass('activo');
    
  });
  
});


// Create a function for mobile version
(function( $ ){
	$.fn.grtmobile = function () {
		$('.grt-mobile-button').on('click', function(){
			$(this).toggleClass("grt-mobile-button-open");
			$("ul.grt-menu").toggleClass("open-grt-menu ");
			
		});
		
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();


// Add fixed class on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category item

$(document).ready(function(e) {
$('li.grt-dropdown a').on('click', function(){
	 }); 

	 $(".grt-menu-row").click(function(){
		 $(".open-grt-menu").slideToggle(function() {
		 $(".grt-menu ul li a").click(function(){
		  $("this").toggleClass("nav-expanded").css('display', "");  
        
      });
     });
    });
   });
    
