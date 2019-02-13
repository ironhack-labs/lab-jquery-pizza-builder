// Write your Pizza Builder JavaScript in this file.
// variables to use
var buttonCol = $("button")
var greenPepper = $(".green-pepper")
var mushroom = $(".mushroom")
var caps = $(".cap")
var stems = $(".stem")
var pepperoni = $(".pep")


//function declaration
function addRemovePepperoni() {
  $(pepperoni).toggleClass("visible")
}

function addRemoveGreenPepper() {
  $(greenPepper).toggleClass("green-pepper")
}

function addRemoveMushroom() {
  $(caps).toggleClass("cap")
  $(stems).toggleClass("stem")
}

function resetPizza() {
  $(".selector").removeClass(className)
}

// JS Functioning after load of site
$(document).ready(function() {



});
