// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {

  $(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    $(".price > ul > li:nth-child(1)").toggle();
  });

  $(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".price > ul > li:nth-child(2)").toggle();
  });

  $(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    $(".price > ul > li:nth-child(3)").toggle();
  });

  $(".btn-sauce").click(function () {
    let hasWhiteSauce = $(".sauce").hasClass("sauce-white");
    if (hasWhiteSauce) {
      $(".sauce").removeClass("sauce-white");
    } else {
      $(".sauce").addClass("sauce-white");
    }
    $(".price > ul > li:nth-child(4)").toggle();
  });

  $(".btn-crust").click(function () {
    let hasGluttenFreeCrust = $(".crust").hasClass("crust-gluten-free");
    if (hasGluttenFreeCrust) {
      $(".crust").removeClass("crust-gluten-free");
    } else {
      $(".crust").addClass("crust-gluten-free");
    }
    $(".price > ul > li:nth-child(5)").toggle();

  });

  $(".btn").click(function () {
    $(this).toggleClass("active");
    getTotalPrice();
  })


  function getTotalPrice() {
    let defaultPrice = 10;
    for (let i = 1; i <= 5; i++) {
      if ($(`.price > ul > li:nth-child(${i})`).is(":visible")) {
        defaultPrice += Number($(`.price > ul > li:nth-child(${i})`).text().slice(1, 2))
      }
    }
    $(`.price > strong`).text(`$${defaultPrice}`);
  }

  $(".price > ul > li:visible")

  // Number($(".price > ul > li:nth-child(1)").text().slice(1,2))
  // initial state changes
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".price > ul > li:nth-child(4").toggle();
  $(".price > ul > li:nth-child(5").toggle();
  getTotalPrice();

});

