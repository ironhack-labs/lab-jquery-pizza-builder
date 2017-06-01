// Write your Pizza Builder JavaScript in this file.

//--------------------------------------------------------
// Functions
//--------------------------------------------------------

// Sets deafult value
function setDefaultValues(){
  // sets default sauce: regular sauce
  // remove sauce-white class in order to show the regular sauce
  $('.sauce').toggleClass('sauce-white');
  // sets default crust
  // remove crust-gluten-free class in order to show the regular crust
  $('.crust').toggleClass('crust-gluten-free');

  // hide white sauce and gluten-free crust ingredients
  $('.panel.price').find('ul').find('li:contains("sauce")').toggle();
  $('.panel.price').find('ul').find('li:contains("crust")').toggle();
}

// Updates ingredients from the panel price
function updateIngredients(){
  // get ingredients from panel price using visible selector filter
  var ingredients = $('.panel.price').find('ul').find('li:visible');
  console.log(ingredients);
  return ingredients;
}

// Sets the total price in the panel price
function setPrice(){
  var basePrice = 10;
  var totalPrice = 0;
  totalPrice = basePrice + getPriceValue();
  console.log(totalPrice);

  // display total price in the panel price
  var total = $('.panel.price').find('strong');
  console.log(total);
  $(total).html('$' + totalPrice);
}

// Gets the ingredient price from the panel price
function getPriceValue(){
  var totalIngredientsPrice = 0;
  // get ingredients from panel price
  ingredients = updateIngredients();

  for (var i = 0; i < ingredients.length; i++) {
    var ingredient =$(ingredients[i]).html().split(" ");
    var ingredientPrice = parseInt(ingredient[0].replace("$", ""));
    console.log(ingredient);
    console.log(ingredientPrice);
    totalIngredientsPrice += ingredientPrice;
  }
  console.log(totalIngredientsPrice);
  return totalIngredientsPrice;
}

//--------------------------------------------------------
// Sets buttons to add toppings to pizza
//--------------------------------------------------------

// adds pepperonies
$('.btn-pepperonni').on("click", function(){
  $('.pep').toggle();
  $(this).toggleClass('active');
  // hide or show the ingredient pepperonni in panel price
  $('.panel.price').find('ul').find('li:contains("pepperonni")').toggle();
  // update number of ingredients added
  updateIngredients();
  // set new price once the ingredient is added
  setPrice();
});

// adds mushrooms
$('.btn-mushrooms').on("click", function(){
  $('.mushroom').toggle();
  $(this).toggleClass('active');
  // hide or show the ingredient mushroom in panel price
  $('.panel.price').find('ul').find('li:contains("mushrooms")').toggle();
  // update number of ingredients added
  updateIngredients();
  // set new price once the ingredient is added
  setPrice();
});

// adds green-pepper
$('.btn-green-peppers').on("click", function(){
  $('.green-pepper').toggle();
  $(this).toggleClass('active');
  // hide or show the ingredient peppers in panel price
  $('.panel.price').find('ul').find('li:contains("peppers")').toggle();
  // update number of ingredients added
  updateIngredients();
  // set new price once the ingredient is added
  setPrice();
});

//--------------------------------------------------------
// Sauce and crust options
//--------------------------------------------------------

// adds white sauce
$('.btn-sauce').on("click", function(){
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass('active');
  // hide or show the ingredient sauce-white in panel price
  $('.panel.price').find('ul').find('li:contains("sauce")').toggle();
  // update number of ingredients added
  updateIngredients();
  // set new price once the ingredient is added
  setPrice();
});

// adds gluten free crust
$('.btn-crust').on("click", function(){
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass('active');
  // hide or show the ingredient crust-gluten-free in panel price
  $('.panel.price').find('ul').find('li:contains("crust")').toggle();
  // update number of ingredients added
  updateIngredients();
  // set new price once the ingredient is added
  setPrice();
});

//--------------------------------------------------------
// Main
//--------------------------------------------------------
setDefaultValues();
setPrice();
