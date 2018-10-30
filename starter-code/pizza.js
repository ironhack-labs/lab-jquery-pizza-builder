// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".price li:nth-child(2)").toggle();
  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".price li:first").toggle();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".price li:nth-child(3)").toggle();
  });

  //iteration 2 onload it has the characterics, so //take them away first
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
  });

  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".btn-crust").click(function() {
    $("btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  });

  //Iteration 3

  $(".btn-green-peppers").click(function() {
    $(".bt-green-pepper").toggleClass("active");
  });

  $(".btn btn-pepperonni").click(function() {
    $(".pep").toggleClass("active");
  });
});
