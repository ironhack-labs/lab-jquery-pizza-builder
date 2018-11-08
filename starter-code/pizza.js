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
  $("aside li:nth-child(4)").show();

  if ($("aside li:nth-child(4)").text() === "$3 white sauce") {
    $("aside li:nth-child(4)").text("$3 red sauce");
  } else if ($("aside li:nth-child(4)").text() === "$3 red sauce") {
    $("aside li:nth-child(4)").text("$3 white sauce");
  }

  if ($(".btn-sauce").html() === "White sauce") {
    $(".btn-sauce").html("Red sauce");
  } else if ($(".btn-sauce").html() === "Red sauce") {
    $(".btn-sauce").html("White sauce");
  }
});

// change default class crust-button

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $("aside li:last").show();

  if ($("aside li:last").text() === "$5 gluten-free crust") {
    $("aside li:last").text("$5 normal crust");
  } else if ($("aside li:last").text() === "$5 normal crust") {
    $("aside li:last").text("$5 gluten-free crust");
  }

  // this for some reason affect the CSS buttons
  if ($(".btn-crust").text() === "Gluten-free crust") {
    $(".btn-crust").text("Normal crust");
  } else if ($(".btn-crust").text() === "Normal crust") {
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

var price = 10; 

// $("strong").html(10);
