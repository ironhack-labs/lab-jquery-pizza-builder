// 1) HIDE ALL THE TOPPINGS

// hide green pepper

$(".green-pepper").hide();
$(".btn-green-peppers").removeClass("active");


//hide mushrooms

$(".mushroom").hide();
$(".btn-mushrooms").removeClass("active");

//hide pepperoni

$(".pep").hide();
$(".btn-pepperonni").removeClass("active");


// 2) ON CLICK, ADD ONE TOPPING OF VARIETY CLICKED

//add green pepper
$(".btn-green-peppers").click(function(e){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  });

//Add one pepper at a time hehe for fun
// var timesPepperClicked=1;
// $(".btn-green-peppers").click(function(e){
//   $(".green-pepper:nth-child("+timesPepperClicked+")").show();
//   timesPepperClicked++;
// });

//add mushrooms

$(".btn-mushrooms").click(function(e){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  });

//add pepperoni
$(".btn-pepperonni").click(function(e){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  });

  //make the default normal crust by removing the crust-gluten-free class and adding the class with the button

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");

//add gluten free crust with click of button

$(".btn-crust").click(function(e){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");

});

// make default sauce normal by removing white sauce class

$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");

//add gluten free crust with click of button

$(".btn-sauce").click(function(e){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
});


//default price list should show no extra ingredients

$("#price-list>li").hide();

//add items to price list with when you click a button

$(".btn-green-peppers").click(function(){
 $("#price-list>li:contains('peppers')").toggle();
});

$(".btn-pepperonni").click(function(){
 $("#price-list>li:contains('pepperonni')").toggle();
});

$(".btn-mushrooms").click(function(){
 $("#price-list>li:contains('mushroom')").toggle();
});

$(".btn-sauce").click(function(){
 $("#price-list>li:contains('sauce')").toggle();
});

$(".btn-crust").click(function(){
 $("#price-list>li:contains('crust')").toggle();
});

//updating total:

var greenPepperPrice=1;
var mushroomPrice=1;
var pepperoniPrice=1;
var whiteSaucePrice=3;
var glutenFreeCrustPrice=5;


var totalPrice=10;


$(".btn-sauce").click(function(e){
  if ($("button.btn-sauce").hasClass("active")) {
    totalPrice+=whiteSaucePrice;}
    else {
      totalPrice-=whiteSaucePrice;}
    return $("aside.panel>strong").html("$"+totalPrice);
    // return totalPrice;}
});


$(".btn-mushrooms").click(function(e){
  if ($(".btn-mushrooms").hasClass("active")) {
    totalPrice+=mushroomPrice;}
  else {
    totalPrice-=mushroomPrice;}
  return $("aside.panel>strong").html("$"+totalPrice);
});

$(".btn-green-peppers").click(function(e){
  if ($(".btn-green-peppers").hasClass("active")) {
    totalPrice+=greenPepperPrice;}
  else {
    totalPrice-=greenPepperPrice;}
  return $("aside.panel>strong").html("$"+totalPrice);
});

$(".btn-crust").click(function(e){
  if ($(".btn-crust").hasClass("active")) {
    totalPrice+=glutenFreeCrustPrice;}
  else {
    totalPrice-=glutenFreeCrustPrice;}
  return $("aside.panel>strong").html("$"+totalPrice);
});

$(".btn-pepperonni").click(function(e){
  if ($(".btn-pepperonni").hasClass("active")) {
    totalPrice+=pepperoniPrice;}
  else {
    totalPrice-=pepperoniPrice;}
  return $("aside.panel>strong").html("$"+totalPrice);
});


$("aside.panel>strong").html("$"+totalPrice);
