// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $('.btn-pepperonni').removeClass('active');
  $('.btn-mushrooms').removeClass('active');
  $('.btn-green-peppers').removeClass('active');

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
  });

  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
  });

  $('.btn-sauce').click(function(){
    $('.sauce-white').toggle();
    $('.btn-sauce').toggleClass('active');
  });

  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
  });

});
