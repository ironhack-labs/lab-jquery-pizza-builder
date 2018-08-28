$(document).ready(function() {
  $(".btn").removeClass("active");
  $(".pep").css("display", "none");
  $(".mushroom").css("display", "none");
  $(".green-pepper").css("display", "none");
  $(".price-pepperonni").css("display", "none");
  $(".price-mushrooms").css("display", "none");
  $(".price-peppers").css("display", "none");
  $(".price-sauce").css("display", "none");
  $(".price-crust").css("display", "none");

  //var sumString = "$" + totalSum()

  function totalPrice() {
    var totalSum = 10;
    if ($(".btn-pepperonni").hasClass("active")) {
      totalSum += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
      totalSum += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")) {
      totalSum += 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
      totalSum += 3;
    }
    if ($(".btn-crust").hasClass("active")) {
      totalSum += 5;
    }
    document.getElementById("price").innerHTML = "$" + totalSum;
  }

  $(".btn-pepperonni").click(function() {
    if ($(this).hasClass("active")) {
      $(".pep").css("display", "none");
      $(this).removeClass("active");
      $(".price-pepperonni").css("display", "none");
      totalPrice();
    } else {
      $(".pep").css("display", "initial");
      $(this).addClass("active");
      $(".price-pepperonni").css("display", "inherit");
      totalPrice();
    }
  });
  $(".btn-mushrooms").click(function() {
    if ($(this).hasClass("active")) {
      $(".mushroom").css("display", "none");
      $(this).removeClass("active");
      $(".price-mushrooms").css("display", "none");
      totalPrice();
    } else {
      $(".mushroom").css("display", "initial");
      $(this).addClass("active");
      $(".price-mushrooms").css("display", "inherit");
      totalPrice();
    }
  });
  $(".btn-green-peppers").click(function() {
    if ($(this).hasClass("active")) {
      $(".green-pepper").css("display", "none");
      $(this).removeClass("active");
      $(".price-peppers").css("display", "none");
      totalPrice();
    } else {
      $(".green-pepper").css("display", "initial");
      $(this).addClass("active");
      $(".price-peppers").css("display", "inherit");
      totalPrice();
    }
  });

  $(".btn-sauce").click(function() {
    if ($(this).hasClass("active")) {
      $(".sauce").removeClass("sauce-white");
      $(this).removeClass("active");
      $(".price-sauce").css("display", "none");
      totalPrice();
    } else {
      $(".sauce").addClass("sauce-white");
      $(this).addClass("active");
      $(".price-sauce").css("display", "inherit");
      totalPrice();
    }
  });

  $(".btn-crust").click(function() {
    if ($(this).hasClass("active")) {
      $(".crust").removeClass("crust-gluten-free");
      $(this).removeClass("active");
      $(".price-crust").css("display", "none");
      totalPrice();
    } else {
      $(".crust").addClass("crust-gluten-free");
      $(this).addClass("active");
      $(".price-crust").css("display", "inherit");
      totalPrice();
    }
    //($("#price")).prop("value", totalSum);
  });
});
