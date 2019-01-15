// Write your Pizza Builder JavaScript in this file.

$(".btn-pepperonni").click(() => {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("aside li:nth-child(1)").toggle();
  updatePrice();
});
$(".btn-mushrooms").click(() => {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("aside li:nth-child(2)").toggle();
  updatePrice();
});
$(".btn-green-peppers").click(() => {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("aside li:nth-child(3)").toggle();
  updatePrice();
});

$(".sauce").toggleClass("sauce-white");
$(".crust").toggleClass("crust-gluten-free");
$(".btn-sauce").toggleClass("active");
$(".btn-crust").toggleClass("active");
$("aside li:nth-child(4)").toggle();
$("aside li:nth-child(5)").toggle();

$(".btn-sauce").click(() => {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("aside li:nth-child(4)").toggle();
  updatePrice();
});
$(".btn-crust").click(() => {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("aside li:nth-child(5)").toggle();
  updatePrice();
});

updatePrice()

function updatePrice() {
  var total = 10;
  if ($(".btn-pepperonni").hasClass("active")) total += 1;
  if ($(".btn-mushrooms").hasClass("active")) total += 1;
  if ($(".btn-green-peppers").hasClass("active")) total += 1;
  if ($(".btn-sauce").hasClass("active")) total += 3;
  if ($(".btn-crust").hasClass("active")) total += 5;
  $("aside strong").text("$" + total)
}
