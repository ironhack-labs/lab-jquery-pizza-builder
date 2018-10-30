// Write your Pizza Builder JavaScript in this file.

$(function(){

  function toggleIngredient (button, ingredient){
    button.toggleClass("active");
    ingredient.toggle();
  }
  function toggleSauces (button, sauce, putonoff){
    button.toggleClass("active");
    sauce.toggleClass(putonoff);
    list.toggle(priceSauce)
  }
  
  function listPrices (ingredient){
  
  }
  
  function mushrooms (){
  
  }
  function greenPeppers () {
  
  }
  function pepperoni () {
  
  }
  
  var mush = $(".mushroom");
  var green = $(".green-pepper");
  var peppe = $(".pep");
  var sauce = $(".sauce")
  var crust = $(".crust")
  var mushClick = $(".btn-mushrooms")
  var greenClick = $(".btn-green-peppers")
  var peppeClick = $(".btn-pepperonni")
  var sauceClick = $(".btn-sauce")
  var crustClick = $(".btn-crust")
  var list = $(".price li")
  console.log(list[3])

  
  sauce.removeClass("sauce-white");
  crust.removeClass("crust-gluten-free");
  sauceClick.removeClass("active");
  crustClick.removeClass("active");
  console.log(list[3])
  list[3].remove();
  list[4].remove();

  var priceMush = '<li>$1 pepperonni</li>';
  var priceGreen = '<li>$1 mushrooms</li>';
  var pricePeppe = '<li>$1 green peppers</li>';
  var priceSauce = '<li>$1 white sauce</li>';
  var priceCrust = '<li>$1 gluten-free crust</li>';

  
  mushClick.click(function() {
    toggleIngredient(mushClick, mush);
    
  });
  greenClick.click(function() {
    toggleIngredient(greenClick, green);
  });
  peppeClick.click(function(){
    toggleIngredient(peppeClick, peppe);
  });

  sauceClick.click(function(){
    toggleSauces(sauceClick,sauce,"sauce-white")
  })

  crustClick.click(function(){
    toggleSauces(crustClick,crust,"crust-gluten-free")
  })
  
  
  




})

