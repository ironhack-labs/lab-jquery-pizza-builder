//Function for buttons for main ingredients

$(function(){
  changeIngredients(".btn-pepperonni", ".pep");
  changeIngredients(".btn-mushrooms", ".mushroom");
  changeIngredients(".btn-green-peppers", ".green-pepper");
  changeExtraIngredients(".btn-sauce", ".sauce", "sauce-white");
  changeExtraIngredients(".btn-crust", ".crust", "crust-gluten-free");

function changeIngredients(btnIngredient, htmlIngredient, ingredientPrice) {
  $(btnIngredient).click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")){
      $(htmlIngredient).css("display", "inline");
    }
    else {
      $(htmlIngredient).css("display", "none");
    }
    getTotalPrice(arrayIngredient, arrayIngredientPrices, arrayListIngredients);
  });
}
//Function for buttons for extras
function changeExtraIngredients(btnIngredient, htmlIngredient, cssIngredientClass ,ingredientPrice){
  $(btnIngredient).removeClass("active");
  $(htmlIngredient).removeClass(cssIngredientClass);
  $(btnIngredient).click(function(){
    $(this).toggleClass("active");
    $(htmlIngredient).toggleClass(cssIngredientClass);
  getTotalPrice(arrayIngredient, arrayIngredientPrices, arrayListIngredients);
  });
}

var arrayIngredient = [".btn-pepperonni", ".btn-mushrooms", ".btn-green-peppers", ".btn-sauce", ".btn-crust"];
var arrayIngredientPrices = [1, 1, 1, 3, 5];
var arrayListIngredients = ["li:contains('$1 pepperonni')", "li:contains('$1 mushrooms')", "li:contains('$1 green peppers')", "li:contains('$3 white sauce')", "li:contains('$5 gluten-free crust')"];

getTotalPrice(arrayIngredient, arrayIngredientPrices, arrayListIngredients);
function getTotalPrice (array1, array2, array3) {
    var totalPrice = 10;
    for(i=0; i<array1.length; i++) {
      if ($(array1[i]).hasClass("active")) {
        totalPrice += array2[i];
        $(array3[i]).css("display", "block");
      } else {
        $(array3[i]).css("display", "none");
      }
      $("strong:last-child").text('$'+totalPrice);
    }
}

});
