$(document).ready(function() {
  // $(".green-pepper").addClass("peppers")
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".btn-green-peppers").click(function(event) {
    // event.preventDefault();
    $(".green-pepper").fadeToggle();
  });

  $(".btn-pepperonni").click(function(event) {
    $(".pep").fadeToggle();
  });

  $(".btn-mushrooms").click(function(event) {
    $(".mushroom").fadeToggle();
  });

  $(".btn-sauce").click(function(event) {
    $(".sauce").toggleClass("sauce-white");
  });

  $(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn-pepperonni").click(function(event) {
    $(".btn-pepperonni").toggleClass("active");
  });

  $(".btn-mushrooms").click(function(event) {
    $(".btn-mushrooms").toggleClass("active");
  });

  $(".btn-green-peppers").click(function(event) {
    $(".btn-green-peppers").toggleClass("active");
  });

  $(".btn-sauce").click(function(event) {
    $(".btn-sauce").toggleClass("active");
  });

  $(".btn-crust").click(function(event) {
    $(".btn-crust").toggleClass("active");
  });

});
