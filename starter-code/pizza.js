// Write your Pizza Builder JavaScript in this file.
function toping (ingredient) {
  var btn, ingredients, index;
  switch (ingredient) {
    case 'pepperonni' :
        btn = $('.btn-pepperonni');
        ingredients = $('.pep');
        index = 1;
        break;
    case 'mushrooms' :
        btn = $('.btn-mushrooms');
        ingredients = $('.mushroom');
        index = 2;
        break;
    case 'green-peppers' :
        btn = $('.btn-green-peppers');
        ingredients = $('.green-pepper');
        index = 3;
  }
  ingredients.css('display', 'none');
  var listElement = '.panel.price li:nth-child(' + index + ')';
  listElement = $(listElement);
  listElement.css('display', 'none');
  btn.removeClass('active');
  btn.click(function () {
    if ($(this).hasClass('active')) {
      ingredients.css('display', 'none');
      $(listElement).css('display', 'none');
    } else {
      ingredients.css('display', 'block');
      $(listElement).css('display', 'block');
    }
    $(this).toggleClass('active');
    updatePrice();
  });
}

function mass(ingredient) {
  var btn, extraIngredient, ingredients, index;
  switch(ingredient) {
    case 'sauce' :
        extraIngredient = '.sauce-white';
        btn = $('.btn-sauce');
        ingredients = $('.sauce');
        index = 4;
        break;
    case 'crust' :
        extraIngredient = '.crust-gluten-free';
        btn = $('.btn-crust');
        ingredients = $('.crust');
        index = 5;
  }
  var listElement = '.panel.price li:nth-child(' + index + ')';
  listElement = $(listElement);
  btn.click(function () {
    if ($(this).hasClass('active')) {
      ingredients.removeClass(extraIngredient);
      listElement.css('display', 'none');
    } else {
      ingredients.addClass(extraIngredient);
      listElement.css('display', 'block');
    }
    $(this).toggleClass('active');
    updatePrice();
  });
}

function updatePrice() {
  var sumPrices = 0;
  $('.price li').each(function() {
    var texto = $(this).text();
    var itemPrice = texto.substring(1,2);
    itemPrice = parseInt(itemPrice);
    if ($(this).css('display') != 'none'){
      sumPrices = sumPrices + itemPrice;
    }
  });
  sumPrices = sumPrices + 10;
  $('.price strong').html("$" + sumPrices);
}
function init() {
  mass('sauce');
  mass('crust');

  toping('pepperonni');
  toping('mushrooms');
  toping('green-peppers');

  updatePrice();
}
$(document).ready(init);
