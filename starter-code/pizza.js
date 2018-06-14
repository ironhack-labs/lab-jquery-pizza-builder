// Write your Pizza Builder JavaScript in this file.

var priceTag= document.getElementById('priceTag');
priceTag.innerHTML === "10$$";

$('.btn').removeClass('active');

$('.btn-pepperonni').click(function(){

  $(".pep").toggle();
  $('.btn-pepperonni').toggleClass('active');
  $(".panel li:contains('pepperonni')").toggle();

/*   var btn = $('.btn')
  btn.html(btn.hasClass('active') ? btn.removeClass('active') : btn.addClass('active')) */
});
$('.btn-mushrooms').click(function(){
  $(".mushroom").toggle();
  $('.btn-mushrooms').toggleClass('active');
  $("aside[class='panel price'] li:nth-child(2)").toggle();
});
$('.btn-green-peppers').click(function(){
  $(".green-pepper").toggle();
  $('.btn-green-peppers').toggleClass('active');
  $("aside[class='panel price'] li:nth-child(3)").toggle();
});

//default sauce and crust
$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');
$("aside[class='panel price'] li:nth-child(4)").toggle();
$("aside[class='panel price'] li:nth-child(5)").toggle();

$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $("aside[class='panel price'] li:nth-child(5)").toggle();
});

$('.btn-sauce').click(function(){
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $("aside[class='panel price'] li:nth-child(4)").toggle();
});

//test itiration 4
/* $("aside[class='panel price'] li['$1 pepperonni']").toggle(); */ //all panel
/* $(".panel li:contains('pepperonni')").toggle();  */ //text
/* $("aside[class='panel price'] li:nth-child(n+4)").toggle(); */

 /*  var priceTag = $(".panel strong:contains('21')");
  var price = 10; */

