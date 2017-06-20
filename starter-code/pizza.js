// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
  });
  $(".btn-sauce").click(function() {
    $(".sauce-white").toggleClass();
    $(".sauce").toggleClass();
  });
  $(".btn-crust").click(function() {

    $(".crust").toggleClass();
    $(".crust-gluten-free").toggleClass();
  });



});
