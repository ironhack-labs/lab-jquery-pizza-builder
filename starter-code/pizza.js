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
  $(".pep").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 pepperonni')" ).slideToggle();
});
$( ".btn-mushrooms" ).click(function() {
  $(".mushroom").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 mushrooms')" ).slideToggle();
});
$( ".btn-green-peppers" ).click(function() {
  $(".green-pepper").slideToggle();
  $(this).toggleClass('active'); 
  $( "li:contains('$1 green peppers')" ).slideToggle();
});
//seleccionar la salsa blanca y la corteza sin gluten si se quiere.
$( ".btn-crust" ).click(function() {
  $(".crust").toggleClass('crust-gluten-free');
  $(this).toggleClass('active'); 
  $( "li:contains('$5 gluten-free crust')" ).slideToggle();
});
$( ".btn-sauce" ).click(function() {
  $(".sauce").toggleClass('sauce-white');
  $(this).toggleClass('active'); 
  $( "li:contains('$3 white sauce')" ).slideToggle();
});


$(document).ready(function() {
});
