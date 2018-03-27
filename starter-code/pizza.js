// Write your Pizza Builder JavaScript in this file.
$(document).ready( function() {
  var pep = $(".pep");
  var mushroom = $(".mushroom");
  var greenPepper = $(".green-pepper");
  var cheese = $(".cheese");
  var sauce = $(".sauce");
  var btn = $("button");

  pep.addClass("invisible");
  mushroom.addClass("invisible");
  greenPepper.addClass("invisible");
  btn.removeClass("active");

  $(".btn-pepperonni").on("click", function(e) {
    pep.toggleClass("invisible");
    $(this).toggleClass("active");
  });

  $(".btn-mushrooms").on("click", function() {
    mushroom.toggleClass("invisible");
    $(this).toggleClass("active");
  });

  $(".btn-green-peppers").on("click", function() {
    greenPepper.toggleClass("invisible");
    $(this).toggleClass("active");
  });

  $(".btn-sauce").on("click", function() {
    sauce.toggleClass("invisible");
    $(this).toggleClass("active");
  });

  $(".btn-crust").on("click", function() {
    cheese.toggleClass("invisible");
    $(this).toggleClass("active");
  });

});