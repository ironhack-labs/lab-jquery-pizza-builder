// Write your Pizza Builder JavaScript in this file.
var pepperoniBool   = true;
var mushroomBool    = true;
var greenPepperBool = true;
var whiteSauceBool   = false;
var glutenCrustBool = false;
var price           = 13;

$(document).ready(function() {
  $(".btn-pepperonni").on("click", function(){
    $(".pep").toggleClass("shown");
    $(".btn-pepperonni").toggleClass("active");
    $("li:contains('$1 pepperonni')").toggleClass("shown");
    pepperoniBool = !pepperoniBool;
    updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whiteSauceBool, glutenCrustBool);
  })

  $(".btn-mushrooms").on("click", function(){
    $(".mushroom").toggleClass("shown");
    $(".btn-mushrooms").toggleClass("active");
    $("li:contains('$1 mushrooms')").toggleClass("shown");
    mushroomBool = !mushroomBool;
    updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whiteSauceBool, glutenCrustBool);
  })

  $(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggleClass("shown");
    $(".btn-green-peppers").toggleClass("active");
    $("li:contains('$1 green peppers')").toggleClass("shown");
    greenPepperBool = !greenPepperBool;
    updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whiteSauceBool, glutenCrustBool);
  })

  $(".btn-sauce").on("click", function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("li:contains('$3 white sauce')").toggleClass("shown");
    whiteSauceBool = !whiteSauceBool;
    updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whiteSauceBool, glutenCrustBool);
  })

  $(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("li:contains('$5 gluten-free crust')").toggleClass("shown");
    glutenCrustBool = !glutenCrustBool;
    updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whiteSauceBool, glutenCrustBool);
  })

  function updatePrice(pepperoniBool, mushroomBool, greenPepperBool, whitSauceBool, glutenCrustBool) {
    var price = 10;
    console.log(pepperoniBool, mushroomBool, greenPepperBool, whitSauceBool, glutenCrustBool)
    if (pepperoniBool === true){
      price++;
    }
    if (mushroomBool === true){
      price++;
    }
    if (greenPepperBool === true){
      price++;
    }
    if (whiteSauceBool === true){
      price += 3;
    }
    if (glutenCrustBool === true){
      price += 5;
    }
    console.log(price);
    $(".total-price").replaceWith('<strong class="total-price">$' + price + '</strong>');
  }
});