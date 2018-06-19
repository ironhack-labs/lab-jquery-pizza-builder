// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  /*INITIAL SETTINGS */

  $(".green-pepper").hide();
  $(".mushroom").hide();
  $(".pep").hide();

  /*ITERATION 1*/

  $(".btn-pepperonni").click(function() {
    $(".pep").toggleClass("show");
    $(".panel.price li:nth-child(1)").toggleClass("show");
    calcPrice($(this), 1);
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggleClass("show");
    $(".panel.price li:nth-child(2)").toggleClass("show");
    calcPrice($(this), 1);
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggleClass("show");
    $(".panel.price li:nth-child(3)").toggleClass("show");
    calcPrice($(this), 1);
  });

  /*ITERATION 2 */

  $(".crust-gluten-free").removeClass("crust-gluten-free");
  $(".sauce-white").removeClass("sauce-white");

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".panel.price li:nth-child(4)").toggleClass("show");
    calcPrice($(this), 3);
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel.price li:nth-child(5)").toggleClass("show");
    calcPrice($(this), 5);
  });

  /*ITERATION 3 */

  $(".btn").removeClass("active");

  $(".btn").click(function() {
    $(this).toggleClass("active");
  });

  /*ITERATION 4 */

  $(".panel.price li").hide();

  /* ITERATION 5 */

  $(".panel.price strong").text("$10");

  var currentPrice = 10;

  function calcPrice(btn, qty) {
    if (btn.hasClass("active")) {
      currentPrice -= qty;
    } else {
      currentPrice += qty;
    }
    $(".panel.price strong").text("$" + currentPrice);
  }
});
