var pepperoniButton = $(".btn-pepperonni");
var mushroomsButton = $(".btn-mushrooms");
var greenPeppersButton = $(".btn-green-peppers");
var sauceButton = $(".btn-sauce");
var crustButton = $(".btn-crust");
var finalPrice = $("strong");

function togglePepperoni() {
  var pepperoni = $(".pep");

  if ($(pepperoniButton).hasClass("active")) {
    $(pepperoni).each(function() {
      $(this).css("display", "none");
      $(pepperoniButton).removeClass("active");
    });
  } else {
    $(pepperoni).each(function() {
      $(this).css("display", "block");
      $(pepperoniButton).addClass("active");
    });
  }
}

function toggleMushroom() {
  var mushroom = $(".mushroom");

  if ($(mushroomsButton).hasClass("active")) {
    $(mushroom).each(function() {
      $(this).css("display", "none");
      $(mushroomsButton).removeClass("active");
    });
  } else {
    $(mushroom).each(function() {
      $(this).css("display", "block");
      $(mushroomsButton).addClass("active");
    });
  }
}

function togglePepper() {
  var pepper = $(".green-pepper");
  if ($(greenPeppersButton).hasClass("active")) {
    $(pepper).each(function() {
      $(this).css("display", "none");
      $(greenPeppersButton).removeClass("active");
    });
  } else {
    $(pepper).each(function() {
      $(this).css("display", "block");
      $(greenPeppersButton).addClass("active");
    });
  }
}

function toggleSauce() {
  var sauce = $(".sauce");
  if ($(sauceButton).hasClass("active")) {
    $(sauce).each(function() {
      $(this).css("display", "none");
      $(sauceButton).removeClass("active");
    });
  } else {
    $(sauce).each(function() {
      $(this).css("display", "block");
      $(sauceButton).addClass("active");
    });
  }
}

function toggleCrust() {
  var crust = $(".crust");
  if ($(crustButton).hasClass("active")) {
    $(crust).each(function() {
      $(this).css("display", "none");
      $(crustButton).removeClass("active");
    });
  } else {
    $(crust).each(function() {
      $(this).css("display", "block");
      $(crustButton).addClass("active");
    });
  }
}
var price = 21;

function updatePrice() {
  if ($(pepperoniButton).hasClass("active")) {
    $(".price ul li:nth-child(1)").toggle();
    price = price - 1;
    finalPrice.text(price);
  } else if (!$(pepperoniButton).hasClass("active")) {
    $(".price ul li:nth-child(1)").toggle();
    price = price + 1;
    finalPrice.text(price);
  }
  // if ($(mushroomsButton).hasClass("active")) {
  //   $(".price ul li:nth-child(2)").toggle();
  //   // $("strong").toggle();
  //   // cambiar de 20 a 21
  //   price = price - 1;
  //   finalPrice.text(price);
  // }
  // } else if (!$(mushroomsButton).hasClass("active")) {
  //   $(".price ul li:nth-child(2)").toggle();
  //   price = price + 1;
  //   finalPrice.text(price);
  // }
  // if ($(greenPeppersButton).hasClass("active")) {
  //   $(".price ul li:nth-child(3)").toggle();
  //   // $("strong").toggle();
  //   // cambiar de 20 a 21
  //   price = price - 1;
  //   finalPrice.text(price);
  // } else if (!$(greenPeppersButton).hasClass("active")) {
  //   $(".price ul li:nth-child(3)").toggle();
  //   price = price + 1;
  //   finalPrice.text(price);
  // }
  // if ($(sauceButton).hasClass("active")) {
  //   $(".price ul li:nth-child(4)").toggle();
  //   // $("strong").toggle();
  //   // cambiar de 20 a 21
  //   price = price - 3;
  //   finalPrice.text(price);
  // } else if (!$(sauceButton).hasClass("active")) {
  //   $(".price ul li:nth-child(4)").toggle();
  //   price = price + 3;
  //   finalPrice.text(price);
  // }
  // if ($(crustButton).hasClass("active")) {
  //   $(".price ul li:nth-child(5)").toggle();
  //   // $("strong").toggle();
  //   // cambiar de 20 a 21
  //   price = price - 5;
  //   finalPrice.text(price);
  // } else if (!$(crustButton).hasClass("active")) {
  //   $(".price ul li:nth-child(5)").toggle();
  //   price = price + 5;
  //   finalPrice.text(price);
  // }
}
// display none

// $( "p span" ).first().addClass( "highlight" );
// $(crust).each(function() {
//   $(this).css("display", "none");
//   $(btn).removeClass("active");
// });

$($(pepperoniButton)).click(function() {
  togglePepperoni();
  updatePrice();
});
$($(mushroomsButton)).click(function() {
  toggleMushroom();
  updatePrice();
});
$($(greenPeppersButton)).click(function() {
  togglePepper();
  updatePrice();
});
$($(sauceButton)).click(function() {
  toggleSauce();
  updatePrice();
});
$($(crustButton)).click(function() {
  toggleCrust();
  updatePrice();
});
