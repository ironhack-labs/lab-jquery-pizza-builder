 // ITERATION 1

// Add/remove pepperoni
$('.btn-pepperoni.active').click(function(e) {
  $('.pep').toggle();
  $(this).toggleClass('active');
  $('.panel.price ul li:nth(0)').toggle();
  includedIngredients[0] = !includedIngredients[0];
  updatePrice();
});

// Add/remove mushrooms
$('.btn-mushrooms.active').click(function(e) {
  $('.mushroom').toggle();
  $(this).toggleClass('active');
  $('.panel.price ul li:nth(1)').toggle();
  includedIngredients[1] = !includedIngredients[1];
  updatePrice();
});

// Add/remove mushrooms
$('.btn-green-peppers.active').click(function(e) {
  $('.green-pepper').toggle();
  $(this).toggleClass('active');
  $('.panel.price ul li:nth(2)').toggle();
  includedIngredients[2] = !includedIngredients[2];
  updatePrice();
});

//Add/remove white sauce
$('.btn-sauce.active').click(function(e) {
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass('active');
  $('.panel.price ul li:nth(3)').toggle();
  includedIngredients[3] = !includedIngredients[3];
  updatePrice();
});

//Add/remove gluten free crust
$('.btn-crust.active').click(function(e) {
  $('.crust').toggleClass('active');
  $(this).toggleClass('active');
  $('.panel.price ul li:nth(4)').toggle();
  includedIngredients[4] = !includedIngredients[4];
  updatePrice();
});

// ITERATION 2
//By default remove white sauce gluten free crust
$('.sauce').toggleClass('sauce-white');
$('.btn-sauce.active').toggleClass('active');
$('.panel.price ul li:nth(3)').toggle();

$('.crust').toggleClass('crust-gluten-free');
$('.btn-crust.active').toggleClass('active');
$('.panel.price ul li:nth(4)').toggle();

// ITERATION 3
// Added to above code


// ITERATION 4
// Added to above code

// ITERATION 5
// Update price function
function updatePrice () {
  var toppingsPrice = ingredientPrices.reduce(function (sum, value, i) {
    return sum + value * includedIngredients[i];
  }, 0);
  totalPrice = basePrice + toppingsPrice;
  $('.panel.price strong').html('$' + totalPrice.toFixed(0));
}

// Set prices for each topping, default ingredients, and first update of the price
var basePrice = 10;
var toppingsPrice = 0;
var ingredientPrices = [1, 1, 1, 3, 5];
var includedIngredients = [true, true, true, false, false]
var totalPrice = 0;
updatePrice();
