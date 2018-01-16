// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
  })
  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
  })
  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
  })

  

})