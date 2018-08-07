// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  //Iteration 1

  var greenPeppers = $('.green-pepper');

  $('.btn-green-peppers').click(function() {
    greenPeppers.toggle('true');
    $('.btn-green-peppers').toggleClass('active');
    $('body > aside > ul > li:nth-child(3)').toggle('false');
  });

  var mushrooms = $('.mushroom');
  $('.btn-mushrooms').click(function() {
    mushrooms.toggle('true');
    $('.btn-mushrooms').toggleClass('active');
    $('body > aside > ul > li:nth-child(2)').toggle('false');
  });

  var pepperonni = $('.pep');
  $('.btn-pepperonni').click(function() {
    pepperonni.toggle('true');
    $('.btn-pepperonni').toggleClass('active');
    $('body > aside > ul > li:nth-child(1)').toggle('false');
  });

  //Iteration 2
  var glutenFreeCrust = $('.crust-gluten-free');

  $('.crust').removeClass('crust-gluten-free');
  $('.btn-crust').removeClass('active');
  $('body > aside > ul > li:nth-child(5)').hide();

  $('.btn-crust').click(function() {
    glutenFreeCrust.toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('body > aside > ul > li:nth-child(5)').toggle('true');
  });

  var whiteSauce = $('.sauce-white');

  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').removeClass('active');
  $('body > aside > ul > li:nth-child(4)').hide();

  $('.btn-sauce').click(function() {
    whiteSauce.toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('body > aside > ul > li:nth-child(4)').toggle('true');
  });

  //Iteration 3
  //done in initial function

  //Iteration 4
  //done in initual functions

  //Initial 5

  //var printedPrice = $('body > aside > strong');

  //   function updatePrice() {
  //     $('body > aside > strong').innerHTML = printPrice();
  //   };

  //   function printPrice() {
  //     $('body > aside > strong').text('$25');
  //   };

  //   toppings.filter

  var priceArray = [];
  priceArray = Array.from($('.panel.price li'));
  console.log(priceArray);
});
