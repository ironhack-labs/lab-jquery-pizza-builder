// Write your Pizza Builder JavaScript in this file.

$( document ).ready(function() {

  function totalPrice (price, sum) {
    var priceElement = $('strong');
    var currentPrice = Number(priceElement.text().replace('$', ''));
    if (sum){
      currentPrice += price;
    } else {
      currentPrice -= price;
    }
    priceElement.text('$' + currentPrice);
  }

  function checkActive(buttonSelector, ingredientPrice){
    if ($(buttonSelector).hasClass('active')) {
      totalPrice(ingredientPrice, true);
    } else {
      totalPrice(ingredientPrice, false);
    }
  }

function clickIngredient(buttonSelector, ingredientSelector, priceSelector, ingredientPrice){
  $(buttonSelector).click(function(){
    $(this).toggleClass('active');
    $(ingredientSelector).toggle();
    $(priceSelector).toggle();
    checkActive(this, ingredientPrice);
  })
};

function clickSpecialIngredient(buttonSelector, ingredientSelector, priceSelector, ingredientPrice, specialIngredient){
  $(buttonSelector).click(function(){
    $(this).toggleClass('active');
    $(ingredientSelector).toggleClass(specialIngredient);
    $(priceSelector).toggle();
    checkActive(this, ingredientPrice);
  })
};

function setSpecialIngredient(buttonSelector, ingredientSelector, priceSelector, specialIngredient) {
  $(buttonSelector).removeClass('active');
  $(ingredientSelector).removeClass(specialIngredient);
  $(priceSelector).hide();
};

clickIngredient('.btn-pepperonni','.pep', "li:contains('$1 pepperonni')" , 1, true);
clickIngredient('.btn-mushrooms','.mushroom', "li:contains('$1 mushrooms')" , 1, true);
clickIngredient('.btn-green-peppers','.green-pepper', "li:contains('$1 green peppers')", 1, true);
clickSpecialIngredient('.btn-sauce','.sauce', "li:contains('$3 white sauce')", 3, 'sauce-white');
clickSpecialIngredient('.btn-crust','.crust', "li:contains('$5 gluten-free crust')", 5, 'crust-gluten-free');


setSpecialIngredient('.btn-sauce','.sauce', "li:contains('$3 white sauce')", 'sauce-white');
setSpecialIngredient('.btn-crust','.crust', "li:contains('$5 gluten-free crust')", 'crust-gluten-free');

$('strong').text('$13');

});




