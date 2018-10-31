// Write your Pizza Builder JavaScript in this file.
$(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle("display");
    $(".btn-pepperonni").toggleClass("active");
    $("aside li:contains(pepperonni)").toggle("display");
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle("display");
    $(".btn-mushrooms").toggleClass("active");
    $("aside li:contains(mushrooms)").toggle("display");
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle("display");
    $(".btn-green-peppers").toggleClass("active");
    $("aside li:contains(peppers)").toggle("display");
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("aside li:contains(sauce)").toggleClass("invisible");
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("aside li:contains(crust)").toggleClass("invisible");
  });

  $("button").click(function() {
    var totalPrice = price();
    console.log(totalPrice);
    $("aside strong").text("$" + totalPrice);
  });

  function price() {
    var total = 10;
    if ($(".btn-pepperonni").hasClass("active")) {
      total = total + 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
      total = total + 1;
    }
    if ($(".btn-green-peppers").hasClass("active")) {
      total = total + 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
      total = total + 3;
    }
    if ($(".btn-crust").hasClass("active")) {
      total = total + 5;
    }
    return total;
  }
});
