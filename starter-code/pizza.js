// Write your Pizza Builder JavaScript in this file.
function hideAndShowOrAdd(button, ingredient, boolValue, extraIngredient) {
  $(button).click(function() {
    if (extraIngredient) {
      if (!boolValue) {
        $(ingredient).addClass(extraIngredient);
        $(this).addClass('active');
      } else {
        $(ingredient).removeClass(extraIngredient);
        $(this).removeClass('active');
      }
    } else {
      if (boolValue) {
        $(ingredient).hide('slow');
        $(this).removeClass('active');
      } else {
        $(ingredient).show('slow');
        $(this).addClass('active');
      }
    }
    addAndRemoveIngredientsFromList(ingredient, boolValue);
    boolValue = !boolValue;
  });
}

function addAndRemoveIngredientsFromList(ingredient, boolValue) {
  liPosition = 0;
  switch (ingredient) {
    case ".green-pepper":
      liPosition = 1;
      break;
    case ".mushroom":
      liPosition = 2;
      break;
    case ".pep":
      liPosition = 3;
      break;
    case ".sauce":
      liPosition = 4;
      break;
    case ".crust":
      liPosition = 5;
      break;
    default:
      break;
  }
  (boolValue) ? $(".panel-price-ul li:nth-child(" + liPosition + ")").hide('fast'): $(".panel-price-ul li:nth-child(" + liPosition + ")").show('fast');
}
$(function() {
  //Gluten Free and White Sauce doesn't show at the beggining
  $(".btn-crust").removeClass('active');
  $(".btn-sauce").removeClass('active');
  $(".panel-price-ul li:nth-child(4)").hide('fast');
  $(".panel-price-ul li:nth-child(5)").hide('fast');
  //We add the listeners to the buttons
  hideAndShowOrAdd('.btn-green-peppers', '.green-pepper', true);
  hideAndShowOrAdd('.btn-mushrooms', '.mushroom', true);
  hideAndShowOrAdd('.btn-pepperonni', '.pep', true);
  hideAndShowOrAdd('.btn-crust', '.crust', false, 'crust-gluten-free');
  hideAndShowOrAdd('.btn-sauce', '.sauce', false, 'sauce-white');






});
