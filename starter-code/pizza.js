// Write your Pizza Builder JavaScript in this file.

// display or hide pepperoni

function main() {

  $("strong").text("10");
  $('.btn-sauce').removeClass('active');
  $('.btn-crust').removeClass('active');
  $(".price li:contains('sauce')").hide();
  $(".price li:contains('free')").hide();
  var $price = 10;
  // toggle display or hide the matched elements and remove class active
  $('.btn-pepperonni').click(function(event) {
    $('.btn-pepperonni').toggleClass('active');
    $('.pep').toggle();
  });
  // toggle display or hide the matched elements and remove class active
  $('.btn-mushrooms').click(function(event) {
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom').toggle();
  });
  // toggle display or hide the matched elements and remove class active
  $('.btn-green-peppers').click(function(event) {
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper').toggle();
  });
  // Add to btn-sauce active class
  $('.btn-sauce').click(function(event) {
    $('.btn-sauce').toggleClass('active');
    $(".price li:contains('sauce')").toggle();
  });
  // Add to btn-gluten active class
  $('.btn-crust').click(function(event) {
    $('.btn-crust').toggleClass('active');
    $(".price li:contains('crust')").toggle();
  });
}


$(document).ready(main);
