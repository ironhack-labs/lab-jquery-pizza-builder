// Write your Pizza Builder JavaScript in this file.
function hideAndShowOrAdd(button, ingredient, boolValue, extraIngredient) {
  $(button).click(function() {
    // debugger;
      if(extraIngredient){
        if (!boolValue) {
          $(ingredient).addClass(extraIngredient);
          $(this).removeClass('active');
          // $(ingredient).toggleClass('green-pepper');
        } else {
          $(ingredient).removeClass(extraIngredient);
          $(this).addClass('active');
        }
      }else{
        if (boolValue) {
          $(ingredient).hide('slow');
          $(this).removeClass('active');
          // $(ingredient).toggleClass('green-pepper');
        } else {
          $(ingredient).show('slow');
          $(this).addClass('active');
        }
      }
      boolValue = !boolValue;
  });
}

$(function() {
  showPeppers = true;
  showMushrooms = true;
  showPepperonni = true;
  showGlutenFree = false;
  showSauceWhite = false;
  hideAndShowOrAdd('.btn-green-peppers', '.green-pepper', showPeppers);
  hideAndShowOrAdd('.btn-mushrooms', '.mushroom', showMushrooms);
  hideAndShowOrAdd('.btn-pepperonni', '.pep', showPepperonni);
  hideAndShowOrAdd('.btn-crust', '.crust', showGlutenFree, 'crust-gluten-free');
  hideAndShowOrAdd('.btn-sauce', '.sauce', showGlutenFree, 'sauce-white');
  // hideAndShowOrAdd('.btn-sauce', '.sauce-white', showSauceWhite);






});
