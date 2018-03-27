// Write your Pizza Builder JavaScript in this file.

$().ready(function() {
  //Dejamos la pizza vacia
  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $("button").removeClass("active");

  encendido()
  
  /* Iteración 1 */

  // Peperoni

  $(".btn-pepperonni").click(function() {
    $(".pep").fadeToggle(10);
  });
  // Mushrooms
  $(".btn-mushrooms").click(function() {
    $(".mushroom").fadeToggle(10);
  });
  //Peper
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").fadeToggle(10);
  });

  /* Iteración 2 */

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
  });
});

function encendido(){
  $("button").click(function(){
    $(this).toggleClass("active");
  })
};