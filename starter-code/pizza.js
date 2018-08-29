// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  var priceSauce = $(".price ul li:nth-child(4)").hide();
  var priceCrust = $(".price ul li:nth-child(5)").hide();

  

  $(".btn-green-peppers").click(function () {
    $(".btn-green-peppers").toggleClass("active");
    var pepper = $(".green-pepper");
    $(pepper).toggle();
  })

  $(".btn-mushrooms").click(function () {
    $(".btn-mushrooms").toggleClass("active");
    var mushroom = $(".mushroom");
    $(mushroom).toggle();
  })

  $(".btn-pepperonni").click(function () {
    $(".btn-pepperonni").toggleClass("active");
    var pepperonni = $(".pep");
    $(pepperonni).toggle();
  })


  $(".btn-crust").click(function () {
    $(priceCrust).toggle();
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  })

  
  $(".btn-sauce").click(function () {
    $(priceSauce).toggle();
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
  })

  // var pricePep = 1;
  // var priceMush = 1;
  // var priceGreen = 1;
  // var priceGluten = 0;
  // var priceSalsa = 0;

  // var priceTotal = 10 + pricePep + priceMush + priceGreen + priceGluten + priceSalsa;

  // $(".price strong").replaceWith(<strong>$ + priceTotal</strong>);


});