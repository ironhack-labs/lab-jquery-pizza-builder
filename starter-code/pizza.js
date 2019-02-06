// Write your Pizza Builder JavaScript in this file.
function Pizza() {
  this.pepperonni = true;
  this.mushrooms = true;
  this.greenPeppers = true;
  this.sauce = true;
  this.crust = true;

  this.toggleIngredient = function(ingredient){
    switch (ingredient) {
      case "pep":
        $(".pep").toggleClass("hide");
        $(".btn-pepperonni").toggleClass("active");
        (this.pepperonni === true) ? this.pepperonni = false : this.pepperonni = true ; 
        $("li:contains('pepperonni')").toggleClass("hide");
        break;
      case "mus":
        $(".mushroom").toggleClass("hide");
        $(".btn-mushrooms").toggleClass("active");
        (this.mushrooms === true) ? this.mushrooms = false : this.mushrooms = true ;
        $("li:contains('mushrooms')").toggleClass("hide");
        break;
      case "grp":
        $(".green-pepper").toggleClass("hide");
        $(".btn-green-peppers").toggleClass("active");
        (this.greenPeppers === true) ? this.greenPeppers = false : this.greenPeppers = true ; 
        $("li:contains('green')").toggleClass("hide");
        break;
      case "sau":
        $(".sauce").toggleClass("hide");
        $(".btn-sauce").toggleClass("active");
        (this.sauce === true) ? this.sauce = false : this.sauce = true ; 
        $("li:contains('white')").toggleClass("hide");
        break;
      case "cru":
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        (this.crust === true) ? this.crust = false : this.crust = true ; 
        $("li:contains('gluten-free crust')").toggleClass("hide");
        break;
      default:
        break;
    }
    this.calculateTotalPrice();
  }
  this.calculateTotalPrice = function(){
    var totalPrice = 10;
    if (this.pepperonni) totalPrice += 1;
    if (this.mushrooms) totalPrice += 1;
    if (this.greenPeppers) totalPrice += 1;
    if (this.sauce) totalPrice += 3;
    if (this.crust) totalPrice += 5;
    $("#total-price").text("$"+totalPrice);
  }
}
var myPizza = new Pizza();
  
$(document).ready(function(){
  myPizza.toggleIngredient("pep");
  myPizza.toggleIngredient("mus");
  myPizza.calculateTotalPrice();
})

$(".btn-pepperonni").click(function(){
  myPizza.toggleIngredient("pep");
})
$(".btn-mushrooms").click(function(){
  myPizza.toggleIngredient("mus");
})
$(".btn-green-peppers").click(function(){
  myPizza.toggleIngredient("grp");
})
$(".btn-sauce").click(function(){
  myPizza.toggleIngredient("sau");
})
$(".btn-crust").click(function(){
  myPizza.toggleIngredient("cru");
})

/*
$(document).ready(function(){
  $(".btn-pepperonni").removeClass("active");
  $(".pep").addClass("hide");
  $(".btn-mushrooms").removeClass("active");
  $(".mushroom").addClass("hide");
  $(".btn-green-peppers").removeClass("active");
  $(".green-pepper").addClass("hide");

})

$(".btn-pepperonni").click(function(){
  $(".pep").toggleClass("hide");
  $(".btn-pepperonni").toggleClass("active");
})
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggleClass("hide");
  $(".btn-mushrooms").toggleClass("active");
})
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggleClass("hide");
  $(".btn-green-peppers").toggleClass("active");
})
$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("hide");
  $(".btn-sauce").toggleClass("active");
})
$(".btn-crust").click(function(){
  $(".crust").toggleClass("hide");
  $(".btn-crust").toggleClass("active");
})
*/