var glutenFreePrice = 5;
var pizzaPrice = 10;
var whiteSaucePrice = 3;
var greenPepperPrice = 1;
var mushroomsPrice = 1;
var pepperonniPrice = 1;
var totalPrice = 21;

function price(p) {
  totalPrice = totalPrice + p ;
 return $('strong').text(`$ ${totalPrice}`);
}

$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".item1").toggle();
    if ($(".item1").is(":visible")) {
      return price(pepperonniPrice);
    } else {
      return price(-pepperonniPrice);
    }
  });

});

$(document).ready(function() {
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".item2").toggle();
    if ($(".item2").is(":visible")) {
      return price(mushroomsPrice);
    } else {
      return price(-mushroomsPrice);
    }
  });
});

$(document).ready(function() {
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".item3").toggle();
    if ($(".item3").is(":visible")) {
      return price(greenPepperPrice);
    } else {
      return price(-greenPepperPrice);
    }
  });
});

$(document).ready(function() {
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".sauce").toggleClass("active");
    if ($(".btn-sauce").html() === "Regular sauce") {
      $(".btn-sauce").html("White sauce");
    } else {
      $(".btn-sauce").html("Regular sauce");
    };
    $(".item4").toggle();
    if ($(".item4").is(":visible")) {
      return price(whiteSaucePrice);
    } else {
      return price(-whiteSaucePrice);
    }
  });
});

$(document).ready(function() {
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".btn-crust").html() === "Regular crust") {
      $(".btn-crust").html("Gluten free");
    } else {
      $(".btn-crust").html("Regular crust");
    }
    $(".item5").toggle();
    if ($(".item5").is(":visible")) {
      return price(glutenFreePrice);
    } else {
      return price(-glutenFreePrice);
    }
  });


});
