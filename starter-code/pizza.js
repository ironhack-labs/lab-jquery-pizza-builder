// Iteration 1
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $("li:contains($1 pepperonni)").toggle();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $("li:contains($1 mushrooms)").toggle();
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $("li:contains($1 green peppers)").toggle();
});

// Iteration 2

// change default class sauce-button
$(".sauce").removeClass("sauce-white");

// on-click
$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $("li:contains(white)").toggle();

  // why does this not work?
  if ($(".btn-sauce").html("White sauce")) {
    $(".btn-sauce").html("Red sauce");
  } else if ($(".btn-sauce").html("Red sauce")) {
    $(".btn-sauce").html("White sauce");
  }
});

// change default class crust-button

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $("li:contains($5 gluten-free crust)").toggle();
 
  // same as above, does not work
  if ($(".btn-crust").text("Gluten-free crust")) {
    $(".btn-crust").text("Normal crust");
  } else if ($(".btn-crust").text("Normal crust")) {
    $(".btn-crust").text("Gluten-free crust");
  }
});

// Iteration 3

$("button").removeClass("active");
$("button").click(function(event) {
  $(this).toggleClass("active");
});

// Iteration 4

$("li:contains(white)").hide();
$("li:contains($5 gluten-free crust)").hide();

// Iteration 5

$("strong").html(10);
