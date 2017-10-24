// Write your Pizza Builder JavaScript in this file.
function init() {
  //Iteration 1: Add and remove toppings
  var pepperonnis = $('.pep');
  var peppers = $('.green-pepper');
  var mushrooms = $('.mushroom');
  $('.green-pepper, .mushroom, .pep').css('display', 'none');
  $('.btn-pepperonni').click(function (){
    pepperonnis.css('display', 'block');
  });
  $('.btn-mushrooms').click(function (){
    mushrooms.css('display', 'block');
  });
  $('.btn-green-peppers').click(function (){
    peppers.css('display', 'block');
  });
  // Iteration 2: Sauce and crust options
  $('.btn-sauce').click(function () {
    if ($(this).hasClass('active')) {
      $('.sauce').removeClass('sauce-white');
    } else {
      $('.sauce').addClass('sauce-white');
    }
    $(this).toggleClass('active');
  });
  $('.btn-crust').click(function () {
    if ($(this).hasClass('active')) {
      $('.crust').removeClass('crust-gluten-free');
    } else {
      $('.crust').addClass('crust-gluten-free');
    }
    $(this).toggleClass('active');
  });
}
$(document).ready(init);
