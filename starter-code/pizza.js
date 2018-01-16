// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("button").removeClass("active");

  $(".green-pepper").hide();
  $(".pep").hide();
  $(".mushroom").hide();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
});

var botonPeperoni = $(".btn-pepperonni");
$(botonPeperoni).click(function() {
  $(".btn-pepperonni").toggleClass("active");
  if ($(".pep").css("display") == "none") {
    $(".pep").show();
  } else {
    $(".pep").hide();
  }
});

var botonChampinones = $(".btn-mushrooms");
$(botonChampinones).click(function() {
  $(".btn-mushrooms").toggleClass("active");
  if ($(".mushroom").css("display") == "none") {
    $(".mushroom").show();
  } else {
    $(".mushroom").hide();
  }
});

var botonPimientos = $(".btn-green-peppers");
$(botonPimientos).click(function() {
  $(".btn-green-peppers").toggleClass("active");
  if ($(".green-pepper").css("display") == "none") {
    $(".green-pepper").show();
  } else {
    $(".green-pepper").hide();
  }
});
var botonSalsa = $(".btn-sauce");
$(botonSalsa).click(function() {
  $(".btn-sauce").toggleClass("active");
  if ($(".sauce-white").css("display") == "none") {
    $(".sauce-white").show();
  } else {
    $(".sauce-white").hide();
  }
});
var botonGluten = $(".btn-crust");
$(botonGluten).click(function() {
  $(".btn-crust").toggleClass("active");
  if ($(".crust-gluten-free").css("display") == "none") {
    $(".crust-gluten-free").show();
  } else {
    $(".crust-gluten-free").hide();
  }
});
