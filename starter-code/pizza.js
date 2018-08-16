// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {

  $(".btn-pepperonni").click(function () {
    total();
    $(".pep").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(1)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-pepperonni").toggleClass("active");
  })
  $(".btn-mushrooms").click(function () {
    total();
    $(".mushroom").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(2)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-mushrooms").toggleClass("active");
  })
  $(".btn-green-peppers").click(function () {
    total();
    $(".green-pepper").toggleClass("hide");
    // Coloco el precio o lo quito
    $(".panel-price li:nth-child(3)").toggleClass("hide");
    // Cambia activo-inactivo al boton
    $(".btn-green-peppers").toggleClass("active");
  })

  // Boton cambia para escoger la salsa
  $(".btn-sauce").click(function () {
    total()
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

  var totalPrice;

  function total() {
    //Extracion del texto html
    var pepPriceText = $(".panel-price li:nth-child(1)").text();
    var musPriceText = $(".panel-price li:nth-child(2)").text();
    var greenPriceText = $(".panel-price li:nth-child(3)").text();
    var saucePriceText = $(".panel-price li:nth-child(4)").text();
    var crustPriceText = $(".panel-price li:nth-child(5)").text();
    // Se convierte texto en numero
    var pepPrice = Number(pepPriceText.replace(/[^0-9.-]+/g, ""));
    // Si no aparece el ingrediente, este toma valor de 0
    if ($(".panel-price li:nth-child(1)").hasClass("hide")) pepPrice = 0;

    var musPrice = Number(musPriceText.replace(/[^0-9.-]+/g, ""));
    if ($(".panel-price li:nth-child(2)").hasClass("hide")) musPrice = 0;

    var greenPrice = Number(greenPriceText.replace(/[^0-9.-]+/g, ""));
    if ($(".panel-price li:nth-child(3)").hasClass("hide")) greenPrice = 0;

    var saucePrice = Number(saucePriceText.replace(/[^0-9.-]+/g, ""));
    var crustPrice = Number(crustPriceText.replace(/[^0-9.-]+/g, ""));

    // Calulo del precio total
    totalPrice = pepPrice + musPrice + greenPrice + saucePrice + crustPrice + 10;
    console.log(totalPrice)
     $("#totalPrice").text("$"+totalPrice);

  }
})