// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  console.log(“ready”);
  $(“.btn-pepperonni”).click(function() {
    console.log(“funciona!“);
    if ($(“.pep”).css(“display”) === “block”) {
      console.log(‘work’);
          $(“.pep”).css(“display”, “none”);
     } else {
          $(“.pep”).css(“display”, “block”);


         }

    });
    $(‘.btn-mushrooms’).click(function() {
      if ($(‘.mushroom’).css(“display”) === “none”) {
         $(‘.mushroom’).css(“display” ,“block”)
       } else {
         $(‘.mushroom’).css(“display”, “none”)
         }
        })
    
    
    $(‘.green-pepper’).click(function(){
        if($(‘.green-pepper’).css(“display”===“none”)){
        $(‘.green-pepper’).css(“display”,“block”)
    }else{
        $(‘.green-pepper’).css(“display”,“none”)
    }
    })

  
});