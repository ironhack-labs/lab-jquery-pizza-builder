$(document).ready(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".price li:contains('sauce')").fadeToggle();
  $(".price li:contains('crust')").fadeToggle();

  $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").fadeToggle();
    $(".price li:contains('peppers')").fadeToggle();
  });

  $(".btn-pepperonni").click(function(event) {
    $(".pep").fadeToggle();
    $(".price li:contains('pepperonni')").fadeToggle();
  });

  $(".btn-mushrooms").click(function(event) {
    $(".mushroom").fadeToggle();
    $(".price li:contains('mushroom')").fadeToggle();
  });

  $(".btn-sauce").click(function(event) {
    $(".sauce").toggleClass("sauce-white");
    $(".price li:contains('sauce')").fadeToggle();
  });

  $(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:contains('crust')").fadeToggle();
  });

  $(".btn-pepperonni").click(function(event) {
    $(this).toggleClass("active");
  });

  $(".btn-mushrooms").click(function(event) {
    $(this).toggleClass("active");
  });

  $(".btn-green-peppers").click(function(event) {
    $(this).toggleClass("active");
  });

  $(".btn-sauce").click(function(event) {
    $(this).toggleClass("active");
  });

  $(".btn-crust").click(function(event) {
    $(this).toggleClass("active");
  });

var totalPrice = 11;

// $('.price li:first').text().split(" ")[0];

$("strong").replaceWith("<strong>$" + totalPrice + "</strong>");

});
