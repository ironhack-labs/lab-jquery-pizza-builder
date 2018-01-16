// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  $(".price li").hide();

  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");  $(".price li:first-child").toggle();
    $(".pep").toggle();
  })
  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    $(".mushroom").toggle();
  })
  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:nth-child(3)").toggle();
  })
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price li:nth-child(4)").toggle();
  })
  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:last-child").toggle();
  })
  

})