// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  function toogleBtn(btnClassName, ingredientClass) {
    $(btnClassName).click(function() {
      $(this).toggleClass("active");
      $(ingredientClass).toggle();
    });
  }

  toogleBtn(".btn-pepperonni", ".pep");
  toogleBtn(".btn-mushrooms", ".mushroom");
  toogleBtn(".btn-green-peppers", ".green-pepper");

});
