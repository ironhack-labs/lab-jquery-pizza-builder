// Write your Pizza Builder JavaScript in this file.


//Inital pizza starting ingredients
$('#pizza .crust-gluten-free').toggleClass('crust-gluten-free');
$('#pizza .sauce').toggleClass('sauce-white');
$('.btn-sauce').toggleClass('active');
$('.btn-crust').toggleClass('active');


//Get array of li, which we will edit to show prices for different pizza combinations
let liArray = $('.price li');

//Initial set pizza price with pepperoni, mushrooms, and peppers
let pizzaPrice = 13;
$('.price strong')[0].innerText = '$' + pizzaPrice;

const priceUpdate = (price) => {
  pizzaPrice += price;
  $('.price strong')[0].innerText = '$' + pizzaPrice;
}

//Keep gluten free crust and white sauce prices initially hidden
$(liArray[3]).hide();
$(liArray[4]).hide();

//Show/Hide pepperoni
$('.btn-pepperonni').click(() => {
  
  if($('#pizza .pep:hidden').length != 0){
    $('#pizza .pep:hidden').show();
    $(liArray[0]).show();
    $('.btn-pepperonni').toggleClass('active');
    priceUpdate(1);
  }
  else{
    $('#pizza .pep').hide('pep');
    $(liArray[0]).hide();
    $('.btn-pepperonni').toggleClass('active');
    priceUpdate(-1);
  }
});

//Show/hide mushrooms
$('.btn-mushrooms').click(() => {
  
  if($('#pizza .mushroom:hidden').length != 0){
    $('#pizza .mushroom:hidden').show();
    $(liArray[1]).show();
    $('.btn-mushrooms').toggleClass('active');
    priceUpdate(1);
  }
  else{
    $('#pizza .mushroom').hide('mushroom');
    $(liArray[1]).hide();
    $('.btn-mushrooms').toggleClass('active');
    priceUpdate(-1);
  }
});

//Show/hide green peppers
$('.btn-green-peppers').click(() => {
  
  if($('#pizza .green-pepper:hidden').length != 0){
    $('#pizza .green-pepper:hidden').show();
    $(liArray[2]).show();
    $('.btn-green-peppers').toggleClass('active');
    priceUpdate(1);
  }
  else{
    $('#pizza .green-pepper').hide('green-pepper');
    $(liArray[2]).hide();
    $('.btn-green-peppers').toggleClass('active');
    priceUpdate(-1);
  }
});

//Show/hide sauce types
$('.btn-sauce').click(() => {
  $('#pizza .sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  if($(liArray[3]).is(':hidden')){
    $(liArray[3]).show();
    priceUpdate(3);
  }
  else{
    $(liArray[3]).hide();
    priceUpdate(-3);
  }
  
});

//Show/hide crust types
$('.btn-crust').click(() => {
  $('#pizza .crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  if($(liArray[4]).is(':hidden')){
    $(liArray[4]).show();
    priceUpdate(5);
  }
  else{
    $(liArray[4]).hide();
    priceUpdate(-5);
  }
});