
$(document).ready(function(){
    $("#flip").click(function(){
        
        $("#panel").slideToggle("fast");
        $("#panel").click(function(){
         $("#panel").addClass("hide").css("display", ""); 
      });
     });

   });


