// Write your Pizza Builder JavaScript in this file.


$(document).ready(function() {

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".pricePep").toggle();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".priceMush").toggle();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".priceGreen").toggle();
  });

  //changing the default values;
  $(".sauce").toggleClass("sauce-white");
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".priceWhiteSauce").toggle();
  $(".priceNo").toggle();

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".priceWhiteSauce").toggle();
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".priceNo").toggle();
  });

  $(".btn-price").click(function() {
    calculatePrice();
  });

function calculatePrice() {
  var price = 21;
  if ($(".btn-crust").hasClass("active") === false) {
    price = price - 5;
    console.log("Hello" + price);
  }
  if ($(".btn-sauce").hasClass("active") === false) {
    price = price - 3;
    console.log("btn sce" + $(".btn-sauce").hasClass("active"))
  }
  if ($(".btn-green-peppers").hasClass("active") === false) {
    price = price - 1;
  }
  if ($(".btn-mushrooms").hasClass("active") === false) {
    price = price - 1;
  }
  if ($(".btn-pepperonni").hasClass("active") === false) {
    price = price - 1;
  }
  document.getElementById("price").innerHTML = "$" + price;
}
});
