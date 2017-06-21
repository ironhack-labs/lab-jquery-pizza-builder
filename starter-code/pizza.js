// Write your Pizza Builder JavaScript in this file.
$(document).ready (function () {

var currentPrice = 13;
$("#total-price").html(currentPrice);

$('.btn-sauce').toggleClass('active');
$('.btn-crust').toggleClass('active');
$('.white-price').toggle();
$('.gluten-price').toggle();

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.pep-price').toggle();
    if ($('.btn-pepperonni').hasClass('active')){
      currentPrice += 1;
      $("#total-price").html(currentPrice);
    } else
    currentPrice -= 1;
    $("#total-price").html(currentPrice);
  });

  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.mush-price').toggle();
    if ($('.btn-mushrooms').hasClass('active')){
      currentPrice += 1;
      $("#total-price").html(currentPrice);
    } else
    currentPrice -= 1;
    $("#total-price").html(currentPrice);
  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.green-price').toggle();
    if ($('.btn-green-peppers').hasClass('active')){
      currentPrice += 1;
      $("#total-price").html(currentPrice);
    } else
    currentPrice -= 1;
    $("#total-price").html(currentPrice);
  });

  $('.btn-sauce').click(function (){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.white-price').toggle();
    if ($('.btn-sauce').hasClass('active')){
      currentPrice += 3;
      $("#total-price").html(currentPrice);
    } else
    currentPrice -= 3;
    $("#total-price").html(currentPrice);
  });

  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.gluten-price').toggle();
    if ($('.btn-crust').hasClass('active')){
      currentPrice += 5;
      $("#total-price").html(currentPrice);
    } else
    currentPrice -= 5;
    $("#total-price").html(currentPrice);
  });

});
