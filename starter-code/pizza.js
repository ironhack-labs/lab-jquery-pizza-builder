// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  function toogleIngredientsBtn(btnClassName, ingredientClass) {
    $(btnClassName).click(function() {
      $(this).toggleClass("active");
      $(ingredientClass).toggle();
    });
  }

  function toogleSauceCrustBtn(btnClassName, permanentClass, addedClass) {
    $(btnClassName).click(function() {
      $(this).toggleClass("active");
      $(permanentClass).toggleClass(addedClass);
    });
  }

  function setDefaultSauceCrust(permanentClass, addedClass) {
    $(permanentClass).removeClass(addedClass);
  }

  setDefaultSauceCrust(".sauce", "sauce-white");
  setDefaultSauceCrust(".crust", "crust-gluten-free");

  toogleIngredientsBtn(".btn-pepperonni", ".pep");
  toogleIngredientsBtn(".btn-mushrooms", ".mushroom");
  toogleIngredientsBtn(".btn-green-peppers", ".green-pepper");
  toogleSauceCrustBtn(".btn-sauce", ".sauce", "sauce-white");
  toogleSauceCrustBtn(".btn-crust", ".crust", "crust-gluten-free");


});
