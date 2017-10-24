// Write your Pizza Builder JavaScript in this file.
function init() {
  //Iteration 1: Add and remove toppings
  // There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the JavaScript necessary for those three buttons to add and remove pepperonni, mushrooms and green peppers from the pizza. Don't worry about updating the price. We will do it later.
  var pepperonnis = $('.pep');
  var peppers = $('.green-pepper');
  var mushrooms = $('.mushroom');
  $('.green-pepper, .mushroom, .pep').css('display', 'none');
  $('.btn-pepperonni').click(function (){
    pepperonnis.css('display', 'block');
  });
  $('.btn-mushrooms').click(function (){
    mushrooms.css('display', 'block');
  });
  $('.btn-green-peppers').click(function (){
    peppers.css('display', 'block');
  });
}

$(document).ready(init);
