// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").removeClass("active");
$(".btn-mushrooms").removeClass("active");
$(".btn-green-peppers").removeClass("active");
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".price li:nth-child(4)").hide();
$(".price li:nth-child(5)").hide();


$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price li:nth-child(1)").toggle();
  calculatePrice(".btn-pepperonni", pepCost);
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price li:nth-child(2)").toggle();
  calculatePrice(".btn-mushrooms", mushCost);
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:nth-child(3)").toggle();
  calculatePrice(".btn-green-peppers", grnCost);
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").toggle();
  calculatePrice(".btn-sauce", sauceCost);
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".price li:nth-child(5)").toggle();
  calculatePrice(".btn-crust", crustCost);
});

var pepCost = 1;
var mushCost = 1;
var grnCost = 1;
var sauceCost = 3;
var crustCost = 5;
var total = $(".price strong").text();
total = parseInt(total.slice(1));
total = total - sauceCost - crustCost
$(".price strong").text('$'+total)

function calculatePrice(x, y) {
  if ($(x).hasClass("active")) {
    total -= y;
  } else {
    total += y;
  }
  $(".price strong").text('$'+total)
}

