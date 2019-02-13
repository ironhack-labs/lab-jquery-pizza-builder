// Write your Pizza Builder JavaScript in this file.
// itération 1 selectionner les éléments et les faire apparaitre ou disparaitre
{
  /* <li class="pricePep">$1 pepperonni</li>
        <li class="priceMush">$1 mushrooms</li>
        <li class="priceGreen">$1 green peppers</li>
        <li class="priceWhite">$3 white sauce</li>
        <li class="priceGlut">$5 gluten-free crust</li> */
}

var priceList = $("#priceList");
var price = 13;

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
$("strong").html(price);

btngreenpeppers.click(function() {
  greenpepper.toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".priceGreen").show();
    price += 1;
  } else if (!$(this).hasClass("active")) {
    $(".priceGreen").hide();
    price -= 1;
  }
  $("strong").html(price);
});

btnpepperonni.click(function() {
  pepperonni.toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".pricePep").show();
    price += 1;
  } else if (!$(this).hasClass("active")) {
    $(".pricePep").hide();
    price -= 1;
  }
  $("strong").html(price);
});
btnmushrooms.click(function() {
  mushroom.toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".priceMush").show();
    price += 1;
  } else if (!$(this).hasClass("active")) {
    $(".priceMush").hide();
    price -= 1;
  }
  $("strong").html(price);
});

// on cache les li
$(".priceWhite").hide();

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".priceWhite").show();
    price += 3;
  } else if (!$(this).hasClass("active")) {
    $(".priceWhite").hide();
    price -= 3;
  }
  $("strong").html(price);
});

// on cache les li
$(".priceGlut").hide();

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".priceGlut").show();
    price += 5;
  } else if (!$(this).hasClass("active")) {
    $(".priceGlut").hide();
    price -= 5;
  }
  $("strong").html(price);
});

// 4 PRIX
