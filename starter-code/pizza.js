// Write your Pizza Builder JavaScript in this file.
function main() {
  resetPizza('.btn-crust', '.crust-gluten-free');
  // toggleIngredients('.btn-sauce', '.sauce-white');
}

$('.btn-crust').toggleClass('active');
$('section.crust').toggleClass('crust-gluten-free');

$('.btn-pepperonni').on('click', toggleIngredients('.btn-pepperonni', '.pep'));

$('.btn-mushrooms').on('click', toggleIngredients('.btn-mushrooms', '.mushroom'));

$('.btn-green-peppers').on('click', toggleIngredients('.btn-green-peppers', '.green-pepper'));

$('.btn-sauce').on('click', toggleIngredients('.btn-sauce', '.sauce-white'));

$('.btn-crust').on('click', function(event) {
  $('.btn-crust').toggleClass('active');
  $('section.crust').toggleClass('crust-gluten-free');
});


function toggleIngredients(btnName, ingredientClass) {
  $(btnName).on('click', function(event) {
    $(btnName).toggleClass('active');
    $(ingredientClass).toggle();
  });
}

function resetPizza(btnName, ingredientClass) {
  $(btnName).toggleClass('active');
  $(ingredientClass).toggle();
}




$(main);
