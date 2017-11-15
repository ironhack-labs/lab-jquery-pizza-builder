// Write your Pizza Builder JavaScript in this file.
function hideAndShowOrAdd(button, ingredient, extraIngredient) {
  $(button).click(function() {
    if (extraIngredient) {
      if (!$(this).hasClass("active")) {
        $(ingredient).addClass(extraIngredient);
        $(this).addClass('active');
      } else {
        $(ingredient).removeClass(extraIngredient);
        $(this).removeClass('active');
      }
    } else {
      if ($(this).hasClass("active")) {
        $(ingredient).hide('slow');
        $(this).removeClass('active');
      } else {
        $(ingredient).show('slow');
        $(this).addClass('active');
      }
    }
    addAndRemoveIngredientsFromList(ingredient, $(this).hasClass("active"));
  });
}

function addAndRemoveIngredientsFromList(ingredient, boolValue) {
  liPosition = 0;
  unitPrice = 0;

  switch (ingredient) {
    case ".green-pepper":
      liPosition = 1;
      unitPrice = 1;
      break;
    case ".mushroom":
      liPosition = 2;
      unitPrice = 1;
      break;
    case ".pep":
      liPosition = 3;
      unitPrice = 1;
      break;
    case ".sauce":
      liPosition = 4;
      unitPrice = 3;
      break;
    case ".crust":
      liPosition = 5;
      unitPrice = 5;
      break;
    default:
      break;
  }
  textFromLi = $(".price strong").text();
  numberStrong = textFromLi[1]+textFromLi[2];
  if (boolValue) {
    $(".panel-price-ul li:nth-child(" + liPosition + ")").show('fast');
    numberStrong=parseInt(numberStrong)+unitPrice;
    $(".price strong").text("$"+numberStrong);
  } else {
    $(".panel-price-ul li:nth-child(" + liPosition + ")").hide('fast');
    numberStrong=parseInt(numberStrong)-unitPrice;
    $(".price strong").text("$"+numberStrong);
  }
}
$(function() {
  //Gluten Free and White Sauce doesn't show at the beggining
  $(".btn-crust").removeClass('active');
  $(".btn-sauce").removeClass('active');
  $(".panel-price-ul li:nth-child(4)").hide('fast');
  $(".panel-price-ul li:nth-child(5)").hide('fast');

  $(".price strong").text("$13");
  //We add the listeners to the buttons
  hideAndShowOrAdd('.btn-green-peppers', '.green-pepper');
  hideAndShowOrAdd('.btn-mushrooms', '.mushroom');
  hideAndShowOrAdd('.btn-pepperonni', '.pep');
  hideAndShowOrAdd('.btn-crust', '.crust', 'crust-gluten-free');
  hideAndShowOrAdd('.btn-sauce', '.sauce', 'sauce-white');






});
