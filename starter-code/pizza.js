// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // add and remove peps
  $(".btn-pepperonni").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".pep").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".pep").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });
  // add and remove mushroom
  $(".btn-mushrooms").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".mushroom").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".mushroom").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });
  // add and remove btn-green-peppers
  $(".btn-green-peppers").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".green-pepper").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".green-pepper").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });

  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");

  $(".btn-crust").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".crust").removeClass("crust-gluten-free");
    } else {
      $(this).addClass("active");
      $(".crust").addClass("crust-gluten-free");
    }
  });

  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");

  $(".btn-sauce").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".sauce").removeClass("sauce-white");
    } else {
      $(this).addClass("active");
      $(".sauce").addClass("sauce-white");
    }
  });
});
