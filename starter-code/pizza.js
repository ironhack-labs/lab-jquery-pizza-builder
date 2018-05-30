// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

$(".btn-pepperonni").removeClass("active");
$(".btn-green-peppers").removeClass("active");
$(".btn-mushrooms").removeClass("active");

//remove toppings when clicked on buttons

$(".btn-pepperonni").on("click", function() {
  $(this).toggleClass("active");
  $(".pep").toggle();
  $(".price li:contains(pepperonni)").toggle()
  });

$(".btn-mushrooms").on("click", function() {
  $(this).toggleClass("active");
  $(".mushroom").toggle();
  $(".price li:contains(mushrooms)").toggle()
  })  

$(".btn-green-peppers").on("click", function() {
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
  $(".price li:contains(peppers)").toggle();
  });

//white sauce + crust not shown by default
$(".sauce").removeClass("sauce-white");
$(".price li:contains(white)").hide();

$(".crust").removeClass("crust-gluten-free");
$(".price li:contains(crust)").hide();

//when button clicked
$(".btn-sauce").on("click", function() {
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white", "sauce");
  $(".price li:contains(white)").toggle();
});

$(".btn-crust").on("click", function() {
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free", "crust");
  $(".price li:contains(crust)").toggle();
});

$("strong").text("$13")

//add or remove three if white sauce is added

});

