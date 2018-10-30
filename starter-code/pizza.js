// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

var pizzaPrice = 10;
function CalculatePrice(){
if($(".btn-pepperonni").hasClass("active")) {
   pizzaPrice +=1;
}
if ($(".btn-mushrooms").hasClass("active")) {
   pizzaPrice +=1;
}
if($(".btn-green-peppers").hasClass("active")) {
   pizzaPrice +=1;
}
if($(".btn-sauce").hasClass("active")) {
   pizzaPrice +=3;
}
if($(".btn-crust").hasClass("active")) {
  pizzaPrice +=5;
}
$("aside strong").html(pizzaPrice);
  console.log(pizzaPrice);
};

  // Select the toppings with the 3 buttons
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $("ul > li:contains(pepperonni)").toggle();
    CalculatePrice(pizzaPrice)
  });

  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $("ul > li:contains(mushrooms)").toggle();
    CalculatePrice(pizzaPrice)
  });

  $(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $("ul > li:contains(green peppers)").toggle();
    CalculatePrice(pizzaPrice)
  });
  // End of the selection of toppings

  // Hide the white sauce  by default on loading the page
  $(".sauce").toggleClass("sauce-white");
  $("ul > li:contains(white sauce)").toggle();

  // Select the white sauce clicking on the button
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    CalculatePrice(pizzaPrice)
  });

  // Hide the crust gluten free by default loading the page
  $(".crust").toggleClass("crust-gluten-free");
  $("ul > li:contains(gluten-free crust)").toggle();

  // Select the crust gluten free clicking the button
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    CalculatePrice(pizzaPrice)
  });
});

//var pizza = {
//  basis: { price: 10 },
//
//  ingredients: [
//    { name: "Pepperonni", price: 1 },
//    { name: "Mushrooms", price: 1 },
//    { name: "Green Peppers", price: 1 },
//    { name: "White Sauce", price: 3 },
//    { name: "Gluten Free Crust", price: 5 }
//  ]
//};

/*/intialzing the variables TODO: Transform in an object
var basis = 10;
var pepPrice = 1;
var mushPrice = 1;
var greenPrice = 1;
var saucePrice = 3;
var crustPrice = 5;
var ingredientsPrice = 0;
var pizzaPrice = basis + ingredientsPrice;

// Updating the price of the pizza with the right ingredients
console.log(pizzaPrice);
 // Callback function to calculate the price
 function CalculatePrice(){
  if ($("ul > li:contains(pepperonni)").is(":visible")){
    ingredientsPrice = ingredientsPrice + pepPrice;
  }
  else if ($("ul > li:contains(mushrooms)").is(":visible")){
    ingredientsPrice = ingredientsPrice + mushPrice;
  }
   else if ($("ul > li:contains(green peppers)").is(":visible")){
     ingredientsPrice = ingredientsPrice + greenPrice;
   }
   else if ($("ul > li:contains(white sauce)").is(":visible")){
     ingredientsPrice = ingredientsPrice + saucePrice;
   }
   else if ($("ul > li:contains(gluten-free crust)").is(":visible")){
    ingredientsPrice = ingredientsPrice + crustPrice;
   };
   var pizzaPrice = basis + ingredientsPrice;
   $("aside strong").html(pizzaPrice);
  console.log(pizzaPrice);
 };*/