// Write your Pizza Builder JavaScript in this file.

/* PRICE */

var num = parseInt($("strong"));

/* Activate the button toggle to display or remove ingredients */

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $("aside ul li:nth-child(1)").toggle();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $("aside ul li:nth-child(2)").toggle();
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $("aside ul li:nth-child(3)").toggle();
});

/* Make normal crust and tomatoe sauce by default (cause it's the best :) )*/

$(".sauce-white").removeClass("sauce-white");
$(".crust-gluten-free").removeClass("crust-gluten-free");

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $("aside ul li:nth-child(4)").toggle();
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $("aside ul li:nth-child(5)").toggle();
});

/* Active or desactive button */

$(".panel.controls .btn").click(function() {
  $(this).toggleClass("active");
});

/* Ingredients and price */

$(".panel.price li:gt(2)").hide();

// => I add a new line at each toggle, to add a new on Click action

/* Updating price */
