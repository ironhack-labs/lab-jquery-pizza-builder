// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


$('.price').find("li:nth-child(4)").hide();
$('.price').find("li:nth-child(5)").hide();
$('.btn-sauce').removeClass('active');
$('.sauce-white').hide();
$('.btn-crust').removeClass('active');
$('.crust').removeClass('crust-gluten-free');



var $basePrice = parseInt($('.price').find('b').text().slice(1,3));
console.log($basePrice);

var $totalPrice = $('.price').find('strong').text();
console.log($totalPrice);


// Adding pepperonni
$('.btn-pepperonni').on('click', function(){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $('.price').find("li:nth-child(1)").toggle();
  var $tpPep = $('.price').find('strong').text();
});

// Adding mushrooms
$('.btn-mushrooms').on('click', function(){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $('.price').find("li:nth-child(2)").toggle();
});


// Adding green peppers
$('.btn-green-peppers').on('click', function(){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $('.price').find("li:nth-child(3)").toggle();
});

// Sauce and crust options
$('.btn-sauce').on('click', function(){
  $(this).toggleClass('active');
  $('.sauce-white').toggle();
  $('.price').find("li:nth-child(4)").toggle();
});
$('.btn-crust').on('click', function(){
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.price').find("li:nth-child(5)").toggle();
});

//Iteration 4: Ingredients and prices








});
