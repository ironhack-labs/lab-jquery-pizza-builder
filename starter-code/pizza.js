// Write your Pizza Builder JavaScript in this file.

//Agregar y quitar 
// la pimienta de
// los champiñones 
//los pimientos verdes
$( ".btn-pepperonni" ).click(function() {
  $(".pep").slideToggle();
});
$( ".btn-mushrooms" ).click(function() {
  $(".mushroom").slideToggle();
});
$( ".btn-green-peppers" ).click(function() {
  $(".green-pepper").slideToggle();
});

$( ".btn-crust" ).click(function() {
  $(".crust").toggleClass('crust-gluten-free');
});
$( ".btn-sauce" ).click(function() {
  $(".crust").toggleClass('sauce-white');
});


$(document).ready(function() {
});
//Poner salsa y la corteza normales como predeterminada.
//Eliminando la clase crust-gluten-free de crust y  sauce-white de sauce
$(".crust").removeClass( 'crust-gluten-free');
$(".sauce").removeClass( 'sauce-white');

//seleccionar la salsa blanca y la corteza sin gluten si se quiere.