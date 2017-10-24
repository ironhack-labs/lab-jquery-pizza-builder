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

  //button State
  var btn = $('.btn');
  var active = ('active');

  //default pizza ingredients

  crust.removeClass(glutenFree);
  sauce.removeClass(sauceWhite);
  btn.removeClass(active);

  //Adding ingredients

  btnGreenPepers.click(function() {
    greenPepper.toggle();
    btnGreenPepers.toggleClass(active);
  });

  btnPepperonni.click(function() {
    pepperoni.toggle();
    btnPepperonni.toggleClass(active);
  });

  btnMushrooms.click(function() {
    mushroom.toggle();
    btnMushrooms.toggleClass(active);
  });

  //extra pizza ingredients

  btnSauce.click(function() {
    sauce.toggleClass(sauceWhite);
    btnSauce.toggleClass(active);
  });

  btnCrust.click(function() {
    crust.toggleClass(glutenFree);
    btnCrust.toggleClass(active);
  });

  //



});
