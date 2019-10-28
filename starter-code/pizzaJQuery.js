// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".price > ul > li").hide();
  $("section").removeClass("crust-gluten-free sauce-white");

  //Setting Default
  $("strong").text("$" + 13); //set starting price to 13
  // $(".green-pepper, .mushroom, .pep").hide();
  $(".btn").removeClass("active");

  $(".btn-pepperonni").toggleClass("active");
  $(".price > ul > li:nth-child(1)").toggle();

  $(".btn-mushrooms").toggleClass("active");
  $(".price > ul > li:nth-child(2)").toggle();

  $(".btn-green-peppers").toggleClass("active");
  $(".price > ul > li:nth-child(3)").toggle();

  function updatePrice() {
    var price = 10;
    if ($(".btn-pepperonni").hasClass("active")) price += 1;
    if ($(".btn-mushrooms").hasClass("active")) price += 1;
    if ($(".btn-green-peppers").hasClass("active")) price += 1;
    if ($(".btn-sauce").hasClass("active")) price += 3;
    if ($(".btn-crust").hasClass("active")) price += 5;
    $("aside strong").text("$" + price);
  }

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price > ul > li:nth-child(1)").toggle();

    updatePrice();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price > ul > li:nth-child(2)").toggle();
    updatePrice();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price > ul > li:nth-child(3)").toggle();
    updatePrice();
  });

  $(".btn-sauce").click(function() {
    $("section > .sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price > ul > li:nth-child(4)").toggle();
    updatePrice();
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price > ul > li:nth-child(5)").toggle();
    updatePrice();
  });
});
