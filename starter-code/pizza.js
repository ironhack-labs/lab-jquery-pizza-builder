// Write your Pizza Builder JavaScript in this file.

// Hide the prices of crust and sauce
$(document).ready(function () {
  $('.price > ul > li:contains(sauce)').hide();
  $('.price > ul > li:contains(crust)').hide();
  getPrice();
});

// Add/remove pepperonni topping
$('.btn-pepperonni').on('click', function () {
  $('.pep').toggle('hidden');
  $(this).toggleClass('active');
  $('.price > ul > li:contains(pepperonni)').toggle();
  getPrice();
});

// Add/remove mushroom topping
$('.btn-mushrooms').on('click', function () {
  $('.mushroom').toggle('hidden');
  $(this).toggleClass('active');
  $('.price > ul > li:contains(mushrooms)').toggle();
  getPrice();
});

// Add/remove green pepper topping
$('.btn-green-peppers').on('click', function () {
  $('.green-pepper').toggle('hidden');
  $(this).toggleClass('active');
  $('.price > ul > li:contains(green)').toggle();
  getPrice();
});

// Change from regular to white sauce
$('.btn-sauce').on('click', function () {
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass('active');
  $('.price > ul > li:contains(sauce)').toggle();
  getPrice();
});

// Change from regular to gluten free crust
$('.btn-crust').on('click', function () {
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass('active');
  $('.price > ul > li:contains(crust)').toggle();
  getPrice();
});

// Render pizza price
function getPrice() {
  let price = 10;
  const toppings = ['.btn-pepperonni', '.btn-mushrooms', '.btn-green-peppers', '.btn-sauce', '.btn-crust'];
  const topPrice = [1, 1, 1, 3, 5];
  for (let i = 0; i < toppings.length; i++) {
    if ($(toppings[i]).hasClass('active')) {
      price += topPrice[i];
    }
  }

  $('aside > strong').text('$' + price);
}