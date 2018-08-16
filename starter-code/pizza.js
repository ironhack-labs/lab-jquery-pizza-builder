// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {

  $(".btn-pepperonni").click(function () {
    $(".pep").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(1)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-pepperonni").toggleClass("active");
  })
  $(".btn-mushrooms").click(function () {
    $(".mushroom").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(2)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-mushrooms").toggleClass("active");
  })
  $(".btn-green-peppers").click(function () {
    $(".green-pepper").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(3)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-green-peppers").toggleClass("active");
  })

  // Boton cambia para escoger la salsa
  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    // Cambio el texto del boton 
    switch ($(".btn-sauce").text()) {
      case "Regular sauce":
        $(".btn-sauce").text("White sauce");
        // Coloco el una salsa u otra
        $(".panel-price li:nth-child(4)").text("$3 white sauce");
        break;
      case "White sauce":
        $(".btn-sauce").text("Regular sauce");
        $(".panel-price li:nth-child(4)").text("$3 regular sauce");
        break;
    }
  })

  // Boton cambia para escoger la orilla
  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    // Cambio el texto del boton 
    switch ($(".btn-crust").text()) {
      case "Crust":
        $(".btn-crust").text("Gluten-free crust");
        $(".panel-price li:nth-child(5)").text("$5 gluten-free crust");
        break;
      case "Gluten-free crust":
        $(".btn-crust").text("Crust");
        $(".panel-price li:nth-child(5)").text("$5 crust");
        break;
    }
  })

})