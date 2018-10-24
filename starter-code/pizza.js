// Write your Pizza Builder JavaScript in this file.
// PEPPERONNI BUTTON CLICK
$(".btn-pepperonni").click(function() {
  console.log("coucou peperonni");
  if ($(".btn-pepperonni").hasClass("active")) { // if class is active, we need to remove
    $("#pizza > .pep").hide();
    $(".btn-pepperonni").removeClass("active");
    $(".price .price-pepperonni").hide();
    updatePrice()

  } else {
    ($(".btn-pepperonni").addClass("active"));
    $("#pizza > .pep").show();
    $(".price .price-pepperonni").show();
    updatePrice()
  }
});
// MUSHROOM BUTTON CLICK
$(".btn-mushrooms").click(function() {
  console.log("coucou mushroom");
  if ($(".btn-mushrooms").hasClass("active")) { // if class is active, we need to remove
    $("#pizza > .mushroom").hide();
    $(".btn-mushrooms").removeClass("active");
    $(".price .price-mushroom").hide();
    updatePrice()

  } else {
    ($(".btn-mushrooms").addClass("active"));
    $("#pizza > .mushroom").show();
    $(".price .price-mushroom").show();
    updatePrice()
  }
});

// GREEN PEPPER BUTTON CLICK
$(".btn-green-peppers").click(function() {
  console.log("coucou green pepper");
  if ($(".btn-green-peppers").hasClass("active")) { // if class is active, we need to remove
    $("#pizza > .green-pepper").hide();
    $(".btn-green-peppers").removeClass("active");
    $(".price .price-green-pep").hide();
    updatePrice()

  } else {
    ($(".btn-green-peppers").addClass("active"));
    $("#pizza > .green-pepper").show();
    $(".price .price-green-pep").show();
    updatePrice()
  }
});

// WHITE SAUCE BUTTON CLICK
$(".price .price-white-sauce").hide();
$(".btn-sauce").removeClass("active");
$("#pizza .sauce").removeClass("sauce-white");

$(".btn-sauce").click(function() {
  console.log("coucou white sauce");
  if ($(".btn-sauce").hasClass("active")) { // if class is active, we need to remove
    $(".btn-sauce").removeClass("active");
    $("#pizza .sauce").removeClass("sauce-white");
    $(".price .price-white-sauce").hide();
    updatePrice()
    
  } else {
    ($(".btn-sauce").addClass("active"));
    $("#pizza .sauce").addClass("sauce-white");
    $(".price .price-white-sauce").show();
    updatePrice()
  }
});

// GLUTEN-FREE CRUST BUTTON CLICK
$("#pizza > .crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".price .price-crust").hide();

$(".btn-crust").click(function() {
  console.log("coucou crusty");
  if ($(".btn-crust").hasClass("active")) { // if class is active, we need to remove
    $(".btn-crust").removeClass("active");
    $("#pizza > .crust").removeClass("crust-gluten-free");
    $(".price .price-crust").hide();
    updatePrice()
    
  } else {
    ($(".btn-crust").addClass("active"));
    $("#pizza > .crust").addClass("crust-gluten-free");
    $(".price .price-crust").show();
    updatePrice()
  }
});

updatePrice()

function updatePrice() {
var finalPrice = 0;
var pizzaPrice = 10;
var pepPrice;
var greenPepPrice;
var mushroomPrice;
var crustPrice;
var saucePrice;

if ($(".btn-pepperonni").hasClass("active")) {
  pepPrice = 1;
} else {
  pepPrice = 0;
}

if ($(".btn-mushrooms").hasClass("active")) {
  mushroomPrice = 1;
} else {
  mushroomPrice = 0;
}

if ($(".btn-green-peppers").hasClass("active")) {
  greenPepPrice = 1;
} else {
  greenPepPrice = 0;
}

if ($(".btn-sauce").hasClass("active")) {
  saucePrice = 3;
} else {
  saucePrice = 0;
}

if ($(".btn-crust").hasClass("active")) {
  crustPrice = 5;
} else {
  crustPrice = 0;
}

finalPrice = Number(pizzaPrice + pepPrice + greenPepPrice + mushroomPrice + crustPrice + saucePrice);
  $("aside strong").html("$" + finalPrice);
};
