// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".btn-pepperonni").toggleClass("active");
  $(".pep").hide();
  $(".price li:nth-child(1)").hide();

  $(".btn-mushrooms").toggleClass("active");
  $(".mushroom").hide();
  $(".price li:nth-child(2)").hide();

  $(".btn-green-peppers").toggleClass("active");
  $(".btn-green-peppers").hide();
  $(".price li:nth-child(3)").hide();

  $(".btn-sauce").toggleClass("active");
  $(".sauce-white").hide();
  $(".price li:nth-child(4)").hide();

  $(".btn-crust").toggleClass("active");
  $(".crust, .crust-gluten-free").hide();
  $(".price li:nth-child(5)").hide();

  var price = 10;
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(1)").toggleClass("charge");
    if ($(this).hasClass("active")) {
      $(".pep").show();
      $(".price li:nth-child(1)").show();
      price += 1;
    } else {
      $(".pep").hide();
      $(".price li:nth-child(1)").hide();
      price -= 1;
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(2)").toggleClass("charge");
    if ($(this).hasClass("active")) {
      $(".mushroom").show();
      $(".price li:nth-child(2)").show();
      price += 1;
    } else {
      $(".mushroom").hide();
      $(".price li:nth-child(2)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(3)").toggleClass("charge");
    if ($(this).hasClass("active")) {
      $(".green-pepper").show();
      $(".price li:nth-child(3)").show();
      price += 1;
    } else {
      $(".green-pepper").hide();
      $(".price li:nth-child(3)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".sauce")
      .parent()
      .toggleClass("sauce-white");
    if ($(this).hasClass("active")) {
      $(".sauce, sauce-white").show();
      $(".price li:nth-child(4)").show();
      price += 1;
    } else {
      $(".sauce-white").hide();
      $(".price li:nth-child(4)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(this).hasClass("active")) {
      $(".crust, .crust-gluten-free").show();
      $(".price li:nth-child(5)").show();
      price += 1;
    } else {
      $(".crust, .crust-gluten-free").hide();
      $(".price li:nth-child(5)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  /* function totalPrice() {
    var price = 21;
    if ($(".btn-pepperonni").hasClass("active")) {
      return (price += 1);
    } else {
      return (price -= 1);
    }
  }*/
});
