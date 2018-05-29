// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  
//make buttons active by default
  $(".btn-pepperonni").removeClass("active");
  $(".btn-green-peppers").removeClass("active");
  $(".btn-mushrooms").removeClass("active");

  //remove toppings when clicked on buttons
  $(".btn-pepperonni").on("click", function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".price li:nth-of-type(1)").toggle();
  });

  $(".btn-mushrooms").on("click", function() {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $(".price li:nth-of-type(2)").toggle();
  });

  $(".btn-green-peppers").on("click", function() {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:nth-of-type(3)").toggle();
  });

  //white sauce + crust
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
 //dont show by default
  $(".price li:nth-of-type(4)").toggle();
  $(".price li:nth-of-type(5)").toggle();

//when button clicked
  $(".btn-sauce").on("click", function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white", "sauce");
    $(".price li:nth-of-type(4)").toggle();
  });

  $(".btn-crust").on("click", function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free", "crust");
    $(".price li:nth-of-type(5)").toggle();
  });




















});



