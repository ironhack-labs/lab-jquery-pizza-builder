// Write your Pizza Builder JavaScript in this file.

$(function(){

  function toggleIngredient (button, ingredient){
    button.toggleClass("active");
    ingredient.toggle();
  }
  
  //function removeingredient (ingredient){
  //
  //}
  //
  //function mushrooms (){
  //
  //}
  //function greenPeppers () {
  //
  //}
  //function pepperoni () {
  //
  //}
  
  var mush = $(".mushroom");
  var green = $(".green-pepper");
  var peppe = $(".pep");
  var mushClick = $(".btn-mushrooms")
  var greenClick = $(".btn-green-peppers")
  var peppeClick = $(".btn-pepperonni")
  
  mushClick.click(function() {
    toggleIngredient(mushClick, mush);
    
  });
  greenClick.click(function() {
    toggleIngredient(greenClick, green);
  });
  peppeClick.click(function(){
    toggleIngredient(peppeClick, peppe);
  });
  
  
  




})

