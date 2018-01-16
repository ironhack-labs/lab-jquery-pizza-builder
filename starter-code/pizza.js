// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var basePrice = 10;
  var pepperonni = false;
  var mushrooms = false;
  var greenPeppers = false;
  var sauce = false;
  var crust = false;

  $(".price li").hide();

  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");  
    $(".price li:first-child").toggle();
    $(".pep").toggle();
    if(!pepperonni) {
      basePrice++;
      pepperonni = true;
    } else {
      basePrice--;
      pepperonni = false;
    }
    updatePrice(basePrice);
  })
  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    $(".mushroom").toggle();
    if(!mushrooms) {
      basePrice++;
      mushrooms = true;
    } else {
      basePrice--;
      mushrooms = false;
    }
    updatePrice(basePrice);
  })
  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:nth-child(3)").toggle();
    if(!greenPeppers) {
      basePrice++;
      greenPeppers = true;
    } else {
      basePrice--;
      greenPeppers = false;
    }
    updatePrice(basePrice);
  })
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price li:nth-child(4)").toggle();
    if(!sauce) {
      basePrice += 3;
      sauce = true;
    } else {
      basePrice -= 3;
      sauce = false;
    }
    updatePrice(basePrice);
  })
  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:last-child").toggle();    
    if(!crust) {
      basePrice += 5;
      crust = true;
    } else {
      basePrice -= 5;
      crust = false;
    }
    updatePrice(basePrice);
  })
  
  function updatePrice(newPrice){
    $(".price strong").html("$" + newPrice);
  }

  updatePrice(basePrice);
})