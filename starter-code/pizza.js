// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
// quitar de la pizza

//quitar salsa blanca
$(".sauce").removeClass("sauce-white");

//quitar gluten crust
$(".crust").removeClass("crust-gluten-free");

//quitar lista
$("aside li:nth-child(4)").hide();
$("aside li:nth-child(5)").hide();


$(".btn-pepperonni").click(function(){
  var pepperonni = $(".pep").toggle();
  $(this).toggleClass('active');
$("aside li:nth-child(1)").toggle();
});


$(".btn-mushrooms").click(function(){
  var mushroom = $(".mushroom").toggle();
  $(this).toggleClass('active');
  $("aside li:nth-child(2)").toggle();
});

$(".btn-green-peppers").click(function(){
  var greenPepper = $(".green-pepper").toggle();
  $(this).toggleClass('active');
  $("aside li:nth-child(3)").toggle();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass('active');
  $("aside li:nth-child(4)").toggle();
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass('active');
  $("aside li:nth-child(5)").toggle();
});

var totalPrice = 10;

$("aside li").each(function(i){
totalPrice += parseInt($("this").text()[1]); 
})


/* var pepePrice = 0;

if ($("aside li:nth-child(1):visible")){
  var peperonniText = $("aside li:nth-child(1)").text();
  pepePrice = peperonniText[1];
} else {
  pepePrice = 1;
} */


/* var mushroomText = $("aside li:nth-child(2)").text();
var mushPrice = mushroomText[1];

var peppersText = $("aside li:nth-child(3)").text();
var peppersPrice = peppersText[1];

var whiteSauceText = $("aside li:nth-child(4)").text();
var whiteSaucePrice = whiteSauceText[1];

var glutenText = $("aside li:nth-child(5)").text();
var glutenPrice = glutenText[1];
 */
// var totalPrice = (10 + parseInt(pepePrice));
// console.log((10 + parseInt(pepePrice)));
});