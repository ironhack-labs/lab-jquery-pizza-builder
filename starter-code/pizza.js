// Write your Pizza Builder JavaScript in this file.
$(window).load(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
});

$(".btn-pepperonni").click(function() {
  if ($(".pep").css("display") == "none") {
    $(".pep").css("display", "block");
    $(".btn-pepperonni").addClass("active");
  } else {
    $(".pep").css("display", "none");
    $(".btn-pepperonni").removeClass("active");
  }
});

$(".btn-mushrooms").click(function() {
  if ($(".mushroom").css("display") == "none") {
    $(".mushroom").css("display", "block");
    $(".btn-mushrooms").addClass("active");
  } else {
    $(".mushroom").css("display", "none");
    $(".btn-mushrooms").removeClass("active");
  }
});

$(".btn-green-peppers").click(function() {
  if ($(".green-pepper").css("display") == "none") {
    $(".green-pepper").css("display", "block");
    $(".btn-green-peppers").addClass("active");
  } else {
    $(".green-pepper").css("display", "none");
    $(".btn-green-peppers").removeClass("active");
  }
});

$(".btn-sauce").click(function() {
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
  }
});

$(".btn-crust").click(function() {
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
  }
});
