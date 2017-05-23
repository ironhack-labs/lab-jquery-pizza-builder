$(document).ready(function(){
  var priceBase = 10;


  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggleClass('hidden');
    $('.pizza-mushroom').toggleClass('hidden');

  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggleClass('hidden');
    $('.pizza-green-pepper').toggleClass('hidden');
  });

  $('.btn-pepperonni').click(function(){
    $('.pep').toggleClass('hidden');
    $('.pizza-pep').toggleClass('hidden');

  });

  $('.btn-sauce').click(function(){
    $('.pizza-sauce').toggleClass('hidden');
    $('.sauce').toggleClass('sauce-white');
  });

  $('.btn-crust').click(function(){
    $('.pizza-crust').toggleClass('hidden');
    $('.crust').toggleClass('crust-gluten-free');
  });

  $('button').click(function(){
    $(this).toggleClass('active');
  });

  if($('.pizza-mushroom').length > 0){
    
  }

  var total = priceBase + pricePep + priceGreenPepper + priceMushroom + priceSauce + priceCrust;


});
