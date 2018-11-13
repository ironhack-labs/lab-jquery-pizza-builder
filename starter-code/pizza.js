// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  
  handleIngredient(".btn-pepperonni", ".pep", 0);
  handleIngredient(".btn-mushrooms", ".mushroom", 1);
  handleIngredient(".btn-green-peppers", ".green-pepper", 2);
  handleIngredient(".btn-sauce", ".sauce", 3, "sauce-white");
  handleIngredient(".btn-crust", ".crust", 4, "crust-gluten-free");
  
  initStatus();
  
  upDatePrice();
});

function handleIngredient(ingredientBtn,ingredientType, indexList, extra) {
  $(ingredientBtn).click(function() {
    
    $(this).toggleClass("active"); //change status "active" of button

    if (extra) { //if is the sauce or the crust...
      $(ingredientType).toggleClass(extra);
    } else { // if is pepperoni, mushrooms or green peppers...
      $(ingredientType).toggle();
    }

    if ($(this).hasClass("active")) { 
      $($(".price li")[indexList]).show(); //show the ingredient in the list
    } else {
      $($(".price li")[indexList]).hide(); //hide the ingredient
    }

    upDatePrice(); //call the function to update the price
  });
}

function initStatus() {
  //by default, the sauce-white and crust-gluten-flee are disabled
  $(".btn-sauce").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $($(".price li")[3]).hide();

  $(".btn-crust").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $($(".price li")[4]).hide();
}

function upDatePrice() {
  
  var totalPrice = 10; //minimum price
  var ingredientsList = $(".price li");
  for (var i = 0, l = ingredientsList.length; i < l; i++) {
    if ($(ingredientsList[i]).is(":visible")) { //if the ingredient is selected (= is visible)...
      totalPrice += parseInt($(ingredientsList[i]).text().replace("$",""));
    }
  }
  $("strong").text("$" + totalPrice);
}