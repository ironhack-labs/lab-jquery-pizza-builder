// Write your Pizza Builder JavaScript in this file.

// first iteration
$(function() {
  $(".btn-pepperonni").click(function() {
    if ($(this).hasClass("active")) {
      $(".pep").hide();
      $(".btn-pepperonni").removeClass("active");
    } else {
      $(".pep").show();
      $(".btn-pepperonni").addClass("active");
    }
  });
});

$(function() {
  $(".btn-mushrooms").click(function() {
    if ($(this).hasClass("active")) {
      $(".mushroom").hide();
      $(".btn-mushrooms").removeClass("active");
    } else {
      $(".mushroom").show();
      $(".btn-mushrooms").addClass("active");
    }
  });
});

$(function() {
  $(".btn-green-peppers").click(function() {
    if ($(this).hasClass("active")) {
      $(".green-pepper").hide();
      $(".btn-green-peppers").removeClass("active");
    } else {
      $(".green-pepper").show();
      $(".btn-green-peppers").addClass("active");
    }
  });
});

// second iteration
$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");

$(function() {
  $(".btn-sauce").click(function() {
    if ($(this).hasClass("active")) {
      $(".sauce").hide();
      $(".btn-sauce").removeClass("active");
    } else {
      $(".sauce").show();
      $(".btn-sauce").addClass("active");
    }
  });
});

$(function() {
  $(".btn-crust").click(function() {
    if ($(this).hasClass("active")) {
      $(".cheese").hide();
      $(".btn-crust").removeClass("active");
    } else {
      $(".cheese").show();
      $(".btn-crust").addClass("active");
    }
  });
});

// Third iteration is already in the second one

// Fourth iteration
