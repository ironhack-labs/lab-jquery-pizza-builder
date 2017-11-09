// Write your Pizza Builder JavaScript in this file.

var p1 = 1
//Three ingredients
$(".btn-pepperonni").click(function () {
  $(".pep").toggle(".pep");
  $(this).toggleClass("active");
  $("aside ul li:nth-child(1)").toggle();

});


$(".btn-mushrooms").click(function () {
  $(".mushroom").toggle(".mushroom");
  $(this).toggleClass("active");
  $("aside ul li:nth-child(2)").toggle();
});


$(".btn-green-peppers").click(function () {
  $(".green-pepper").toggle(".green-pepper");
  $(this).toggleClass("active");
  $("aside ul li:nth-child(3)").toggle();
});


//Options - Default values
$(".sauce").toggleClass("sauce-white");
$("aside ul li:nth-child(4)").toggle();

$(".crust").toggleClass("crust-gluten-free");
$("aside ul li:nth-child(5)").toggle();



$(".btn-crust").click(function () {
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $("aside ul li:nth-child(5)").toggle();
});


$(".btn-sauce").click(function () {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $("aside ul li:nth-child(4)").toggle();
});


function priceOne() {
  if ($(".btn-pepperonni").hasClass("active")) {
    var p1 = 1
  }
  else {
    p1 = 0
  }
  return p1;
}

function priceTwo() {
  if ($(".btn-mushrooms").hasClass("active")) {
    var p2 = 1
  }
  else {
    p2 = 0
  }
  return p2;
}


function priceThree() {
  if ($(".btn-green-peppers").hasClass("active")) {
    var p3 = 1
  }
  else {
    p3 = 0
  }
  return p3;
}


var tot = priceOne() + priceTwo() + priceThree();
$("aside strong").text("$" + (10 + tot));
