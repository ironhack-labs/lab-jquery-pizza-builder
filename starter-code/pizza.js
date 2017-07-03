// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.price li:contains("white sauce")').hide();
  $('.price li:contains("gluten-free crust")').hide();
  $('.btn-crust, .btn-sauce').removeClass('active');
  $('.price > strong').text('$13');

  $('.btn').on('click', function (){
    $(this).toggleClass('active');
  });

  var ingredients = {
    'pepperonni': {
      name: 'pepperonni',
      class: ".pep",
      btn: '.btn-pepperonni'
    },
    'mushroom': {
      name: 'mushrooms',
      class: ".mushroom",
      btn: '.btn-mushrooms'
    },
    'greenpepper': {
      name: 'green peppers',
      class: ".green-pepper",
      btn: '.btn-green-peppers'
    },
    'crust': {
      name: 'gluten-free crust',
      class: ".crust",
      toggledClass: 'crust-gluten-free',
      price: 5,
      btn: '.btn-crust'
    },
    'sauce': {
      name: 'white sauce',
      class: ".sauce",
      toggledClass: 'sauce-white',
      price: 3,
      btn: '.btn-sauce'
    }
  };

  $('.btn-pepperonni').on('click', function () {toggleIngredient(ingredients.pepperonni);});
  $('.btn-mushrooms').on('click', function () {toggleIngredient(ingredients.mushroom);});
  $('.btn-green-peppers').on('click', function () {toggleIngredient(ingredients.greenpepper);});
  $('.btn-crust').on('click', function () {toggleIngredient(ingredients.crust);});
  $('.btn-sauce').on('click', function () {toggleIngredient(ingredients.sauce);});

  function toggleIngredient(ing) {
    if (ing.hasOwnProperty('toggledClass')) {
      $(ing.class).toggleClass(ing.toggledClass);
    } else {
      $(ing.class).toggle();
    }
    $('.price li:contains(' + ing.name + ')').toggle();
    var price = ing.hasOwnProperty('price') ? ing.price : 1;
    if (!$(ing.btn).hasClass('active')) {
      price = -price;
    }
    calculateTotalPrice(price);
  }

  function calculateTotalPrice(priceModifier){
    var total = parseInt($('.price > strong').text().substring(1)) + priceModifier;
    $('.price > strong').text('$' + total);
  }
});
