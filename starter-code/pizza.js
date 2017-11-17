// document ready
$(function() {

  // setting default pizza
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");


  //declaring variables
  priceContainer = $("panel.price ul");
  pepperoni = $(".panel.price ul > li")[0];
  mushrooms = $(".panel.price ul > li")[1];
  greenPeppers = $(".panel.price ul > li")[2];
  sauce = $(".panel.price ul > li")[3];
  crust = $(".panel.price ul > li")[4];
  $(sauce).hide();
  $(crust).hide();


  // onclick event for buttons
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".pep").show();
      $(pepperoni).show();
      addPrice(pepperoni);
    } else {
      $(".pep").hide();
      $(pepperoni).hide();
      removePrice(pepperoni);
    }
  });


  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".cap, .stem").show();
      $(mushrooms).show();
      addPrice(mushrooms);
    } else {
      $(".cap, .stem").hide();
      $(mushrooms).hide();
      removePrice(mushrooms);
    }
  });

  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".green-pepper").show();
      $(greenPeppers).show();
      addPrice(greenPeppers);
    } else {
      $(".green-pepper").hide();
      $(greenPeppers).hide();
      removePrice(greenPeppers);
    }
  });


  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".crust").addClass("crust-gluten-free");
      $(crust).show();
      addPrice(crust);
    } else {
      $(".crust").removeClass("crust-gluten-free");
      $(crust).hide();
      removePrice(crust);
    }
  });

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".sauce").addClass("sauce-white");
      $(sauce).show();
      addPrice(sauce);
    } else {
      $(".sauce").removeClass("sauce-white");
      $(sauce).hide();
      removePrice(sauce);
    }
  });


  // functions for price calculation
  var pricePizza = 13;

  function addPrice(ingredient) {
    pricePizza += Number(ingredient.innerText[1]);
    $(".panel.price strong").text("$" + pricePizza);
  }

  function removePrice(ingredient) {
    pricePizza -= Number(ingredient.innerText[1]);
    $(".panel.price strong").text("$" + pricePizza);
  }

});
