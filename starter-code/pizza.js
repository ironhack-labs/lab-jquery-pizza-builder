var defaultIngredients = function(){
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn-crust').removeClass('active');
  $('.btn-sauce').removeClass('active');

};

$(document).ready(function(){

  defaultIngredients();

  $('.btn-pepperonni').click(function(){
    $('.pep ').fadeToggle(100);
    $('.btn-pepperonni').toggleClass('active');
  });

  $('.btn-mushrooms').click(function(){
    $('.mushroom ').fadeToggle(100);
    $('.btn-mushrooms').toggleClass('active');
  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').fadeToggle(100);
    $('.btn-green-peppers').toggleClass('active');
  });

  $('.btn-sauce').click(function(){
    // $('.sauce-white').fadeToggle(500);
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
  });

  $('.btn-crust').click(function(){
    // $('.crust-gluten-free').toggleClass();
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
  });

});
// Write your Pizza Builder JavaScript in this file.
