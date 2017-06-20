// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.price li:contains("white sauce")').hide();
  $('.price li:contains("gluten-free crust")').hide();
  $('.btn-crust, .btn-sauce').removeClass('active');
  $('.price > strong').text('$13');

  $('.btn').on('click', function (){
    $(this).toggleClass('active');
  });
  function calculateTotalPrice(priceModifier){
    var total = parseInt($('.price > strong').text().substring(1)) + priceModifier;
    $('.price > strong').text('$' + total);
  }
  $('.btn-pepperonni').on('click', function(){
    $('.pep').toggle();
    $('.price li:contains("pepperonni")').toggle();
    var price = 1;
    if (!$(this).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  });
  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').toggle();
    $('.price li:contains("mushrooms")').toggle();
    var price = 1;
    if (!$(this).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  });
  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').toggle();
    $('.price li:contains("green peppers")').toggle();
    var price = 1;
    if (!$(this).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  });
  $('.btn-crust').on('click', function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:contains("gluten-free crust")').toggle();
    var price = 5;
    if (!$(this).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  });
  $('.btn-sauce').on('click', function(){
    $('.sauce').toggleClass('sauce-white');
    $('.price li:contains("white sauce")').toggle();
    var price = 3;
    if (!$(this).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  });
});
