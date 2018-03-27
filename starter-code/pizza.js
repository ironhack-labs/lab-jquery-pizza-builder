// Write your Pizza Builder JavaScript in this file.

var removePizzaClass = function () {
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
}
$(window).on('load', removePizzaClass);
//Encontramos el elemento boton y los guardamos en distintas variables
var $pepperonni = $('.btn-pepperonni');
var $mushrooms = $('.btn-mushrooms');
var $greenPeppers = $('.btn-green-peppers');
var $sauce = $('.btn-sauce');
var $crust = $('.btn-crust');

//definimos que hacer cuando se clickea un boton
var handleClickEvent = function(event) {
  if (event.currentTarget.classList.contains("btn-pepperonni")) {
    $(".pep").toggle();
  }

  if (event.currentTarget.classList.contains("btn-mushrooms")) {
    $(".mushroom").toggle();
  }
  if (event.currentTarget.classList.contains("btn-green-peppers")) {
    $(".green-pepper").toggle();
  }
  if (event.currentTarget.classList.contains("btn-sauce")) {
    $(".crust").addClass('crust-gluten-free');
  }
  if (event.currentTarget.classList.contains("btn-crust")) {
    $(".sauce").addClass ('sauce-white');
  }
}


//agregamos los listeners a cada uno de los botones
$pepperonni.on('click', handleClickEvent);
$mushrooms.on("click", handleClickEvent);
$greenPeppers.on("click", handleClickEvent);
$sauce.on('click', handleClickEvent);
$crust.on('click', handleClickEvent);

