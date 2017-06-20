// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

var price = 13;
$('.price strong').text("$"+price);

function updatePrice($topping, costTopping) {
  if ($topping.is(':visible') ) {
    price += costTopping;
  } else {
    price -= costTopping;
  }
  $('.price strong').text("$"+price);
}

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("aside.price li:contains('pepperonni')").toggle();
  updatePrice($(".pep"), 1);
});

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("aside.price li:contains('mushrooms')").toggle();
  updatePrice($(".mushroom"), 1);
});

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("aside.price li:contains('green')").toggle();
  updatePrice($(".green-pepper"), 1);

});

// sauce default values
$("section.sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$("aside.price li:contains('sauce')").hide();

// sauce click listener
$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("aside.price li:contains('sauce')").toggle();
  updatePrice($(".sauce-white"), 3);
});

// crust default values
$("section.crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$("aside.price li:contains('gluten')").hide();

// crust click listener
$(".btn-crust").on("click", function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("aside.price li:contains('gluten')").toggle();
  updatePrice($(".crust-gluten-free"), 5);
});


});
