// Write your Pizza Builder JavaScript in this file.
$(document).ready( function() {
  var pep = $(".pep");
  var mushroom = $(".mushroom");
  var greenPepper = $(".green-pepper");
  var cheese = $(".cheese");
  var sauce = $(".sauce");
  var btn = $(".btn");
  var panelPrice = $(".price strong");
  var totalPrice = 10;

  pep.addClass("invisible");
  mushroom.addClass("invisible");
  greenPepper.addClass("invisible");
  btn.removeClass("active");

  panelPrice.text("$10");

  $(".btn-pepperonni").on("click", function(e) {
    pep.toggleClass("invisible");
    $(this).toggleClass("active");
    updatePrice(e, 1);
  });

  $(".btn-mushrooms").on("click", function(e) {
    mushroom.toggleClass("invisible");
    $(this).toggleClass("active");
    updatePrice(e, 1);
  });

  $(".btn-green-peppers").on("click", function(e) {
    greenPepper.toggleClass("invisible");
    $(this).toggleClass("active");
    updatePrice(e, 1);
  });

  $(".btn-sauce").on("click", function(e) {
    sauce.toggleClass("invisible");
    $(this).toggleClass("active");
    updatePrice(e, 3);
  });

  $(".btn-crust").on("click", function(e) {
    cheese.toggleClass("invisible");
    $(this).toggleClass("active");
    updatePrice(e, 5);
  });

  function updatePrice(e, itemPrice) {
    var currentTarget = e.currentTarget;
    if( currentTarget.classList.contains( "active")) {
      totalPrice += itemPrice;
    } else {
      totalPrice -= itemPrice;
    }

    printPrice(totalPrice);
  }

  function printPrice(price) {
    panelPrice.text("$"+price);
  }

});