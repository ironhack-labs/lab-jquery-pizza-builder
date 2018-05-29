// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    // Initialize the pizza
    initPizza();
    
    // Set buttons click events
    $('.btn-pepperonni').click(function () { toggleIngredient('pepperoni'); });
    $('.btn-mushrooms').click(function () { toggleIngredient('mushrooms'); });
    $('.btn-green-peppers').click(function () { toggleIngredient('peppers'); });
    $('.btn-crust').click(function () { toggleIngredient('crust'); });
    $('.btn-sauce').click(function(){ toggleIngredient('sauce'); });
    $('.btn').click(function () {
      $(this).toggleClass('active');
      updatePrice();
    });
  });
  
  function initPizza() {  
    toggleIngredient('crust')
    setSauce('regular');
    updatePrice();
  
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');
  }
  
  function toggleIngredient(ingredient) {
    switch (ingredient) {
      case 'pepperonni':
        $('.pep').toggle();
        $('.price li:contains("pepperonni")').toggle();
        break;
      case 'mushrooms':
        $('.mushroom').toggle();
        $('.price li:contains("mushrooms")').toggle();
        break;
      case 'peppers':
        $('.green-pepper').toggle();
        $('.price li:contains("peppers")').toggle();
        break;
      case 'crust':
        $('.crust').toggleClass('crust-gluten-free');        
        $('.price li:contains("$5 gluten-free crust")').toggle();
        break;
      case 'sauce':
        setSauce($('.sauce').hasClass('sauce-white'));
        break;
      default:
        break;
    }
  }
  
  function setSauce(hasWhiteSauce) {
    switch (hasWhiteSauce) {
      case true:
        $('.sauce').removeClass('sauce-white');
        $('.sauce').addClass('regular-sauce');        
        $('.price li:contains("$3 white sauce")').hide();
        break;      
      case false:
        $('.sauce').removeClass('regular-white');
        $('.sauce').addClass('sauce-white');        
        $('.price li:contains("$3 white sauce")').show();
        break;    
      default:
        break;
    }
  }
  
  function updatePrice(){
    function getPriceFromString(priceString){
      return Number(priceString.split(' ')[0].slice(1));
    }
  
    var sum =  Number(getPriceFromString ($('.price b').text()));  
    var hijos = $('.price ul').children(':visible');  
  
    for (var i = 0; i < hijos.length; i++) {
      sum += getPriceFromString(hijos[i].innerText);
    }
  
    $('.price strong').text('$' + sum);
  }