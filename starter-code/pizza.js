// Write your Pizza Builder JavaScript in this file.
// agregar funciones y logica del sitio cuando la pagina ya este cargada
$(document).ready(function() {
  var pizzaPrice = 13;
  function calcularPrecio(ingredientes) {
    $(".price strong").text("$" + pizzaPrice);
  }
  calcularPrecio();
  $(".btn-green-peppers").click(function() {
    $("section.green-pepper").toggleClass("hidden");
    $(".btn-green-peppers").toggleClass("active");
    $(".ing-pepper").toggleClass("hidden");
    if ($(".btn-green-peppers").hasClass("active")) {
      pizzaPrice += 1;
    } else {
      pizzaPrice -= 1;
    }
    calcularPrecio();
  });

  $(".btn-pepperonni").click(function() {
    $("section.pep").toggleClass("hidden");
    $(".btn-pepperonni").toggleClass("active");
    $(".ing-pep").toggleClass("hidden");
    if ($(".btn-pepperonni").hasClass("active")) {
      pizzaPrice += 1;
    } else {
      pizzaPrice -= 1;
    }
    calcularPrecio();
  });

  $(".btn-mushrooms").click(function() {
    $("section.mushroom").toggleClass("hidden");
    $(".btn-mushrooms").toggleClass("active");
    $(".ing-mushroom").toggleClass("hidden");
    if ($(".btn-mushrooms").hasClass("active")) {
      pizzaPrice += 1;
    } else {
      pizzaPrice -= 1;
    }
    calcularPrecio();
  });

  $(".btn-crust").click(function() {
    $("section.crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".ing-crust").toggleClass("hidden");
    if ($(".btn-crust").hasClass("active")) {
      pizzaPrice += 5;
    } else {
      pizzaPrice -= 5;
    }
    calcularPrecio();
  });

  $(".btn-sauce").click(function() {
    $("section.sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".ing-sauce").toggleClass("hidden");
    if ($(".btn-sauce").hasClass("active")) {
      pizzaPrice += 3;
    } else {
      pizzaPrice -= 3;
    }
    calcularPrecio();
  });
});
