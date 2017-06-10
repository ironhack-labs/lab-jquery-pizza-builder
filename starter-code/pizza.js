$(document).ready(function() {

  var totalPrice = 18;

  toggle_pepperoni = "on";

  $(".btn-pepperonni").click(function() {
    $(".pep").toggleClass("hidden");
    $(".btn-pepperonni").toggleClass("active");
    $(".pepperoniprice").toggleClass("hidden");
    if (toggle_pepperoni === "on") {
      toggle_pepperoni = "off";
      totalPrice -= 1;
    } else {
      toggle_pepperoni = "on";
      totalPrice += 1;
    }
  });

  toggle_mushrooms = "on";

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggleClass("hidden");
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroomprice").toggleClass("hidden");
    if (toggle_mushrooms === "on") {
      toggle_mushrooms = "off";
      totalPrice -= 1;
    } else {
      toggle_mushrooms = "on";
      totalPrice += 1;
    }
  });

toggle_greenpeppers = "on";

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggleClass("hidden");
    $(".btn-green-peppers").toggleClass("active");
    $(".greenpeppersprice").toggleClass("hidden");
    if (toggle_greenpeppers === "on") {
      toggle_greenpeppers = "off";
      totalPrice -= 1;
    } else {
      toggle_greenpeppers = "on";
      totalPrice += 1;
    }
  });

  toggle_sauce = "off";

  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".sauceprice").toggleClass("visible");
    if (toggle_sauce === "off") {
      toggle_sauce = "on";
      totalPrice += 3;
    } else {
      toggle_sauce = "off";
      totalPrice -= 3;
    }
  });

  toggle_crust = "on";

  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".crustprice").toggleClass("hidden");
    if (toggle_crust === "off") {
      toggle_crust = "on";
      totalPrice += 3;
    } else {
      toggle_crust = "off";
      totalPrice -= 3;
    }
  });

  $(".active").click(function (){
    $("#totalprice").html(totalPrice);
  });


});
