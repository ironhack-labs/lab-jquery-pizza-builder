// Write your Pizza Builder JavaScript in this file.


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


// .replace(/[^0-9]/g,'')

if ($(".btn-pepperonni").hasClass("active")) {
  var temp1 = $("aside ul li:nth-child(1)").text();
  var p1 = "temp1".replace(/[^0-9]/g,'');
}
else {
  p1 = 0
}

if ($(".btn-mushrooms").hasClass("active")) {
  var temp2 = $("aside ul li:nth-child(2)").text();
  var p2 = "temp2".replace(/[^0-9]/g,'');
}
else {
  p2 = 0
}

if ($(".btn-green-peppers").hasClass("active")) {
  var temp3 = $("aside ul li:nth-child(3)").text();
  var p3 = "temp3".replace(/[^0-9]/g,'');
}
else {
  p3 = 0
}

var tot = p1 + p2 + p3;
$("aside strong").text("$" + tot);

// if ($(".btn-sauce").hasClass("active")) {
//   var temp4 = $("aside ul li:nth-child(4)");
//   var p4 = "temp4".replace(/[^0-9]/g,'');
// }
//
// if ($(".btn-crust").hasClass("active")) {
//   var temp5 = $("aside ul li:nth-child(5)");
//   var p5 = "temp5".replace(/[^0-9]/g,'');
// }
