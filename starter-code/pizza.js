var defaultSetting= function(){
  $('.crust').removeClass('crust-gluten-free');
  $('.btn-crust').removeClass('active');
  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').removeClass('active');
  $('.panel.price').find("ul").find("li:contains('sauce')").toggle();
  $('.panel.price').find("ul").find("li:contains('crust')").toggle();
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
      $('.panel.price').find("ul").find("li:contains('mushrooms')").toggle();
      updatePrices();
});

$('.btn-green-peppers').click(function(){
  $('.green-pepper ').fadeToggle(100);
  $('.btn-green-peppers').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('green peppers')").toggle();
  updatePrices();

});
$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.panel.price').find("ul").find("li:contains('crust')").toggle();
  updatePrices();

});
$('.btn-sauce').click(function(){
  $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
$('.panel.price').find("ul").find("li:contains('sauce')").toggle();
updatePrices();
});

function updatePrices () {
  var prices = $('.panel.price');
  var base = $(prices).find('b:first');
  var total = $(prices).find('strong:first');
  var ingredients = $(prices).find('ul').find('li:visible');
  var totalPrice = getPrice(base);
  // .each is calling for a loop, first parameter within parenthesis is the array
  // you want to loop over, second parameter is the function you want to apply to it
$.each(ingredients, function(index, ingredient) {
  totalPrice += getPrice(ingredient);
});
$(total).html('$' + totalPrice);
}

function getPrice (ingredient) {
  var price = $(ingredient).html().split(' ')[0];
  return parseInt(price.replace("$",""));
}

$(document).ready(function() {

defaultSetting();
updatePrices();

});
