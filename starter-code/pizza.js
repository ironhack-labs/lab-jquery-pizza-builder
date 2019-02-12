// Write your Pizza Builder JavaScript in this file.
// itération 1 selectionner les éléments et les faire apparaitre ou disparaitre

var greenpepper = $(".green-pepper");
var btngreenpeppers = $(".btn-green-peppers ");

var btnpepperonni = $(".btn-pepperonni");
var pepperonni = $(".pep");

var mushroom = $(".mushroom");
var btnmushrooms = $(".btn-mushrooms");

// cacher
// btngreenpeppers.click(() => greenpepper.toggle());
// btnpepperonni.click(() => pepperonni.toggle());
// btnmushrooms.click(() => mushroom.toggle());

// irération 2

// $(".btn-sauce").click(() => $(".sauce").toggleClass("sauce-white"));
// $(".btn-crust").click(() => $(".crust").toggleClass("crust-gluten-free"));

// itération 3: remove or add active if the element is therer or not

btngreenpeppers.click(function() {
  greenpepper.toggle();
  $(this).toggleClass("active");
});

btnpepperonni.click(function() {
  pepperonni.toggle();
  $(this).toggleClass("active");
});
btnmushrooms.click(function() {
  mushroom.toggle();
  $(this).toggleClass("active");
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $("this").toggleClass("active");
});
$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
});

// 4
