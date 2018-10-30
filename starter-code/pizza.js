// Write your Pizza Builder JavaScript in this file.
$(".btn").click(function(){
  $(this).toggleClass("active");
});   

$(".btn-pepperonni").click(function(){
  $(".pep").toggle();

  
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
});

