// Write your Pizza Builder JavaScript in this file.
var cost = 13;
$(document).ready(function() {
  //Default
  $("section.sauce").toggleClass("sauce-white");
  $("section.crust").toggleClass("crust-gluten-free");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $("li:contains($3 white sauce)").hide();
  $("li:contains($5 gluten-free crust)").hide();
  $("strong").text(cost);
});

$(".btn-pepperonni").click(function() {
  $(".btn-pepperonni").toggleClass("active");
  if ($(".pep").is(":visible")) {
    $(".pep").hide();
    $("li:contains($1 pepperonni)").hide();
    updateCost("minus", 1);
  } else {
    $(".pep").show();
    $("li:contains($1 pepperonni)").show();
    updateCost("plus", 1);
  }
});

$(".btn-mushrooms").click(function() {
  $(".btn-mushrooms").toggleClass("active");
  if ($(".mushroom").is(":visible")) {
    $(".mushroom").hide();
    $("li:contains($1 mushrooms)").hide();
    updateCost("minus", 1);
  } else {
    $(".mushroom").show();
    $("li:contains($1 mushrooms)").show();
    updateCost("plus", 1);
  }
});

$(".btn-green-peppers").click(function() {
  $(".btn-green-peppers").toggleClass("active");
  if ($(".green-pepper").is(":visible")) {
    $(".green-pepper").hide();
    $("li:contains($1 green peppers)").hide();
    updateCost("minus", 1);
  } else {
    $(".green-pepper").show();
    $("li:contains($1 green peppers)").show();
    updateCost("plus", 1);
  }
});

$(".btn-sauce").click(function() {
  $(".btn-sauce").toggleClass("active");
  $("section.sauce").toggleClass("sauce-white");
  if ($(".btn-sauce").hasClass("active")) {
    $("li:contains($3 white sauce)").show();
    updateCost("plus", 3);
  } else {
    $("li:contains($3 white sauce)").hide();
    updateCost("minus", 3);
  }
});

$(".btn-crust").click(function() {
  $(".btn-crust").toggleClass("active");
  $("section.crust").toggleClass("crust-gluten-free");
  if ($(".btn-crust").hasClass("active")) {
    $("li:contains($5 gluten-free crust)").show();
    updateCost("plus", 5);
  } else {
    $("li:contains($5 gluten-free crust)").hide();
    updateCost("minus", 5);
  }
});

function updateCost(op, qty) {
  if (op == "plus") {
    cost += qty;
  } else {
    cost -= qty;
  }
  $("strong").text(cost);
}
