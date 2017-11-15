// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  // Peperoni, mushrooms and green pepper toogle buttons and show ingredients in pizza
  function toogleIngredientsBtn(btnClassName, ingredientClass, priceSelector) {
    $(btnClassName).click(function() {
      $(this).toggleClass("active");
      $(ingredientClass).toggle();
      $(priceSelector).toggle();
    });
  }

  //Sauce and crust toggle buttons and show ingredients in pizza
  function toogleSauceCrustBtn(btnClassName, permanentClass, addedClass, priceSelector) {
    $(btnClassName).click(function() {
      $(this).toggleClass("active");
      $(permanentClass).toggleClass(addedClass);
      $(priceSelector).toggle();
    });
  }

  //Default values for sauce and crust
  function setDefaultSauceCrust(permanentClass, addedClass) {
    $(permanentClass).removeClass(addedClass);
  }

  function defaultHidePrices(selector) {
    $(selector).hide();
  }



  setDefaultSauceCrust(".sauce", "sauce-white");
  setDefaultSauceCrust(".crust", "crust-gluten-free");

  setDefaultSauceCrust(".btn-sauce", "active");
  setDefaultSauceCrust(".btn-crust", "active");

  defaultHidePrices("aside li:contains('white sauce')");
  defaultHidePrices("aside li:contains('gluten-free crust')");

  toogleIngredientsBtn(".btn-pepperonni", ".pep", "aside li:contains('pepperonni')");
  toogleIngredientsBtn(".btn-mushrooms", ".mushroom", "aside li:contains('mushrooms')");
  toogleIngredientsBtn(".btn-green-peppers", ".green-pepper", "aside li:contains('green peppers')");
  toogleSauceCrustBtn(".btn-sauce", ".sauce", "sauce-white", "aside li:contains('white sauce')");
  toogleSauceCrustBtn(".btn-crust", ".crust", "crust-gluten-free", "aside li:contains('gluten-free crust')");


});
