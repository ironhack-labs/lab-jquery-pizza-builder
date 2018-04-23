// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".price > ul > li:contains(sauce)").hide();
  $(".price > ul > li:contains(crust)").hide();
});

// Add/remove pepperonni topping
$('.btn-pepperonni').on('click', function () {
  $(".pep").toggle('hidden');
  $(this).toggleClass('active');
  $(".price > ul > li:contains(pepperonni)").toggle();
});

// Add/remove mushroom topping
$('.btn-mushrooms').on('click', function () {
  $(".mushroom").toggle('hidden');
  $(this).toggleClass('active');
  $(".price > ul > li:contains(mushrooms)").toggle();
});

// Add/remove green pepper topping
$('.btn-green-peppers').on('click', function () {
  $(".green-pepper").toggle('hidden');
  $(this).toggleClass('active');
  $(".price > ul > li:contains(green)").toggle();
});

// Change from regular to white sauce
$('.btn-sauce').on('click', function () {
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass('active');
  $(".price > ul > li:contains(sauce)").toggle();
});

// Change from regular to gluten free crust
$('.btn-crust').on('click', function () {
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass('active');
  $(".price > ul > li:contains(crust)").toggle();
});