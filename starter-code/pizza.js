// Write your Pizza Builder JavaScript in this file.

// SELECTION

  // FONCTION ADD / DELETE

function addDelete (ingredient){

  if (ingredient.hasClass('deleted')){
    ingredient.removeClass('deleted');
    ingredient.show();
  }
  else{
    ingredient.addClass('deleted');
    ingredient.hide();
  }

}

    // FONCTION INGREDIENT

  var pepperonni = $('.pep');
  var mushrooms = $('.mushroom');
  var greenPepper = $('.green-pepper');
  var sauce = $('.sauce');
  var crust = $('.crust');


function deletePep (){
  addDelete (pepperonni);
}

function deleteMush (){
  addDelete (mushrooms);
}

function deleteGreenP (){
  addDelete (greenPepper);
}

function deleteSauce (){

  $(".sauce").toggleClass('sauce-white');
  
}

function deleteCrust (){

  $(".crust").toggleClass('crust-gluten-free');

}

  // PRICE LIST

  var pricePep = $( ".price ul li:nth-child(1)" );
  var priceMush = $( ".price ul li:nth-child(2)" );
  var priceGreen = $( ".price ul li:nth-child(3)" );
  var priceSauce = $( ".price ul li:nth-child(4)" );
  var priceCrust = $( ".price ul li:nth-child(5)" );

  priceSauce.hide();
  priceCrust.hide();

  // ONCLICK


var totalPrice = 13;
$("strong").html("$ "+ totalPrice );

$(".btn-pepperonni").click( function () {
  deletePep ()
  $(".btn-pepperonni").toggleClass('active');
  pricePep.toggle();
  if ($(".btn-pepperonni").hasClass('active')){
    totalPrice += 1;
  }
  else{
    totalPrice -= 1;
  }
  $("strong").html("$ "+ totalPrice );
});

$(".btn-mushrooms").click( function () {
  deleteMush ()
  $(".btn-mushrooms").toggleClass('active');
  priceMush.toggle();
  if ($(".btn-mushrooms").hasClass('active')){
    totalPrice += 1;
  }
  else{
    totalPrice -= 1;
  }
  $("strong").html("$ "+ totalPrice );
});

$(".btn-green-peppers").click( function () {
  deleteGreenP ()
  $(".btn-green-peppers").toggleClass('active');
  priceGreen.toggle();
  if ($(".btn-green-peppers").hasClass('active')){
    totalPrice += 1;
  }
  else{
    totalPrice -= 1;
  }
  $("strong").html("$ "+ totalPrice );
});

$(".btn-sauce").click( function () {
  deleteSauce ()
  $(".btn-sauce").toggleClass('active');
  priceSauce.toggle();
  if ($(".btn-sauce").hasClass('active')){
    totalPrice -= 3;
  }
  else{
    totalPrice += 3;
  }
  $("strong").html("$ "+ totalPrice );
});

$(".btn-crust").click( function () {
  deleteCrust ()
  $(".btn-crust").toggleClass('active');
  priceCrust.toggle();
  if ($(".btn-crust").hasClass('active')){
    totalPrice -= 5;
  }
  else{
    totalPrice += 5;
  }
  $("strong").html("$ "+ totalPrice );
});

// Si il y a la classe active dans le bouton
// Ajouter ou enlever le prix du bon li au prix total
