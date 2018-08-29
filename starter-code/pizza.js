// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  var total = 10;

  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".btn").removeClass("active");
  $(".list li").hide();

  // el uso de los botones que al click haga que aparezca o no los ingredientes;
  $(".btn.btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".peppe").toggle();
    $(".pep").toggle();
    total += 1;
    $("strong").text("$" + total);
  });

  $(".btn.btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    $(".musho").toggle();
    $(".mushroom").toggle();
    total += 1;
    $("strong").text("$" + total);
  });

  $(".btn.btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".greenP").toggle();
    $(".green-pepper").toggle();
    total += 1;
    $("strong").text("$" + total);
  });

  // El boton de la salsa con el click hace que se ponga o no

  $(".sauce").removeClass("sauce-white");

  $(".btn.btn-sauce").click(function() {
    $(".white").toggle();
    $(".sauce").addClass("sauce-white");
    total += 3;
    $("strong").text("$" + total);
  });

  //el botón ahora es de la masa con /sin gluten
  $(".crust").removeClass("crust-gluten-free");

  $(".btn.btn-crust").click(function() {
    $(".free").toggle();
    $(".crust").addClass("crust-gluten-free");
    total += 5;
    console.log(total);
    $("strong").text("$" + total);
  });
});
