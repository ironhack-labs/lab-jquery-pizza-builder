// Write your Pizza Builder JavaScript in this file.

//Boton Pepperonni

$(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");

    if ($(".pep").is(":visible")) {
      $(".pep").hide(1000);
      $("li:contains($1 pepperonni)").hide(1000);
      totalP ("resta", 1);
    } 
    else {
      $(".pep").show(1000);
      $("li:contains($1 pepperonni)").show(1000);
      totalP ("suma", 1);
    };
});

//Boton mushroom

$(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");

    if ($(".mushroom").is(":visible")) {
      $(".mushroom").hide(1000);
      $("li:contains($1 mushrooms)").hide(1000);
      totalP ("resta", 1);
    } 
    else {
      $(".mushroom").show(1000);
      $("li:contains($1 mushrooms)").show(1000);
      totalP ("suma", 1);
    }
});

//Boton Green Peppers

$(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");

    if ($(".green-pepper").is(":visible")) {
      $(".green-pepper").hide(1000);
      $("li:contains($1 green peppers)").hide(1000);
      totalP ("resta", 1);
    } 
    else {
      $(".green-pepper").show(1000);
      $("li:contains($1 green peppers)").show(1000);
      totalP ("suma", 1);
    }
});

//Boton white-sauce

$(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");

    if ($(".btn-sauce").hasClass("active")) {
      $("li:contains($3 white sauce)").show(1000);
      totalP ("suma", 3);
    } 
    else {
      $("li:contains($3 white sauce)").hide(1000);
      totalP ("resta", 3);
    }
  });

  //Boton gluten-free crust

  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");

    if ($(".btn-crust").hasClass("active")) {
      $("li:contains($5 gluten-free crust)").show(1000);
      totalP ("suma", 5);
    } 
    else {
      $("li:contains($5 gluten-free crust)").hide(1000);
      totalP ("resta", 5);
    }
  });

  //Valores por defecto
  
  var total = 13;
$(document).ready(function() {

    $(".sauce").toggleClass("sauce-white");
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-sauce").toggleClass("active");
    $(".btn-crust").toggleClass("active");
    $("li:contains($3 white sauce)").hide();
    $("li:contains($5 gluten-free crust)").hide();
    $("strong").text(total);
  });

  // Calcular precios

  function totalP (operation, price) {

    if (operation == "suma") {
      total += price;
    } 
    else{
      total -= price;
    }
    $("strong").text(total);
};