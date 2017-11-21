// Write your Pizza Builder JavaScript in this file.
// var list = [
//   {ingredient: "pizza", price:13},
//   {ingredient: "pepperoni", price:13},
//   {ingredient: "mushrooms", price:13},
//   {ingredient: "greenPeppers", price:13},
//   {ingredient: "whiteSauce", price:3},
//   {ingredient: "glutenFree", price:5}
// ];

var list = {
 chessePizza: 10,
 mushroom: 1,
 pepperonni: 1,
 greenPeppers: 1,
 sauceWhite: 3,
 crustGlutenFree: 5,
};

var cart = [
 "chessePizza",
 "mushroom",
 "pepperonni",
 "greenPeppers",
 "sauceWhite",
 "crustGlutenFree"
];

function calculateTotalPrice() {
  var total = 0;
  cart.forEach(function(ingredient){
    total += list[ingredient];
  });
  return total;
}

function addIngredient(food) {
  cart.push(food);
  console.log(cart);
}

function removeIngredient(food) {
  var positionIngredient = detectIngredient(food);
  cart.splice(positionIngredient, 1);
  console.log(cart);
}

function detectIngredient(food) {
  return cart.indexOf(food);
}


$(document).ready(function() {

  $(".btn-pepperonni").click(function(){
      $(".pep").toggleClass("visibility");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(1)").toggle();
      if($(this).hasClass("active")){
        addIngredient("pepperonni");
      } else {
        removeIngredient("pepperonni");
      }
      var totalPrice = calculateTotalPrice();
        $("strong").html(totalPrice);
  });

  $(".btn-mushrooms").click(function(){
      $(".mushroom").toggleClass("visibility");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(2)").toggle();
      if($(this).hasClass("active")){
        addIngredient("mushroom");
      } else {
        removeIngredient("mushroom");
      }
      var totalPrice = calculateTotalPrice();
        $("strong").html(totalPrice);
  });

  $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggleClass("visibility");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(3)").toggle();
      if($(this).hasClass("active")){
        addIngredient("greenPeppers");
      } else {
        removeIngredient("greenPeppers");
      }
      var totalPrice = calculateTotalPrice();
        $("strong").html(totalPrice);
  });

  $(".btn-sauce").click(function(){
      $(".sauce").toggleClass("visibility");
      // $(".sauce").toggleClass("crush-gluten-free");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(4)").toggle();
      if($(this).hasClass("active")){
        addIngredient("sauceWhite");
      } else {
        removeIngredient("sauceWhite");
      }
      var totalPrice = calculateTotalPrice();
        $("strong").html(totalPrice);
  });

  $(".btn-crust").click(function(){
      $(".crust-gluten-free").toggleClass("visibility");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(5)").toggle();
      if($(this).hasClass("active")){
        addIngredient("crustGlutenFree");
      } else {
        removeIngredient("crustGlutenFree");
      }
      var totalPrice = calculateTotalPrice();
        $("strong").html(totalPrice);
  });



});
