//Eliminar todos los ingredientes desde el inicio
  $(".pep").hide(); 
  $(".mushroom").hide(); 
  $(".green-pepper").hide();  
  //Eliminar las clases activas de los botones
  $(".btn").removeClass('active'); 
//Agregar y quitar 
// la pimienta de
// los champiñones 
//los pimientos verdes
$( ".btn-pepperonni" ).click(function() {
  $(".pep").slideToggle();
  $(this).toggleClass('active'); 
});
$( ".btn-mushrooms" ).click(function() {
  $(".mushroom").slideToggle();
  $(this).toggleClass('active'); 
});
$( ".btn-green-peppers" ).click(function() {
  $(".green-pepper").slideToggle();
  $(this).toggleClass('active'); 
});
//seleccionar la salsa blanca y la corteza sin gluten si se quiere.
$( ".btn-crust" ).click(function() {
  $(".crust").toggleClass('crust-gluten-free');
  $(this).toggleClass('active'); 
});
$( ".btn-sauce" ).click(function() {
  $(".sauce").toggleClass('sauce-white');
  $(this).toggleClass('active'); 
});


$(document).ready(function() {
});
//Poner salsa y la corteza normales como predeterminada.
//Eliminando la clase crust-gluten-free de crust y  sauce-white de sauce
$(".crust").removeClass( 'crust-gluten-free');
$(".sauce").removeClass( 'sauce-white');

