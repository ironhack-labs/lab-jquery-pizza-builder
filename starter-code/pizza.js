// Write your Pizza Builder JavaScript in this file.

// Add/remove pepperonni topping
$('.btn-pepperonni').on('click', () => {
  $(".pep").toggleClass('hidden');
});

// Add/remove mushroom topping
$('.btn-mushrooms').on('click', () => {
  $(".mushroom").toggleClass('hidden');
});

// Add/remove green pepper topping
$('.btn-green-peppers').on('click', () => {
  $(".green-pepper").toggleClass('hidden');
});

// Change from regular to white sauce
$('.btn-sauce').on('click', () => {
  $('.sauce').toggleClass('sauce-white');
});

// Change from regular to gluten free crust
$('.btn-crust').on('click', () => {
  $('.crust').toggleClass('crust-gluten-free');
});