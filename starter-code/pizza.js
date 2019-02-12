// Write your Pizza Builder JavaScript in this file.
$("document").ready(function() {

  // Add or hide ingredients
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggleClass("hidden");
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggleClass("hidden");
  });
  $(".btn-pepperonni").click(function() {
    $(".pep").toggleClass("hidden");
  });

  // change standard sauce and crust
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
  })

});

