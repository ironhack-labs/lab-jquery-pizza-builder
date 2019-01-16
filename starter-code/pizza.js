//
$(".mushroom").hide();
$(".pep").hide();
$(".green-pepper").hide();
$(".btn-mushrooms").removeClass("active");
$(".btn-green-peppers").removeClass("active");
$(".btn-pepperonni").removeClass("active");

// setting crust to crust only
$(".crust").removeClass("crust-gluten-free");
// switching w/o gluten
$(".btn-crust").click(function() {
  if ($(".crust-gluten-free")[0]) {
    $(".crust").removeClass("crust-gluten-free");
  } else {
    $(".crust").addClass("crust-gluten-free");
  }
});

// setting sauce to sauce by default
$(".sauce").removeClass("sauce-white");
// switching w/o white
$(".btn-sauce").click(function() {
  if ($(".sauce-white")[0]) {
    $(".sauce").removeClass("sauce-white");
  } else {
    $(".sauce").addClass("sauce-white");
  }
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  if ($(".green-pepper").is(":hidden")) {
    $(".btn-green-peppers").removeClass("active");
  } else {
    $(".btn-green-peppers").addClass("active");
  }
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  if ($(".mushroom").is(":hidden")) {
    $(".btn-mushrooms").removeClass("active");
  } else {
    $(".btn-mushrooms").addClass("active");
  }
});

$(".btn-pepperonni").click(function() {
  $(".pepperonni").toggle();
  if ($(".pepperonni").is(":hidden")) {
    $(".btn-pepperonni").removeClass("active");
  } else {
    $(".btn-pepperonni").addClass("active");
  }
});
