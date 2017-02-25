var defaultIngredients = function(){
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn-crust').removeClass('active');
  $('.btn-sauce').removeClass('active');
  $('.panel.price').find("ul").find("li:contains('$5')").toggle();
  $('.panel.price').find("ul").find("li:contains('$3')").toggle();

};

$(document).ready(function(){

  defaultIngredients();

  $('.btn-pepperonni').click(function(){
    $('.pep ').fadeToggle(100);
    $('.btn-pepperonni').toggleClass('active');
    $('.panel.price').find("ul").find("li:contains('pepperonni')").toggle();
  });

  $('.btn-mushrooms').click(function(){
    $('.mushroom ').fadeToggle(100);
    $('.btn-mushrooms').toggleClass('active');
    $('.panel.price').find("ul").find("li:contains('mushroom')").toggle();
  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').fadeToggle(100);
    $('.btn-green-peppers').toggleClass('active');
    $('.panel.price').find("ul").find("li:contains('green')").toggle();
  });

  $('.btn-sauce').click(function(){
    // $('.sauce-white').fadeToggle(500);
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.panel.price').find("ul").find("li:contains('$3')").toggle();
  });

  $('.btn-crust').click(function(){
    // $('.crust-gluten-free').toggleClass();
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.panel.price').find("ul").find("li:contains('$5')").toggle();
  });

});
// Write your Pizza Builder JavaScript in this file.
