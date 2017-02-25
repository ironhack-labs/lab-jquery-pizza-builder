// Write your Pizza Builder JavaScript in this file.
var totalPrice = Number($('#total-price').text().replace(/[^0-9\.]+/g,""));

var pepBoolean = true;
var mushroomBoolean = true;
var greenPepperBoolean = true;
var sauceBoolean = true;
var crustBoolean = true;

// console.log($('#total-price').text());
$('.btn-pepperoni').on('click', function(){
  $('.pep').toggle();
  $('.price li:first').toggle();
  if (pepBoolean === true){
    totalPrice = totalPrice - 1;
    $('#total-price').text('$' + totalPrice);
    pepBoolean = false;
  }
  else{
    totalPrice = totalPrice + 1;
    $('#total-price').text('$' + totalPrice);
    pepBoolean = true;
  }
});

$('.btn-mushrooms').on('click', function(){
  $('.mushroom').toggle();
  $('.price li:nth-child(2)').toggle();
  if (mushroomBoolean === true){
    totalPrice = totalPrice - 1;
    $('#total-price').text('$' + totalPrice);
    mushroomBoolean = false;
  }
  else{
    totalPrice = totalPrice + 1;
    $('#total-price').text('$' + totalPrice);
    mushroomBoolean = true;
  }
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
  $('.price li:nth-child(3)').toggle();
  if (greenPepperBoolean === true){
    totalPrice = totalPrice - 1;
    $('#total-price').text('$' + totalPrice);
    greenPepperBoolean = false;
  }
  else{
    totalPrice = totalPrice + 1;
    $('#total-price').text('$' + totalPrice);
    greenPepperBoolean = true;
  }
});

$('.btn-sauce').on('click', function(){
  $('.sauce').toggle();
  $('.price li:nth-child(4)').toggle();
  if (sauceBoolean === true){
    totalPrice = totalPrice - 3;
    $('#total-price').text('$' + totalPrice);
    sauceBoolean = false;
  }
  else{
    totalPrice = totalPrice + 3;
    $('#total-price').text('$' + totalPrice);
    sauceBoolean = true;
  }
});

$('.btn-crust').on('click', function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.price li:nth-child(5)').toggle();
  if (crustBoolean === true){
    totalPrice = totalPrice - 5;
    $('#total-price').text('$' + totalPrice);
    crustBoolean = false;
  }
  else{
    totalPrice = totalPrice + 5;
    $('#total-price').text('$' + totalPrice);
    crustBoolean = true;
  }
});
