// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".panel.price li:contains('pepperonni')").toggle();
    totalPrice();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom div").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".panel.price li:contains('mushrooms')").toggle();
    totalPrice();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".panel.price li:contains('green peppers')").toggle();
    totalPrice();
  });

  $(".sauce-white").removeClass("sauce-white");
  $(".crust-gluten-free").removeClass("crust-gluten-free");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".panel.price li:contains('white sauce')").toggle();
    totalPrice();
  });
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".panel.price li:contains('gluten-free')").toggle();
    totalPrice();
  });

  $(".price li:nth-child(4)").hide();
  $(".price li:nth-child(5)").hide();
  $(".price strong").text(["$" + "13"]);

  function totalPrice() {
    var totalPrice = 10;
    if ($(".btn-pepperonni").hasClass("active")) {
      totalPrice += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
      totalPrice += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")) {
      totalPrice += 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
      totalPrice += 3;
    }
    if ($(".btn-crust").hasClass("active")) {
      totalPrice += 5;
    }
    $(".price strong").text(["$" + totalPrice]);
  }
});
