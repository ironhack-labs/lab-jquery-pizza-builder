// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  var totalPrice = 10;

  function setDefault() {
    $('.pep').toggle();
    $('.mushroom').toggle();
    $('.green-pepper').toggle();
    $('section.crust').removeClass('crust-gluten-free');
    $('section.sauce').removeClass('sauce-white');
  }

  function addPepperoni() {

    if ($('.pep').css('display') == 'none') {
      totalPrice++;
    } else {
      totalPrice--;
    }

    $('.pep').toggle();

    var totalCart = $('#total').text("$" + totalPrice);

  }

  function addMushrooms() {

    if ($('.mushroom').css('display') == 'none') {
      totalPrice++;
    } else {
      totalPrice--;
    }

    $('.mushroom').toggle();

    var totalCart = $('#total').text("$" + totalPrice);

  }

  function addGreenPeppers() {

    if ($('.green-pepper').css('display') == 'none') {
      totalPrice++;
    } else {
      totalPrice--;
    }

    $('.green-pepper').toggle();

    var totalCart = $('#total').text("$" + totalPrice);

  }

  function addGfCrust() {

    if ($('.crust-gluten-free').css('display') == 'none') {
      totalPrice + 5;
    } else {
      totalPrice - 5;
    }

    $('section.crust').toggleClass('crust-gluten-free');

    var totalCart = $('#total').text("$" + totalPrice);

  }



  setDefault();
  
  $('.btn-pepperonni').click(function(){  
      addPepperoni();
  });

  $('.btn-mushrooms').click(function () {
    addMushrooms();
  });

  $('.btn-green-peppers').click(function () {
    addGreenPeppers();
  });

  $('.btn-crust').click(function () {
    addGfCrust();
  });

  $('.btn-sauce').click(function () {
    $('section.sauce').toggleClass('sauce-white');
  });

});

