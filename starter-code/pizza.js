// Write your Pizza Builder JavaScript in this file.

$(".li-gluten-free-crust").hide();
$(".li-white-sauce").hide();



$(".btn").click(function(){
  $(this).toggleClass("active");
});   

$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".li-pepperonni").toggle();
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".li-mushrooms").toggle();
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".li-green-peppers").toggle();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".li-white-sauce").toggle();
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".li-gluten-free-crust").toggle();
});


