// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".sauce-white").toggle();
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".price li:contains('sauce')").toggle();
  $(".price li:contains('crust')").toggle();
  var initialPrice =
    10 +
    takePrice($(".price li:nth-child(1)").html()) +
    takePrice($(".price li:nth-child(2)").html()) +
    takePrice($(".price li:nth-child(3)").html());
  $(".price strong").replaceWith("<strong>$" + initialPrice + "</strong>");

  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:contains('pepperonni')").toggle();
    var p = takePrice($(".price li:nth-child(1)").html());
    recalculatePrice(p, $(".btn-pepperonni").hasClass('active'));
  });

  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:contains('mushrooms')").toggle();
    var m = takePrice($(".price li:nth-child(2)").html());
    recalculatePrice(m, $(".btn-mushrooms").hasClass('active'));
  });

  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:contains('peppers')").toggle();
    var g = takePrice($(".price li:nth-child(3)").html());
    recalculatePrice(g, $(".btn-green-peppers").hasClass('active'));
  });

  $(".btn-sauce").on("click", function() {
    $(".sauce-white").toggle();
    $(".btn-sauce").toggleClass("active");
    $(".price li:contains('sauce')").toggle();
    var w = takePrice($(".price li:nth-child(4)").html());
    recalculatePrice(w, $(".btn-sauce").hasClass('active'));
  });

  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:contains('crust')").toggle();
    var c = takePrice($(".price li:nth-child(5)").html());
    recalculatePrice(c, $(".btn-crust").hasClass('active'));
  });

  function takePrice(a) {
    var priceIngr = parseInt(a.split("")[1]);

    return priceIngr;
  }

  function recalculatePrice(n, b) {
    if (b) {
      initialPrice += n;
    } else {
      initialPrice -= n;
    }

    return $(".price strong").replaceWith("<strong>$" + initialPrice + "</strong>");
  }
});
