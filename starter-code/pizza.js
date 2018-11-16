// Write your Pizza Builder JavaScript in this file.
var totalPrice = 13;

$(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");

  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");

  $($(".price li:contains('$3 white sauce')")).hide();
  $($(".price li:contains('$5 gluten-free crust')")).hide();

  $("strong").text("$" + totalPrice);

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $($(".price li:contains('$1 pepperonni')")).toggle();

    if ($(this).hasClass("active")) {
      totalPrice += 1;
    } else {
      totalPrice -= 1;
    }

  $("strong").text("$" + totalPrice);

  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $($(".price li:contains('$1 mushrooms')")).toggle();

    if ($(this).hasClass("active")) {
      totalPrice += 1;
    } else {
      totalPrice -= 1;
    }
    $("strong").text("$" + totalPrice);
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $($(".price li:contains('$1 green peppers')")).toggle();
    if ($(this).hasClass("active")) {
      totalPrice += 1;
    } else {
      totalPrice -= 1;
    }
    $("strong").text("$" + totalPrice);
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");

    $($(".price li:contains('$3 white sauce')")).toggle();

    if ($(this).hasClass("active")) {
      totalPrice += 3;
    } else {
      totalPrice -= 3;
    }
    $("strong").text("$" + totalPrice);
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");

    $(this).toggleClass("active");

    $($(".price li:contains('$5 gluten-free crust')")).toggle();

    if ($(this).hasClass("active")) {
      totalPrice += 5;
    } else {
      totalPrice -= 5;
    }
    $("strong").text("$" + totalPrice);
  });
});
