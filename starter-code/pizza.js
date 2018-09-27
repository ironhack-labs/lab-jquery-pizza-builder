// Write your Pizza Builder JavaScript in this file.

// pepperonni
$( ".btn-pepperonni" ).click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price ul li:contains(pepperonni)").toggle();
});

// mushrooms
$( ".btn-mushrooms" ).click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price ul li:contains(mushrooms)").toggle();
});

// green-peppers
$( ".btn-green-peppers" ).click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price ul li:contains(green)").toggle();
});

// crust
$( ".crust" ).removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".panel ul li:contains(gluten-free)").toggle();
$( ".btn-crust" ).click(function(){
$(".crust").toggleClass("crust-gluten-free");
$(".btn-crust").toggleClass("active");
$(".price ul li:contains(crust)").toggle();
});

// white sauce
$( ".sauce" ).removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".panel ul li:contains(white)").toggle();
$( ".btn-sauce" ).click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price ul li:contains(white)").toggle();
});


