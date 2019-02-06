// Write your Pizza Builder JavaScript in this file.
function Pizza() {
  this.pepperonni = true;
  this.mushrooms = true;
  this.greenPeppers = true;
  this.sauce = true;
  this.crust = true;
  this.totalPrice = 0;

  this.toggleIngredient = function(ingredient){
    switch (ingredient) {
      case "pepperonni":
        this.toggleClasses(".pep",".btn-pepperonni", "hide", "pepperonni");
        this.pepperonni ? this.pepperonni = false : this.pepperonni = true ; 
        break;
      case "mushroom":
        this.toggleClasses(".mushroom",".btn-mushrooms", "hide", "mushrooms");
        this.mushrooms ? this.mushrooms = false : this.mushrooms = true ;
        break;
      case "peppers":
        this.toggleClasses(".green-pepper",".btn-green-peppers", "hide", "green");
        this.greenPeppers ? this.greenPeppers = false : this.greenPeppers = true ; 
        break;
      case "sauce":
        this.toggleClasses(".sauce",".btn-sauce", "sauce-white", "white");
        this.sauce ? this.sauce = false : this.sauce = true ; 
        break;
      case "crust":
        this.toggleClasses(".crust",".btn-crust", "crust-gluten-free", "gluten-free crust");
        this.crust ? this.crust = false : this.crust = true ; 
        break;
      default:
        break;
    }
    this.calculateTotalPrice();
  }
  this.toggleClasses = function(content, button, toggleClass, priceClass) {
    $(content).toggleClass(toggleClass);
    $(button).toggleClass("active");
    $(`li:contains("${priceClass}")`).toggleClass("hide");
  }
  this.calculateTotalPrice = function(){
    this.totalPrice = 10;
    if (this.pepperonni) this.totalPrice += 1;
    if (this.mushrooms) this.totalPrice += 1;
    if (this.greenPeppers) this.totalPrice += 1;
    if (this.sauce) this.totalPrice += 3;
    if (this.crust) this.totalPrice += 5;
    $("#total-price").text("$"+this.totalPrice);
  }
}
var myPizza = new Pizza();
  
$(document).ready(function(){
  myPizza.toggleIngredient("sauce");
  myPizza.toggleIngredient("crust");
  myPizza.calculateTotalPrice(); 
})

$(".btn-pepperonni").click(function(){
  myPizza.toggleIngredient("pepperonni");
})
$(".btn-mushrooms").click(function(){
  myPizza.toggleIngredient("mushroom");
})
$(".btn-green-peppers").click(function(){
  myPizza.toggleIngredient("peppers");
})
$(".btn-sauce").click(function(){
  myPizza.toggleIngredient("sauce");
})
$(".btn-crust").click(function(){
  myPizza.toggleIngredient("crust");
})