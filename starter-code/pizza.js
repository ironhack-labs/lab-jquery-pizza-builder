// Write your Pizza Builder JavaScript in this file.

// Add/remove pepperonni topping
$('.btn-pepperonni').on('click', function () {
  $(".pep").toggleClass('hidden');
  $(this).toggleClass('active');
});

// Add/remove mushroom topping
$('.btn-mushrooms').on('click', function () {
  $(".mushroom").toggleClass('hidden');
  $(this).toggleClass('active');
});

// Add/remove green pepper topping
$('.btn-green-peppers').on('click', function () {
  $(".green-pepper").toggleClass('hidden');
  $(this).toggleClass('active');
});

// Change from regular to white sauce
$('.btn-sauce').on('click', function () {
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass('active');
});

// Change from regular to gluten free crust
$('.btn-crust').on('click', function () {
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass('active');
});