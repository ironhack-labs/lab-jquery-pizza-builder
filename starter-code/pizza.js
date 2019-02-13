// Write your Pizza Builder JavaScript in this file.
// variables to use

//buttons
var buttonCol = $("button");
var butPep = $(".btn-pepperonni");
var butGP = $(".btn-green-peppers");
var butMush = $(".btn-mushrooms");
var butSauce = $(".btn-sauce");
var butGluten = $(".btn-crust");
//ingredients
var greenPepper = $(".green-pepper");
var mushroom = $(".mushroom");
var caps = $(".cap");
var stems = $(".stem");
var pepperoni = $(".pep");
var whiteSauce = $(".sauce-white");
var glutenFree = $(".crust-gluten-free");
//prices
var pepPrice = $(".price li:nth-child(1)");
var mushPrice = $(".price li:nth-child(2)");
var gpPrice = $(".price li:nth-child(3)");
var saucePrice = $(".price li:nth-child(4)");
var glutenPrice = $(".price li:nth-child(5)");
var totalPrice = $("strong");



//function declaration
function addRemovePepperoni() {
  butPep.toggleClass("active");
  pepperoni.toggleClass("invisible");
  pepPrice.toggleClass("invisible");
}

function addRemoveGreenPepper() {
  butGP.toggleClass("active");
  greenPepper.toggleClass("green-pepper");
  gpPrice.toggleClass("invisible");
}

function addRemoveMushroom() {
  butMush.toggleClass("active");
  caps.toggleClass("cap");
  stems.toggleClass("stem");
  mushPrice.toggleClass("invisible");
}

function addRemoveGlutenFree() {
  butGluten.toggleClass("active");
  glutenFree.toggleClass("crust-gluten-free");
  glutenPrice.toggleClass("invisible");
}

function addRemoveWhiteSauce() {
  butSauce.toggleClass("active");
  whiteSauce.toggleClass("sauce-white");
  saucePrice.toggleClass("invisible");
}

function resetPizza() {
  addRemoveGlutenFree();
  addRemoveWhiteSauce();
  
}

function calculatePrice() {
  var myPrice = 21;
  if (pepPrice.hasClass("invisible")) {myPrice--}
  if (mushPrice.hasClass("invisible"))  {myPrice--}
  if (gpPrice.hasClass("invisible")) {myPrice--}
  if (saucePrice.hasClass("invisible")) {myPrice -= 3}
  if (glutenPrice.hasClass("invisible"))  {myPrice -= 5}

  totalPrice.html(myPrice); 
}

// JS Functioning after load of site
$(document).ready(function() {
  resetPizza();
  calculatePrice();

  butPep.click(function () {
    addRemovePepperoni();
    calculatePrice();
  });

  butGP.click(function () {
    addRemoveGreenPepper();
    calculatePrice();
  });

  butMush.click(function () {
    addRemoveMushroom();
    calculatePrice();
  });

  butSauce.click(function () {
    addRemoveWhiteSauce();
    calculatePrice();
  });

  butGluten.click(function () {
    addRemoveGlutenFree();
    calculatePrice();
  });

});
