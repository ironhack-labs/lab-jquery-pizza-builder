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



//function declaration
function addRemovePepperoni() {
  butPep.toggleClass("active");
  pepperoni.toggleClass("visible");
}

function addRemoveGreenPepper() {
  butGP.toggleClass("active");
  greenPepper.toggleClass("green-pepper");
}

function addRemoveMushroom() {
  butMush.toggleClass("active");
  caps.toggleClass("cap");
  stems.toggleClass("stem");
}

function addRemoveGlutenFree() {
  butGluten.toggleClass("active");
  glutenFree.toggleClass("crust-gluten-free");
}

function addRemoveWhiteSauce() {
  butSauce.toggleClass("active");
  whiteSauce.toggleClass("sauce-white");
}

function resetPizza() {
  addRemovePepperoni();
  addRemoveGreenPepper();
  addRemoveMushroom();
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
