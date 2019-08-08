// Write your Pizza Builder JavaScript in this file.

// Adding and removing pepperonni
$(document).ready(function() {
  $(".pep").addClass("off");
  $(".btn-pepperonni").click(function() {
    $(".pep").toggleClass("off");
  });
});

// Adding and removing mushroom
$(document).ready(function() {
  $(".mushroom").addClass("off");
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggleClass("off");
  });
});

// Adding and removing green pepper
$(document).ready(function() {
  $(".green-pepper").addClass("off");
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggleClass("off");
  });
});

// Removing white sauce from default pizza
$(document).ready(function() {
  $(".sauce").removeClass("sauce-white");
});

// Removing gluten-free crust from default pizza
$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
});

// Adding white sauce on button click
$(document).ready(function() {
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
  });
});

// Adding gluten-free crust on button click
$(document).ready(function() {
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
  });
});

// Changing buttons state depending if the pizza has that ingredient
$(document).ready(function() {
  $(".btn").removeClass("active");
  // falta agregar contexto this
  $(".btn").click(function() {
    $("button").toggleClass("active");
  });
});

/*
if ($('.element').hasClass('visible')) {
  $('.element').removeClass('visible');
} else {
  $('.element').addClass('visible');
}
*/

//if the ingredient is turned on, its button should have active.
//If the ingredient is off, remove the active class from the button.
