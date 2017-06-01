// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
var total = 13;
//Remove the white sauce and the gluten free from the default order.
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");

//Remove the active class from the button Sauce and Crust
$('.btn-sauce').removeClass("active");
$('.btn-crust').removeClass("active");
//Remove element that should not come y default in the default order.
$(".price li:nth-child(4)").toggle();
$(".price li:nth-child(5)").toggle();
//Update Correctly the total price
$(".price strong").html("$"+total);

//on Click function of the button Sauce
$('.btn-sauce').on("click", function(){
  $(".sauce").toggleClass("sauce-white");
  $('.btn-sauce').toggleClass("active");
  $(".price li:nth-child(4)").toggle();
  //Call to the function calculatePrice to update the price with the cost of the ingredient (first parameter).
  //The second parameter is the element that needs to be check if its activated or not to modify the price correctly.
  calculatePrice(3, ".price li:nth-child(4)");
});

//on Click function of the button Crust
$('.btn-crust').on("click", function(){
  $(".crust").toggleClass("crust-gluten-free");
  $('.btn-crust').toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    calculatePrice(5, ".price li:nth-child(5)");
});

//on Click function of the button Pepperoni
$('.btn-pepperonni').on("click", function(i){
  $(".pep").toggle();
  $('.btn-pepperonni').toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    calculatePrice(1, ".price li:nth-child(1)");
});

//on Click function of the button Mushrooms
$('.btn-mushrooms').on("click", function(i){
  $(".mushroom").toggle();
  $('.btn-mushrooms').toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    calculatePrice(1, ".price li:nth-child(2)");
});

//on Click function of the button Green Pepper
$('.btn-green-peppers').on("click", function(i){
  $(".green-pepper").toggle();
  $('.btn-green-peppers').toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    calculatePrice(1, ".price li:nth-child(3)");
});

//function to keep up to date the price of the pizza
function calculatePrice(updatePrice, onOff){
  if($(onOff).is(':visible')){
    total += updatePrice;
    $(".price strong").html("$"+ total);
  }
  else {
    total-=updatePrice;
    $(".price strong").html("$"+ total);
  }
}

});
