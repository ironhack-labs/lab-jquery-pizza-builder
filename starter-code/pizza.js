// Convert numbers to words, for example 2 = two
//

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
});

$(".btn-pepperonni").click(function() {
  $(".btn-pepperonni").toggleClass("active");
  $(".pep").toggle();
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
});
