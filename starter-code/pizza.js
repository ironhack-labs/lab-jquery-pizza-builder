// Write your Pizza Builder JavaScript in this file.

//Iteration 1: Add and Remove Toppings

$(document).ready(function() {
  //Ingredients
  var greenPepper = $('.green-pepper');
  var pepperoni = $('.pep');
  var mushroom = $('.mushroom');
  var sauce = $('.sauce');
  var sauceWhite = ('sauce-white');
  var glutenFree = ('crust-gluten-free');
  var crust = $('.crust');


  //buttons
  var btnGreenPepers = $('.btn-green-peppers');
  var btnPepperonni = $('.btn-pepperonni');
  var btnMushrooms = $('.btn-mushrooms');
  var btnSauce = $('.btn-sauce');
  var btnCrust = $('.btn-crust');

  //Adding ingredients

  btnGreenPepers.click(function() {
    greenPepper.toggle();
  });

  btnPepperonni.click(function() {
    pepperoni.toggle();
  });

  btnMushrooms.click(function() {
    mushroom.toggle();
  });

  //default pizza ingredients

  crust.removeClass(glutenFree);
  sauce.removeClass(sauceWhite);

  //extra pizza ingredients

  btnSauce.click(function() {
    sauce.toggleClass(sauceWhite);
  });

  btnCrust.click(function() {
    crust.toggleClass(glutenFree);
  });

  //



});
