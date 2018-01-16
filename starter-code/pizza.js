$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $("aside ul li:first-child").toggle();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $("aside ul li:nth-child(2)").toggle();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $("aside ul li:nth-child(3)").toggle();
  });

  $(".sauce-white").removeClass("sauce-white");
  $(".crust-gluten-free").removeClass("crust-gluten-free");

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $("aside ul li:nth-child(4)").toggle();
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $("aside ul li:last-child").toggle();
  });

  $(".btn").click(function() {
    $(this).toggleClass("active");
  });
});
