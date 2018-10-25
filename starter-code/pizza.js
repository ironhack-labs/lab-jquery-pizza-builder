// Write your Pizza Builder JavaScript in this file.

// Iteration 1
var pizzaDrawing = $("#pizza > .pep, #pizza > .mushroom, #pizza > .green-pepper");
pizzaDrawing.hide();

$(".btn-green-peppers").click(function () {
  $("#pizza > .green-pepper").toggle();
});

$(".btn-mushrooms").click(function () {
  $("#pizza > .mushroom").toggle();
});
  
$(".btn-pepperonni").click(function () {
  $("#pizza > .pep").toggle();
});

// Iteration 2
$(".btn-sauce").click(function () {
  $(".sauce").toggleClass("sauce-white");
});

$(".btn-crust").click(function () {
  $(".crust").toggleClass("crust-gluten-free");
});