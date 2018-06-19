// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $(".green-pepper").css("display", "none");
  $(".mushroom").css("display", "none");
  $(".pep").css("display", "none");
  $(".price li").css("display", "none");
  $("b").css("display", "none");
  $("strong").css("display", "none");
 // $("section").removeClass("crust-gluten-free");
 // $("section").removeClass("sauce-white");
 $(".btn-pepperonni").click(function(e){
   if ($(".pep").css("display") == "none"){
    $(".pep").css("display", "");
   }  else {
   $(".pep").css("display", "none");
  }
 })
 $(".btn-mushrooms").click(function(e){
  $(".mushroom").css("display", "");
})
$(".btn-green-peppers").click(function(e){
  $(".green-pepper").css("display", "");
})




})
