// Write your Pizza Builder JavaScript in this file.

$().ready(function() {
  //Dejamos la pizza vacia
  $(".pep").hide();
  $("li:contains('$1 pepperonni')").hide();

  $(".mushroom").hide();
  $("li:contains('$1 mush')").hide();

  $(".green-pepper").hide();
  $("li:contains('$1 green')").hide();

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $("button").removeClass("active");
  encendido()

  $("li:contains('$3')").attr("id","masa").hide();
  $("li:contains('$5')").attr("id","salsa").hide();
  $("strong").hide();

  /* Iteración 1 */

  // Peperoni

  $(".btn-pepperonni").click(function() {
    $(".pep").fadeToggle(10);
    $("li:contains('$1 pepperonni')").fadeToggle();
  });
  // Mushrooms
  $(".btn-mushrooms").click(function() {
    $(".mushroom").fadeToggle(10);
    $("li:contains('$1 mush')").fadeToggle(10);
  });
  //Peper
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").fadeToggle(10);
    $("li:contains('$1 green')").fadeToggle(10);
  });

  /* Iteración 2 */

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $("#masa").fadeToggle();
    
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $("#salsa").fadeToggle();
  });
});

function encendido(){
  $("button").click(function(){
    $(this).toggleClass("active");
  })
};

// base price $10, and the price for the pepperonni, mushrooms, and green pepper.