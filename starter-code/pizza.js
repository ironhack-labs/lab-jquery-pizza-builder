//Coger el precio total
var totalPrice = 21;
//Precio de la pizza base
var pizzaBase = 13;
//Eliminar todos los ingredientes desde el inicio
//$(".pep").hide(); 
//$(".mushroom").hide(); 
//$(".green-pepper").hide();  
//Eliminar las clases activas de los botones
$(".btn").removeClass('active'); 
//Poner salsa y la corteza normales como predeterminada.
//Eliminando la clase crust-gluten-free de crust y  sauce-white de sauce
$(".crust").removeClass( 'crust-gluten-free');
$(".sauce").removeClass( 'sauce-white');

//Precio por defecto:
// precio base de $ 10,
//Precio de los pepperonni, 1 
//Precio champiñones 1
//Precio pimiento verde 1
$( "li:contains('$3 white sauce')" ).hide();
$( "li:contains('$5 gluten-free crust')" ).hide();

//Agregar y quitar 
// la pimienta de
// los champiñones 
//los pimientos verdes
$( ".btn-pepperonni" ).click(function() {
  $('.btn-pepperonni').toggleClass('active');
  /* $(".pep").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 pepperonni')" ).slideToggle(); */

  
  if ($('.btn-pepperonni').hasClass('active')) {
    $(".pep").toggle();
    $('.btn-pepperonni').addClass('active'); 
    $( "li:contains('$1 pepperonni')" ).toggle();
    pizzaBase = pizzaBase - 1;
     //Pintar el resultado total de la pizza
     $(".panel>strong").text(pizzaBase);
    //console.log('if ' + pizzaBase);
  } else {$(".pep").toggle();
    $('.btn-pepperonni').removeClass('active'); 
    $( "li:contains('$1 pepperonni')" ).toggle();
    pizzaBase = pizzaBase + 1;
     //Pintar el resultado total de la pizza
     $(".panel>strong").text(pizzaBase);
    //console.log('else ' + pizzaBase);
  }
  
});
$( ".btn-mushrooms" ).click(function() {
  /* $(".mushroom").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 mushrooms')" ).slideToggle();
  var mushroomsPrice = 1; */
  
  $('.btn-mushrooms').toggleClass('active');
  if ($('.btn-mushrooms').hasClass('active')) {
    $(".mushroom").toggle();
    $('.btn-mushrooms').addClass('active'); 
    $( "li:contains('$1 mushrooms')" ).toggle();
    pizzaBase = pizzaBase - 1;
     //Pintar el resultado total de la pizza
     $(".panel>strong").text(pizzaBase);
    //console.log('if ' + pizzaBase);
  } else {$(".mushroom").toggle();
    $('.btn-mushrooms').removeClass('active'); 
    $( "li:contains('$1 mushrooms')" ).toggle();
    pizzaBase = pizzaBase + 1;
     //Pintar el resultado total de la pizza
     $(".panel>strong").text(pizzaBase);
    //console.log('else ' + pizzaBase);
  }
});
$( ".btn-green-peppers" ).click(function() {
  /* $(".green-pepper").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 green peppers')" ).slideToggle();
  var peppersPrice = 1; */
  $('.btn-green-peppers').toggleClass('active');
  if ($('.btn-green-peppers').hasClass('active')) {
    $(".green-pepper").toggle();
    $('.btn-green-peppers').addClass('active'); 
    $( "li:contains('$1 green peppers')" ).toggle();
    pizzaBase = pizzaBase - 1;
     //Pintar el resultado total de la pizza
     $(".panel>strong").text(pizzaBase);
    //console.log('if ' + pizzaBase);
  } else {$(".green-pepper").toggle();
    $('.btn-green-peppers').removeClass('active'); 
    $( "li:contains('$1 green peppers')" ).toggle();
    pizzaBase = pizzaBase + 1;
    //Pintar el resultado total de la pizza
    $(".panel>strong").text(pizzaBase);
    //console.log('else ' + pizzaBase);
  }
});
//seleccionar la salsa blanca y la corteza sin gluten si se quiere.
$( ".btn-crust" ).click(function() {
  $(".crust").toggleClass('crust-gluten-free');
  /* $(".crust").toggleClass('crust-gluten-free');
  $(this).toggleClass('active'); 
  $( "li:contains('$5 gluten-free crust')" ).slideToggle();
  var crustPrice = 5; */
  $('.btn-crust').toggleClass('active');
  if ($('.btn-crust').hasClass('active')) {
    $(".crust").addClass('crust-gluten-free');
    $('.btn-crust').addClass('active'); 
    $( "li:contains('$5 gluten-free crus')" ).toggle();
    pizzaBase = pizzaBase + 5;
    //Pintar el resultado total de la pizza
    $(".panel>strong").text(pizzaBase);
    //console.log('if ' + pizzaBase);
  } else {
    $(".crust-gluten-free").toggle();
    $(".crust").removeClass('crust-gluten-free');
    $('.btn-crust').removeClass('active'); 
    $( "li:contains('$5 gluten-free crus')" ).toggle();
    pizzaBase = pizzaBase - 5;
    //Pintar el resultado total de la pizza
    $(".panel>strong").text(pizzaBase);
    //console.log('else ' + pizzaBase);
  }


  
});
$( ".btn-sauce" ).click(function() {
  /* $(".sauce").toggleClass('sauce-white');
  $(this).toggleClass('active'); 
  $( "li:contains('$3 white sauce')" ).slideToggle();
  var saucePrice = 3; */
  $('.btn-sauce').toggleClass('active');
  if ($('.btn-sauce').hasClass('active')) {
    $(".sauce").addClass('sauce-white');
    $('.btn-sauce').addClass('active'); 
    $( "li:contains('$3 white sauce')" ).toggle();
    pizzaBase = pizzaBase + 3;
    //Pintar el resultado total de la pizza
    $(".panel>strong").text(pizzaBase);
    //console.log('if ' + pizzaBase);
  } else {
    $(".sauce").toggle();
    $(".sauce").removeClass('sauce-white');
    $('.btn-sauce').removeClass('active'); 
    $( "li:contains('$3 white sauce')" ).toggle();
    pizzaBase = pizzaBase - 3;
    //Pintar el resultado total de la pizza
    $(".panel>strong").text(pizzaBase);
    //console.log('else ' + pizzaBase);
  }
});


//Pintar el resultado total de la pizza
$(".panel>strong").text(pizzaBase);

console.log(pizzaBase);
$(document).ready(function() {
  //declarar las funciones que se usan (preguntar a los TAS como era)
});
