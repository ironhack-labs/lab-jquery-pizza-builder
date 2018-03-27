// Write your Pizza Builder JavaScript in this file.
$(document).ready( function() {
  var pep = $(".pep");
  var mushroom = $(".mushroom");
  var greenPepper = $(".green-pepper");
  var cheese = $(".cheese");
  var sauce = $(".sauce");

  pep.addClass("invisible");
  mushroom.addClass("invisible");
  greenPepper.addClass("invisible");
  sauce.addClass("invisible");

  $(".btn-pepperonni").on("click", function() {
    pep.toggleClass("invisible");
  });

  $(".btn-mushrooms").on("click", function() {
    mushroom.toggleClass("invisible");
  });

  $(".btn-green-peppers").on("click", function() {
    greenPepper.toggleClass("invisible");
  });

});