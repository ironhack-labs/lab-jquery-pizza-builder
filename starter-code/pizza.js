// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var basePrice = 10;

  var toppingPrices = {
    "pepperonni": 1,
    "mushrooms": 1,
    "green-peppers": 1,
    "white-sauce": 3,
    "gluten-free": 5
  }

  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".crust").toggleClass("crust-gluten-free");
  $(".sauce").toggleClass("sauce-white");
  $(".btn").toggleClass("active");
  $(".price li").hide();
  $(".price strong")[0].innerHTML = "$" + basePrice;

  $(".btn-pepperonni").click(function(){
      $(".pep").toggle(); 
      $ (this).toggleClass("active");
      $("li:contains('pepperonni')").toggle();
      if ($(this).hasClass("active")){
        addToBasePrice("pepperonni");
      } else {
        subtractFromBasePrice("pepperonni");
      }
  })

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $ (this).toggleClass("active");
    $("li:contains('mushrooms')").toggle();
    if ($(this).hasClass("active")){
      addToBasePrice("mushrooms");
    } else {
      subtractFromBasePrice("mushrooms");
    }   
  })

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $ (this).toggleClass("active"); 
    $("li:contains('green peppers')").toggle();
    if ($(this).hasClass("active")){
      addToBasePrice("green-peppers");
    } else {
      subtractFromBasePrice("green-peppers");
    }  
  })

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $ (this).toggleClass("active");
    $("li:contains('white sauce')").toggle();
    if ($(this).hasClass("active")){
      addToBasePrice("white-sauce");
    } else {
      subtractFromBasePrice("white-sauce");
    } 
  })

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $ (this).toggleClass("active");
    $("li:contains('gluten-free crust')").toggle();
    if ($(this).hasClass("active")){
      addToBasePrice("gluten-free");
    } else {
      subtractFromBasePrice("gluten-free");
    }  
  })

  function addToBasePrice(toppingArg){
    var currentTotal = ($(".price strong")[0].innerHTML).match(/\d+/g);
    $(".price strong")[0].innerHTML = "$" + (Number(currentTotal) + Number(toppingPrices[toppingArg]));
  }

  function subtractFromBasePrice(toppingArg){
    var currentTotal = ($(".price strong")[0].innerHTML).match(/\d+/g);
    $(".price strong")[0].innerHTML = "$" + (Number(currentTotal) - Number(toppingPrices[toppingArg]));
  }


});