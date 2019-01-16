// Write your Pizza Builder JavaScript in this file.

//From the default pizza, set the total price to $13 in HTML file and in the total var
$("strong").html("$13");

var total = 13;

//Function to get the price from the HTML, even if we change the price in the HTML file
function getToppingPrice(string) {
  var price = $(string).html();
  var index$ = price.indexOf("$");
  price = price.slice(index$ + 1);
  var indexSpace = price.indexOf(" ");
  price = price.slice(0, indexSpace);
  return Number(price);
}

//Set variables to get the price of each topping
var pepPrice = getToppingPrice("li:contains(pepperonni)");
var mushroomPrice = getToppingPrice("li:contains(mushrooms)");
var greenPepperPrice = getToppingPrice("li:contains(green pepper)");
var whiteSaucePrice = getToppingPrice("li:contains(white sauce)");
var glutenFreePrice = getToppingPrice("li:contains(gluten-free)");

//Remove the sauce-white so by default the pizza has the sauce class which is the red one
//Remove the price line of white sauce by default
$(".sauce").removeClass("sauce-white");
$("li:contains($3 white sauce)").hide();

//Remove the crust-glutent-free so by default the pizza has the regular crust
//Remove the price line of gluten-free crust
$(".crust").removeClass("crust-gluten-free");
$("li:contains($5 gluten-free crust)").hide();

//Put the Button White sauce and the Button Gluten-free crust not active by default
$(".btn-crust, .btn-sauce").removeClass("active");

//Button Pepperonni
$(".btn-pepperonni").click(function() {
  $("li:contains($1 pepperonni)").toggle();
  $(".pep").toggle();
  if ($(".pep").is(":hidden")) {
    $(".btn-pepperonni").removeClass("active");
    total -= pepPrice;
  } else {
    $(".btn-pepperonni").addClass("active");
    total += pepPrice;
  }
  $("strong").html("$" + total);
});

//Button Mushrooms
$(".btn-mushrooms").click(function() {
  $("li:contains($1 mushrooms)").toggle();
  $(".mushroom").toggle();
  if ($(".mushroom").is(":hidden")) {
    $(".btn-mushrooms").removeClass("active");
    total -= mushroomPrice;
  } else {
    $(".btn-mushrooms").addClass("active");
    total += mushroomPrice;
  }
  $("strong").html("$" + total);
});

//Button Green Peppers
$(".btn-green-peppers").click(function() {
  $("li:contains($1 green peppers)").toggle();
  $(".green-pepper").toggle();
  if ($(".green-pepper").is(":hidden")) {
    $(".btn-green-peppers").removeClass("active");
    total -= greenPepperPrice;
  } else {
    $(".btn-green-peppers").addClass("active");
    total += greenPepperPrice;
  }
  $("strong").html("$" + total);
});

//Button White Sauce
$(".btn-sauce").click(function() {
  $("li:contains($3 white sauce)").toggle();
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    total -= whiteSaucePrice;
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
    total += whiteSaucePrice;
  }
  $("strong").html("$" + total);
});

//Button Gluten-free Crust
$(".btn-crust").click(function() {
  $("li:contains($5 gluten-free crust)").toggle();
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");

    total -= glutenFreePrice;
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
    total += glutenFreePrice;
  }
  $("strong").html("$" + total);
});
