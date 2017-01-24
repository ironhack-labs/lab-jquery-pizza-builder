// Write your Pizza Builder JavaScript in this file.

//ITERATION 1
$(document).ready(function(){
$(".btn-pepperonni").on("click",function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
});

$(".btn-mushrooms").on("click",function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
});
$(".btn-green-peppers").on("click",function(){
  $(".btn-green-peppers").toggleClass("active");
});

$(".btn-sauce").on("click",function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
});

$(".btn-crust").on("click",function(){
  $(".crust").toggleClass( "crust-gluten-free" );
  $(".btn-crust").toggleClass("active");

});


//ITERATION2
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");

});
