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

function updatePrice(n) {
  switch (n) {
    case "pepperoni":
      if ($(pepperoniButton).hasClass("active")) {
        $(".price ul li:nth-child(1)").toggle();
        price = price + 1;
        finalPrice.text(price);
      } else if (!$(pepperoniButton).hasClass("active")) {
        $(".price ul li:nth-child(1)").toggle();
        price = price - 1;
        finalPrice.text(price);
      }
      return price;
    case "mushrooms":
      if ($(mushroomsButton).hasClass("active")) {
        $(".price ul li:nth-child(2)").toggle();
        price = price + 1;
        finalPrice.text(price);
      } else if (!$(mushroomsButton).hasClass("active")) {
        $(".price ul li:nth-child(2)").toggle();
        price = price - 1;
      }
      finalPrice.text(price);
      return price;
    case "greenPeppers":
      if ($(greenPeppersButton).hasClass("active")) {
        $(".price ul li:nth-child(3)").toggle();
        price = price + 1;
        finalPrice.text(price);
      } else if (!$(greenPeppersButton).hasClass("active")) {
        $(".price ul li:nth-child(3)").toggle();
        price = price - 1;
        finalPrice.text(price);
      }
      return price;
    case "sauce":
      if ($(sauceButton).hasClass("active")) {
        $(".price ul li:nth-child(4)").toggle();
        // $("strong").toggle();
        // cambiar de 20 a 21
        price = price + 3;
        finalPrice.text(price);
      } else if (!$(sauceButton).hasClass("active")) {
        $(".price ul li:nth-child(4)").toggle();
        price = price - 3;
        finalPrice.text(price);
      }
      return price;
    case "crust":
      if ($(crustButton).hasClass("active")) {
        $(".price ul li:nth-child(5)").toggle();
        // $("strong").toggle();
        // cambiar de 20 a 21
        price = price + 5;
        finalPrice.text(price);
      } else if (!$(crustButton).hasClass("active")) {
        $(".price ul li:nth-child(5)").toggle();
        price = price - 5;
        finalPrice.text(price);
      }
      return price;
  }
}

$($(pepperoniButton)).click(function() {
  togglePepperoni();
  updatePrice("pepperoni");
});
$($(mushroomsButton)).click(function() {
  toggleMushroom();
  updatePrice("mushrooms");
});
$($(greenPeppersButton)).click(function() {
  togglePepper();
  updatePrice("greenPeppers");
});
$($(sauceButton)).click(function() {
  toggleSauce();
  updatePrice("sauce");
});
$($(crustButton)).click(function() {
  toggleCrust();
  updatePrice("crust");
});
