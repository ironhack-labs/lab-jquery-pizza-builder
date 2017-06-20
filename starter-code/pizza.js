// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");

  $(".btn-pepperonni").click(function(event) {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
  });
  $(".btn-mushrooms").click(function(event) {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
  });
  $(".btn-green-peppers").click(function(event) {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
  });
  $(".btn-sauce").click(function(event) {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
  });
  $(".btn-crust").click(function(event) {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  });
});
