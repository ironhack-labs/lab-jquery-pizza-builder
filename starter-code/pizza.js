// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggleClass('hidden');
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper-price').toggleClass('hidden');
  });
  $('.btn-pepperonni').click(function(){
    $('.pep').toggleClass('hidden');
    $('.btn-pepperonni').toggleClass('active');
    $('.pepperonni-price').toggleClass('hidden');
  });
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggleClass('hidden');
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom-price').toggleClass('hidden');
  });
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.sauce-price').toggleClass('hidden');
  });
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.crust-price').toggleClass('hidden');
  });


//we want to change the default value of sauce to red sauce

});

//Select the green-peppers button
//Have that button toggle hide and show of items with class green paper
