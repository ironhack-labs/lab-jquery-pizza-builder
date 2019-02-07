$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$(".price li:nth-child(4)").toggle();
$(".price li:nth-child(5)").toggle();

let totalValue = 13;

const pepperonniPrice = 1;
const greenPeppersPrice = 1;
const mushroomsPrice = 1;
const whiteSaucePrice = 3;
const glutenFreeCrustPrice = 5;

$("strong").html("$" + totalValue);


function startingPrice() {
  if ($(".btn-pepperonni").hasClass("active")) {realValue += 1} else {realValue}
  if ($(".btn-green-peppers").hasClass("active")) {realValue += 1} else {realValue}
  if ($(".btn-mushrooms").hasClass("active")) {realValue += 1} else {realValue}
  if ($(".btn-sauce").hasClass("active")) {realValue += 3} else {realValue}
  if ($(".btn-crust").hasClass("active")) {realValue += 5} else {realValue}
}


$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price li:first-child").toggle();
  if ($(".btn-pepperonni").hasClass("active")) {totalValue += pepperonniPrice} else {totalValue -= pepperonniPrice};
  $("strong").html("$" + totalValue)
})

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price li:nth-child(2)").toggle();
  if ($(".btn-mushrooms").hasClass("active")) {totalValue += mushroomsPrice} else {totalValue -= mushroomsPrice};
  $("strong").html("$" + totalValue)
})

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:nth-child(3)").toggle();
  if ($(".btn-green-peppers").hasClass("active")) {totalValue += greenPeppersPrice} else {totalValue -= greenPeppersPrice};
  $("strong").html("$" + totalValue)
})

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").toggle();
  if ($(".btn-sauce").hasClass("active")) {totalValue += whiteSaucePrice} else {totalValue -= whiteSaucePrice};
  $("strong").html("$" + totalValue)
})

$(".btn-crust").on("click", function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".price li:nth-child(5)").toggle();
  if ($(".btn-crust").hasClass("active")) {totalValue += glutenFreeCrustPrice} else {totalValue -= glutenFreeCrustPrice};
  $("strong").html("$" + totalValue)
})