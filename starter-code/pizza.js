// Write your Pizza Builder JavaScript in this file.

function CalculatePrice() {
  var pepPrice = 1;
  var mushPrice = 1;
  var greenPrice = 1;
  var saucePrice = 3;
  var crustPrice = 5;
  var ingredientsPrice = 0;
  var basis = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    ingredientsPrice += pepPrice;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    ingredientsPrice += mushPrice;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    ingredientsPrice += greenPrice;
  }
  if ($(".btn-sauce").hasClass("active")) {
    ingredientsPrice += saucePrice;
  }
  if ($(".btn-crust").hasClass("active")) {
    ingredientsPrice += crustPrice;
  }
  var pizzaPrice = basis + ingredientsPrice;
  $("aside strong").html("$" + pizzaPrice);
  console.log(pizzaPrice);
}



$(document).ready(function() {

  // Select the toppings with the 3 buttons
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $("ul > li:contains(pepperonni)").toggle();
    CalculatePrice();
  });

  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $("ul > li:contains(mushrooms)").toggle();
    CalculatePrice();
  });

  $(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $("ul > li:contains(green peppers)").toggle();
    CalculatePrice();
  });
  // End of the selection of toppings

  // Hide the white sauce  by default on loading the page
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $("ul > li:contains(white sauce)").hide();
  CalculatePrice();

  // Select the white sauce clicking on the button
  $(".btn-sauce").click(function() {
    $("ul > li:contains(white sauce)").toggle();
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    CalculatePrice();
  });

  // Hide the crust gluten free by default loading the page
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $("ul > li:contains(gluten-free crust)").hide();
  CalculatePrice();

  // Select the crust gluten free clicking the button
  $(".btn-crust").click(function() {
    $("ul > li:contains(gluten-free crust)").toggle();
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    CalculatePrice();
  });
});