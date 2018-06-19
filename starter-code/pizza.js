// Write your Pizza Builder JavaScript in this file.
$(function(){
  $("#pizza > section:not(.crust), .sauce-white").css({"display" : "none"});
  $("#pizza section:last-child").removeClass("crust-gluten-free");
  
  $("button").removeClass("active");
  
  $("button").click(function(){
    $(this).toggleClass("active");
  });

  $(".btn-pepperonni").click(function(){
   $(".pep").css({"display" : ""});
  });
$(".btn-mushrooms").click(function(){
  $(".mushroom").css({"display" : ""});
});
 



});