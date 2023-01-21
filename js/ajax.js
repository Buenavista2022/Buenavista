$(document).ready(function(){
    
    $("#boton1").click(function(){
        $("#contex").load("sub/news1.html");
      
    });
    
    $("#boton2").click(function(){
        $("#contex").load("sub/news2.html");
       
    });
    
    $("#boton3").click(function(){
        $("#contex").load("sub/news3.html");
       
    });
    
    $("#boton4").click(function(){
        $("#contex").load("sub/news4.html");
       
    });
    
    
 
      $(document).ready(function(){

	window.onresize = function() {
    	$(window).scroll(function(){
    		if ($(window).width() <= 960) {
    			if ($(window).scrollTop() == 350){
					$(".container-fluids").show();
				} else  {
					$(".container-fluids").hide();
				}
    		} else {
    			$(".container-fluids").show();
    		}			
		});	
	}

});
  
    	
 
       $(".right a").click(function(){
       $("html, .main-contain").animate({scrollTop:20}, "fast");
          return false;
       });
  
     
});

