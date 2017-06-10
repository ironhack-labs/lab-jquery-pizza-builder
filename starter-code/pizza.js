// Write your Pizza Builder JavaScript in this file.
$(document).ready( function() {

  var totalPrice = 10;
  $('.price strong').text('$' + totalPrice);

  $('section').removeClass('sauce-white');
  $('section').removeClass('crust-gluten-free');
  $('.btn').removeClass('active');

  $('.price li').hide();
  $('.pep').hide();
  $('.mushroom').hide();
  $('.green-pepper').hide();

  $('.btn-pepperonni').click( function() {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.price li:nth-child(1)').toggle();
    pepCalculatePrice();
  });

  $('.btn-mushrooms').click( function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price li:nth-child(2)').toggle();
    mushroomCalculatePrice();
  });

  $('.btn-green-peppers').click( function() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price li:nth-child(3)').toggle();
    greenPepperCalculatePrice();
  });

  $(".btn-sauce").click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price li:nth-child(4)').toggle();
    sauceCalculatePrice();
  });

  $(".btn-crust").click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price li:nth-child(5)').toggle();
    crustCalculatePrice();
  });

  function pepCalculatePrice () {
    if ($('.btn-pepperonni').hasClass('active')) {
        totalPrice += 1;
    }
    else {
        totalPrice -= 1;
    }
    $('.price strong').text('$' + totalPrice);
  }

  function mushroomCalculatePrice () {
    if ($('.btn-mushrooms').hasClass('active')) {
        totalPrice += 1;
    }
    else {
        totalPrice -= 1;
    }
    $('.price strong').text('$' + totalPrice);
  }

  function greenPepperCalculatePrice () {
    if ($('.btn-green-peppers').hasClass('active')) {
        totalPrice += 1;
    }
    else {
        totalPrice -= 1;
    }
    $('.price strong').text('$' + totalPrice);
  }

  function sauceCalculatePrice () {
    if ($('.btn-sauce').hasClass('active')) {
        totalPrice += 3;
    }
    else {
        totalPrice -= 3;
    }
    $('.price strong').text('$' + totalPrice);
  }

  function crustCalculatePrice () {
    if ($('.btn-crust').hasClass('active')) {
        totalPrice += 5;
    }
    else {
        totalPrice -= 5;
    }
    $('.price strong').text('$' + totalPrice);
  }
});
