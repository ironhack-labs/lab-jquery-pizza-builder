$(document).ready(function(){

  defaultIngredients();
  updatePrices();

});


var defaultIngredients = function(){
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn-crust').removeClass('active');
  $('.btn-sauce').removeClass('active');
  $('.panel.price').find("ul").find("li:contains('$5')").toggle();
  $('.panel.price').find("ul").find("li:contains('$3')").toggle();

};


$('.btn-pepperonni').click(function(){
  $('.pep ').fadeToggle(100);
  $('.btn-pepperonni').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('pepperonni')").toggle();
  updatePrices();
});

$('.btn-mushrooms').click(function(){
  $('.mushroom ').fadeToggle(100);
  $('.btn-mushrooms').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('mushroom')").toggle();
  updatePrices();
});

$('.btn-green-peppers').click(function(){
  $('.green-pepper').fadeToggle(100);
  $('.btn-green-peppers').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('green')").toggle();
  updatePrices();
});

$('.btn-sauce').click(function(){
  // $('.sauce-white').fadeToggle(500);
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('$3')").toggle();
  updatePrices();
});

$('.btn-crust').click(function(){
  // $('.crust-gluten-free').toggleClass();
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('$5')").toggle();
  updatePrices();
});

function updatePrices() {
    var prices = $('.panel.price');
    var base = $(prices).find('b:first');
    var total = $(prices).find('strong:first');
    var ingredients = $(prices).find('ul').find('li:visible');
    var totalPrice = getPrice(base);

    $.each(ingredients, function(index, ingredient) {
      totalPrice += getPrice(ingredient);
    });

    $(total).html('$' + totalPrice);
}

function getPrice(ingredient) {
  var price = $(ingredient).html().split(" ")[0];
  return parseInt(price.replace("$",""));
}

// Write your Pizza Builder JavaScript in this file.
