// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
  });

  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
  });

  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
  });
});
