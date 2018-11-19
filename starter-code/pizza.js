// Write your Pizza Builder JavaScript in this file.
$(function () { 

/*  
$( ".btn-pepperonni" ).click(function() {
  $(".pep").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 pepperonni')").toggle();
});

$( ".btn-mushrooms" ).click(function() {
  $(".mushroom").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 mushrooms')").toggle();
});

$( ".btn-green-peppers" ).click(function() {
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 green peppers')").toggle();
});

$(".btn-crust").toggleClass("active");
$(".crust").toggleClass("crust-gluten-free");
$("li:contains('$5 gluten-free crust')").hide();

$( ".btn-crust" ).click(function() {
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $("li:contains('$5 gluten-free crust')").toggle();
});

$(".btn-sauce").toggleClass("active");
$(".sauce").toggleClass("sauce-white");
$("li:contains('$3 white sauce')").hide();

$( ".btn-sauce" ).click(function() {
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $("li:contains('$3 white sauce')").toggle();
});
*/ // codigo inicial


$(".btn-sauce").toggleClass("active");
$(".sauce").toggleClass("sauce-white");
$("li:contains('$3 white sauce')").hide();

$(".btn-crust").toggleClass("active");
$(".crust").toggleClass("crust-gluten-free");
$("li:contains('$5 gluten-free crust')").hide();

// para empezar desactivamos el botón y ocultamos de la lista gluten free y sauce white

function ingredientActive (btn, classIngredient, licontains){
  $(btn).click(function() {
    $(classIngredient).toggle();
    $(btn).toggleClass("active");
    $(licontains).toggle();
  });
} 

// con esta funcion desactivamos el boton, eliminamos el ingrediente y lo quitamos de la lista


function ingredientNoActive (btn, classIngredient, classActive, licontains){
  $(btn).click(function() { 
    $(btn).toggleClass("active");
    $(classIngredient).toggleClass(classActive);
    $(licontains).toggle();
  });  
}

// con esta funcion activamos el boton, eliminamos el ingrediente y lo quitamos de la lista


ingredientActive(".btn-pepperonni", ".pep", "li:contains('$1 pepperonni')");
ingredientActive(".btn-mushrooms", ".mushroom", "li:contains('$1 mushrooms')");
ingredientActive(".btn-green-peppers", ".green-pepper", "li:contains('$1 green peppers')");
ingredientNoActive(".btn-crust", ".crust", "crust-gluten-free", "li:contains('$5 gluten-free crust')");
ingredientNoActive(".btn-sauce", ".sauce", "sauce-white", "li:contains('$3 white sauce')");

// llamamos a todas las funciones para cuando hagamos click en cada boton

$("strong").text("$13");

// establecemos el importe inicial de la pizza por defecto $13

function updatePrice(){
  var totalBill = 10;
  $(".btn").click(function() {
    $( ".panel.price li:visible" ).each(function() {
      var priceUnd = parseInt($(this).text().substr(1,1));
      totalBill += priceUnd;
      });
    $("strong").text("$" + totalBill);
    totalBill = 10;
    })
  }
  updatePrice();
})

// en esta función actualizamos el precio de la cuenta según se vayan seleccionando o no los ingredientes

