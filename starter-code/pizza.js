// Write your Pizza Builder JavaScript in this file.
$(function () {

  // Init states

  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  // Init prices and values of price list

  totalPrice(); listShowHide();

  // buttons values

  $(".btn-pepperonni").click(function () {
    $(this).hasClass("active") ? $(".pep").hide() : $(".pep").show();
    $(this).toggleClass("active");

    totalPrice(); listShowHide();
  });

  $(".btn-mushrooms").click(function () {
    $(this).hasClass("active") ? $(".mushroom").hide() : $(".mushroom").show();
    $(this).toggleClass("active");

    totalPrice(); listShowHide();
  });

  $(".btn-green-peppers").click(function () {
    $(this).hasClass("active") ? $(".green-pepper").hide() : $(".green-pepper").show();
    $(this).toggleClass("active");

    totalPrice(); listShowHide();
  });

  $(".btn-sauce").click(function () {
    $(this).hasClass("active") ? $(".sauce").removeClass("sauce-white") : $(".sauce").addClass("sauce-white");
    $(this).toggleClass("active");

    totalPrice(); listShowHide()
  });

  $(".btn-crust").click(function () {
    $(this).hasClass("active") ? $(".crust").removeClass("crust-gluten-free") : $(".crust").addClass("crust-gluten-free");
    $(this).toggleClass("active");

    totalPrice(); listShowHide();
  });

  // Update prices

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
    
    $("strong").text("$" + totalPrice);
  }

  // Update price list values

  function listShowHide(){
    $(".btn-pepperonni").hasClass("active") ? $(".price li:nth-child(1)").show() : $(".price li:nth-child(1)").hide();
    $(".btn-mushrooms").hasClass("active") ? $(".price li:nth-child(2)").show() : $(".price li:nth-child(2)").hide();
    $(".btn-green-peppers").hasClass("active") ? $(".price li:nth-child(3)").show() : $(".price li:nth-child(3)").hide();
    $(".btn-sauce").hasClass("active") ? $(".price li:nth-child(4)").show() : $(".price li:nth-child(4)").hide();
    $(".btn-crust").hasClass("active") ? $(".price li:nth-child(5)").show() : $(".price li:nth-child(5)").hide();
  }
});