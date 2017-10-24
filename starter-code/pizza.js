// Write your Pizza Builder JavaScript in this file.


//ONLOAD
$(".pep").toggle();
$(".mushroom").toggle();
$(".green-pepper").toggle();
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");


//FUNCTIONS FOR TOGGLING
function pepperoni() {
  $(".pep").toggle();
}

function mushroom() {
  $(".mushroom").toggle();
}

function greenPepper() {
  $(".green-pepper").toggle();
}


function glutenFree() {
  $(".crust").toggleClass("crust-gluten-free");
}

function whiteSauce() {
  $(".sauce").toggleClass("sauce-white");
}


//DOM BUTTONS
$(".btn-pepperonni").on("click", pepperoni);
$(".btn-mushrooms").on("click", mushroom);
$(".btn-green-peppers").on("click", greenPepper);
$(".btn-crust").on("click", glutenFree);
$(".btn-sauce").on("click", whiteSauce);
// $(".pepperoni").text(pepperoni + "de pepperoni");
