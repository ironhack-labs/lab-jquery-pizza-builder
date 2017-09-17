// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  defaultValues();
});

var prices = {
  "peppperonni": 3,
  "mushroom": 2,
  "green-pepper": 1,
  "olives": 9,
  "sauce": 4,
  "crust": 15,
};

btnHandler(".btn-green-peppers", ".green-pepper");
btnHandler(".btn-crust", ".crust", "crust-gluten-free");
btnHandler(".btn-sauce", ".sauce", "sauce-white");
btnHandler(".btn-pepperonni", ".pepperonni");
btnHandler(".btn-mushrooms", ".mushroom");
btnHandler(".btn-olives", ".olives");

function defaultValues () {
  // Ingredients
  $(".crust").removeClass("crust-gluten-free");
  $(".crust").find(".sauce").removeClass("sauce-white");

  // Buttons state
  $(".btn-pepperonni, .btn-mushrooms, .btn-green-peppers, btn-olives").addClass("active");
  $(".btn-crust, .btn-sauce").removeClass("active");

  // Ingredients list
  $(".panel.price").find("ul").find("li:contains('sauce')").toggle();
  $(".panel.price").find("ul").find("li:contains('crust')").toggle();

  // Total price
  updatePrice();
}

function btnHandler(triggerClass, targetClass, toggleClass) {
  $(triggerClass).on("click", function() {
    toggleClass ? $(targetClass).toggleClass(toggleClass) : $(targetClass).toggle();
    changeButtonStyle($(this));
    updateIngredientsList(targetClass);
    updatePrice();
  });
}

function changeButtonStyle(button) {
  $(button).toggleClass("active");
}

function updateIngredientsList(ingredient) {
  ingredient = ingredient.replace(".", "").split("-");
  var element = $(".panel.price").find("ul").find("li:contains('" + ingredient[0] + "')");
  element.toggle();
}

function updatePrice() {
  var prices      = $(".panel.price");
  var base        = $(prices).find("b:first");
  var total       = $(prices).find("strong:last");
  var ingredients = $(prices).find("ul").find("li:visible");
  var totalPrice  = getPrice(base);

  $.each(ingredients, function(index, ingredient){
    totalPrice += getPrice(ingredient);
  });

  $(total).html("$" + totalPrice);
}

function getPrice(ingredient) {
  price = $(ingredient).html().split(" ")[0];
  return parseInt(price.replace("$", ""));
}
