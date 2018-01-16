// Write your Pizza Builder JavaScript in this file.

if ($(document).ready) {
  //Inicializacion
  $(".green-pepper").hide();
  $(".mushroom").hide();
  $(".pep").hide();
  $(".sauce-white").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-sauce").toggleClass("active");
  $(".btn-pepperonni").toggleClass("active");
  $(".btn-mushrooms").toggleClass("active");
  $(".btn-green-peppers").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".price li").hide();
  var finalPrice = "$10";
  $(".price strong").text(finalPrice);

  $(".btn-pepperonni").click(function(e) {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    if ($(".btn-pepperonni").hasClass("active")) {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) + 1);
      $(".price strong").text(finalPrice);
    } else {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) - 1);
      $(".price strong").text(finalPrice);
    }
  });
  $(".btn-mushrooms").click(function(e) {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    if ($(".btn-mushrooms").hasClass("active")) {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) + 1);
      $(".price strong").text(finalPrice);
    } else {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) - 1);
      $(".price strong").text(finalPrice);
    }
  });
  $(".btn-green-peppers").click(function(e) {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    if ($(".btn-green-peppers").hasClass("active")) {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) + 1);
      $(".price strong").text(finalPrice);
    } else {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) - 1);
      $(".price strong").text(finalPrice);
    }
  });
  $(".btn-sauce").click(function(e) {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    if ($(".btn-sauce").hasClass("active")) {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) + 3);
      $(".price strong").text(finalPrice);
    } else {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) - 3);
      $(".price strong").text(finalPrice);
    }
  });
  $(".btn-crust").click(function(e) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    if ($(".btn-crust").hasClass("active")) {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) + 5);
      $(".price strong").text(finalPrice);
    } else {
      finalPrice = "$" + (parseInt(finalPrice.split("$")[1]) - 5);
      $(".price strong").text(finalPrice);
    }
  });
}
