// Write your Pizza Builder JavaScript in this file.

// Iteration 1
$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  updateButtonStatus();
  updatePriceList();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  updateButtonStatus();
  updatePriceList();
});

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  updateButtonStatus();
  updatePriceList();
});

// Iteration 2

$(".btn-sauce").click(function() {
  var isWhiteSauce = $(".sauce").hasClass("sauce-white");
  if (isWhiteSauce) {
    $(".sauce").removeClass("sauce-white");
  } else {
    $(".sauce").addClass("sauce-white");
  }
  updateButtonStatus();
  updatePriceList();
});

$(".btn-crust").click(function() {
  var isGlutenFree = $(".crust").hasClass("crust-gluten-free");
  if (isGlutenFree) {
    $(".crust").removeClass("crust-gluten-free");
  } else {
    $(".crust").addClass("crust-gluten-free");
  }
  updateButtonStatus();
  updatePriceList();
});

// Iteration 3

function updateButtonStatus() {
  var isGreenPepper = $(".green-pepper").is(":visible");
  var isMushroom = $(".mushroom").is(":visible");
  var isPepperonni = $(".pep").is(":visible");
  var isWhiteSauce = $(".sauce").hasClass("sauce-white");
  var isGlutenFree = $(".crust").hasClass("crust-gluten-free");

  if (isGreenPepper) {
    $(".btn-green-peppers").addClass("active");
  } else {
    $(".btn-green-peppers").removeClass("active");
  }

  if (isMushroom) {
    $(".btn-mushrooms").addClass("active");
  } else {
    $(".btn-mushrooms").removeClass("active");
  }

  if (isPepperonni) {
    $(".btn-pepperonni").addClass("active");
  } else {
    $(".btn-pepperonni").removeClass("active");
  }

  if (isWhiteSauce) {
    $(".btn-sauce").addClass("active");
  } else {
    $(".btn-sauce").removeClass("active");
  }

  if (isGlutenFree) {
    $(".btn-crust").addClass("active");
  } else {
    $(".btn-crust").removeClass("active");
  }
}

// Iteration 4

function updatePriceList() {
  var isGreenPepper = $(".green-pepper").is(":visible");
  var isMushroom = $(".mushroom").is(":visible");
  var isPepperonni = $(".pep").is(":visible");
  var isWhiteSauce = $(".sauce").hasClass("sauce-white");
  var isGlutenFree = $(".crust").hasClass("crust-gluten-free");

  if (isGreenPepper) {
    $(".price li:contains(green)").show();
  } else {
    $(".price li:contains(green)").hide();
  }

  if (isMushroom) {
    $(".price li:contains(mush)").show();
  } else {
    $(".price li:contains(mush)").hide();
  }

  if (isPepperonni) {
    $(".price li:contains(pepperonni)").show();
  } else {
    $(".price li:contains(pepperonni)").hide();
  }

  if (isWhiteSauce) {
    $(".price li:contains(sauce)").show();
  } else {
    $(".price li:contains(sauce)").hide();
  }

  if (isGlutenFree) {
    $(".price li:contains(gluten)").show();
  } else {
    $(".price li:contains(gluten)").hide();
  }
}

updatePriceList();
