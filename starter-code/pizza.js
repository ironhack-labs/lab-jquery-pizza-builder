// Write your Pizza Builder JavaScript in this file.

// function changeTopping(newClass) {
//   $("#pizza .pep").removeClass("pep mushroom green-pepper");
//   $("#pizza .pep").addClass(newClass);
// }

// // PEPPERONNI Button
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  activePepBtn();
});

function activePepBtn() {
  if ($(".btn-pepperonni").hasClass());

  var isActive = $(".btn-pepperonni").hasClass("active");

  if (isActive) {
    $(".btn-pepperonni").removeClass("active");
  } else {
    $(".btn-pepperonni").addClass("active");
  }
}

// MUSHROOMS Button
$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  activeMushroomBtn();
});

function activeMushroomBtn() {
  if ($(".btn-mushrooms").hasClass());

  var isActive = $(".btn-mushrooms").hasClass("active");

  if (isActive) {
    $(".btn-mushrooms").removeClass("active");
  } else {
    $(".btn-mushrooms").addClass("active");
  }
}

// GREEN PEPPER Button
$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  activeGreenpepperBtn();
});

function activeGreenpepperBtn() {
  if ($(".btn-green-peppers").hasClass());

  var isActive = $(".btn-green-peppers").hasClass("active");

  if (isActive) {
    $(".btn-green-peppers").removeClass("active");
  } else {
    $(".btn-green-peppers").addClass("active");
  }
}

// DEFAULT SAUCE = RED & CRUST = REGULAR
$(document).ready(function() {
  // console.log("ready");
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");

  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
});

// WHITE SAUCE Button
$(".btn-sauce").click(function() {
  toggleSauce();
  activeSauceBtn();
});

function toggleSauce() {
  if ($(".sauce").hasClass());

  var isSauceWhite = $(".sauce").hasClass("sauce-white");

  if (isSauceWhite) {
    $(".sauce").removeClass("sauce-white");
  } else {
    $(".sauce").addClass("sauce-white");
  }
}

function activeSauceBtn() {
  if ($(".btn-sauce").hasClass());

  var isActive = $(".btn-sauce").hasClass("active");

  if (isActive) {
    $(".btn-sauce").removeClass("active");
  } else {
    $(".btn-sauce").addClass("active");
  }
}

// GLUTTEN FREE CRUST Button
$(".btn-crust").click(function() {
  toggleCrust();
  activeCrustBtn();
});

function toggleCrust() {
  if ($(".crust").hasClass());

  var isGluten = $(".crust").hasClass("crust-gluten-free");

  if (isGluten) {
    $(".crust").removeClass("crust-gluten-free");
  } else {
    $(".crust").addClass("crust-gluten-free");
  }
}

function activeCrustBtn() {
  if ($(".btn-crust").hasClass());

  var isActive = $(".btn-crust").hasClass("active");

  if (isActive) {
    $(".btn-crust").removeClass("active");
  } else {
    $(".btn-crust").addClass("active");
  }
}
