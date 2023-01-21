
function resetear(){
    window.scrollTo(0,0);
}

$('document').ready(function($){
  
  var bloque = $('.elemento'),
      enlaces = $('.menu').find('a');
  
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


  $(function(){
      $("a").click(function(){
          var href =$(this).attr("href");
          $("body,html,main").animate({
              scrollTop: $(href).offset().top
          },500)
       });
   });
      


let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {
  barIconX.classList.toggle('fa-times');
   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100';

    activador = true;
   }

});

 $(document).ready(function() {
	 $(".btn-menu").click(function(){
		 $(".nav-menu").slideToggle(100, function() {
	         
    $(".lists li a").click(function(){
		
       $(".nav-menu").addClass("hide").css("display", ""); 
       $("this").toggleClass("nav-expanded").css('display', ".menu");
                
      });         
	 
     });
    });
   });
   
   
   
  
   
  