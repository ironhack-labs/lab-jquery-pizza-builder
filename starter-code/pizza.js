// Write your Pizza Builder JavaScript in this file.

function togleBtn(butonName,className){
  $(butonName).on("click",function(){
    $(className).toggle();
  });
}

function activateClass(classDefault,classToOut){
  $(classDefault).toggleClass(classToOut);
}

function togleAllClass(butonName,classDefault,classToOut){
  $(butonName).on("click",function(){
    activateClass(classDefault,classToOut);
  });
}




$(document).ready(function() {
  var pepperoniBtn=".btn-pepperonni";
  var pepperoniClass=".pep";
  var mushroomBtn=".btn-mushrooms";
  var mushroomClass=".mushroom";
  var greenPepperBtn=".btn-green-peppers";
  var greenPepperClass=".green-pepper";
///////////////////////////////////////
  var sauceBtn=".btn-sauce";
  var sauceDefault=".sauce";
  var sauceClass="sauce-white";
  ////////////////////////
  var crustBtn=".btn-crust";
  var crustDefault=".crust";
  var crustClass="crust-gluten-free";

  activateClass(sauceDefault,sauceClass);//Resetea la salsa por defecto al ejectura
  activateClass(crustDefault,crustClass);//Resetea la Masa por defecto al ejectura

  togleBtn(pepperoniBtn,pepperoniClass);
  togleBtn(mushroomBtn,mushroomClass);
  togleBtn(greenPepperBtn,greenPepperClass);
  togleAllClass(sauceBtn,sauceDefault,sauceClass);
  togleAllClass(crustBtn,crustDefault,crustClass);





});
/*

$(".btn-sauce").on("click",function(){
  $(".sauce").toggleClass("sauce-white");
});



////////////////////////OLDS
$(".btn-green-peppers").on("click",function(){
  $(".green-pepper").toggle();
});
$(".btn-pepperonni").on("click",function(){
  $(".pep").toggle();
});

  $(".btn-mushrooms").on("click",function(){
    $(".mushroom").toggle();
  });




*/
