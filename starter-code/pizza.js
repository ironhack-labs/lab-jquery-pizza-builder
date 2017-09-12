// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  // PRICE
  var startingPrice = 10;

  var pepperonniPrice =1;
  var mushroomPrice =1;
  var pepperPrice =1;
  var saucePrice =0;
  var crustPrice =0;

  // HIDE SAUCE AND CRUST

  $(".price li:contains('sauce')").hide();
  $(".price li:contains('crust')").hide();

// TURN PEPPERONI ON AND OFF
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
    if($(".btn-pepperonni").hasClass("active")){
      pepperonniPrice = 1;
    } else {
      pepperonniPrice = 0;
    }
  $(".price li:contains('pepperonni')").toggle();
  return pepperonniPrice;
});

// TURN MUSHROOMS ON AND OFF
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
    if($(".btn-mushrooms").hasClass("active")){
      mushroomPrice = 1;
    } else {
      mushroomPrice = 0;
    }
  $(".price li:contains('mushrooms')").toggle();
  return mushroomPrice;
});


// TURN GREEN PEPPERS ON AND OFF
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
    if($(".btn-green-peppers").hasClass("active")){
      pepperPrice = 1;
    } else {
      pepperPrice = 0;
    }
  $(".price li:contains('peppers')").toggle();
  return pepperPrice;
});

// SAUCE SELECTED BY DEFAULT

var sauceWhite = $(".sauce-white");

sauceWhite.removeClass("sauce-white");
$(".btn-sauce").toggleClass("active");

// TOGGLE WHITE SAUCE ON CLICK

$(".btn-sauce").click(function(){
  sauceWhite.toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
    if($(".btn-sauce").hasClass("active")){
      saucePrice = 3;
    } else {
      saucePrice = 0;
    }
  $(".price li:contains('sauce')").toggle();
  return saucePrice;
  //alert(toppings);
});


// NORMAL CRUST SELECTED BY DEFAULT

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
    if($(".btn-crust").hasClass("active")){
      crustPrice = 5;
    } else {
      crustPrice = 0;
    }
  $(".price li:contains('crust')").toggle();
  return crustPrice;
  //alert(toppings);
});

var activeToppingPrice = pepperonniPrice + mushroomPrice + pepperPrice + saucePrice + crustPrice;
var totalPrice = startingPrice + activeToppingPrice;

$(".price strong").text("$" + totalPrice);

$('.btn').click(function() {
   activeToppingPrice = pepperonniPrice + mushroomPrice + pepperPrice + saucePrice + crustPrice;
   totalPrice = startingPrice + activeToppingPrice;
  $(".price strong").text("$" + totalPrice);
});


});
