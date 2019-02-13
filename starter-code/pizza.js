// Write your Pizza Builder JavaScript in this file.
// variables to use

//buttons
var buttonCol = $("button")
var butPep = $(".btn-pepperonni")
var butGP = $(".btn-green-peppers")
var butMush = $(".btn-mushrooms")
var butSauce = $(".btn-sauce")
var butGluten = $(".btn-crust")
//ingredients
var greenPepper = $(".green-pepper")
var mushroom = $(".mushroom")
var caps = $(".cap")
var stems = $(".stem")
var pepperoni = $(".pep")
var whiteSauce = $(".sauce-white")
var glutenFree = $(".crust-gluten-free")
//prices
var pepPrice = $(".price li:nth-child(1)")
var mushPrice = $(".price li:nth-child(2)")
var gpPrice = $(".price li:nth-child(3)")
var saucePrice = $(".price li:nth-child(4)")
var glutenPrice = $(".price li:nth-child(5)")



//function declaration
function addRemovePepperoni() {
  butPep.toggleClass("active");
  pepperoni.toggleClass("visible");
  pepPrice.toggleClass("visible");
}

function addRemoveGreenPepper() {
  butGP.toggleClass("active");
  greenPepper.toggleClass("green-pepper");
  gpPrice.toggleClass("visible");
}

function addRemoveMushroom() {
  butMush.toggleClass("active");
  caps.toggleClass("cap");
  stems.toggleClass("stem");
  mushPrice.toggleClass("visible");
}

function addRemoveGlutenFree() {
  butGluten.toggleClass("active");
  glutenFree.toggleClass("crust-gluten-free");
  glutenPrice.toggleClass("visible");
}

function addRemoveWhiteSauce() {
  butSauce.toggleClass("active");
  whiteSauce.toggleClass("sauce-white");
  saucePrice.toggleClass("visible");
}

function resetPizza() {
  addRemoveGlutenFree();
  addRemoveWhiteSauce();
  
}

// JS Functioning after load of site
$(document).ready(function() {
  resetPizza();

  butPep.click(function () {
    addRemovePepperoni();
  });

  butGP.click(function () {
    addRemoveGreenPepper();
  });

  butMush.click(function () {
    addRemoveMushroom();
  });

  butSauce.click(function () {
    addRemoveWhiteSauce();
  });

  butGluten.click(function () {
    addRemoveGlutenFree();
  });

});
