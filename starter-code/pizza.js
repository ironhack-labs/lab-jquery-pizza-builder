// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".sauce.sauce-white").toggleClass("sauce-white");
  $("section.crust").toggleClass("crust-gluten-free");
  $("aside ul li:nth-child(4)").toggle();
  $("aside ul li:nth-child(5)").toggle();
  getPrice();
  

function getPrice() {
  let basePrice = 10;
  const ingredientsArray = [".btn-pepperonni", ".btn-mushrooms", ".btn-green-peppers", ".btn-sauce", ".btn-crust"];
  const ingredientPrices = [1,1,1,3,5];
    for (i=0,j=0; i<ingredientsArray.length; i++,j++){
      if ($(ingredientsArray[i]).hasClass("active")) {
        basePrice += ingredientPrices[j];
      }
    }
  $("strong").replaceWith("<strong>$"+basePrice+"</strong>");
  }

  $(".btn-pepperonni").on("click", function(event) {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("aside ul li:nth-child(1)").toggle();
    getPrice();
  });

  $(".btn-mushrooms").on("click", function(event) {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $("aside ul li:nth-child(2)").toggle();
    getPrice();
  });

  $(".btn-green-peppers").on("click", function(event) {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $("aside ul li:nth-child(3)").toggle();
    getPrice();
  });

  $(".btn-sauce").on("click", function(event) {
    $("section.sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("aside ul li:nth-child(4)").toggle();
    getPrice();
    // if ($(".btn-sauce").hasClass("active")) {
    //   maxPrice += 3; 
    // } else {maxPrice -=3;}
  });

  $(".btn-crust").on("click", function(event) {
    $("section.crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("aside ul li:nth-child(5)").toggle();
    getPrice();
    // if ($(".btn-crust").hasClass("active")) {
    //   maxPrice +=5;
    // } else {maxPrice -=5;}
  });
  
  });
// });
