// Write your Pizza Builder JavaScript in this file.
var priceTotal;

$(document).ready(function() {
  var array = $(".panel.price b")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));
  priceTotal = num;
  $(".panel.price strong").text(`$${priceTotal}`);
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".panel.price li:gt(2)").hide();

});

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".panel.price li:eq(0)").toggle();

  var array = $(".panel.price li:eq(0)")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));

  changeButton(".btn-pepperonni", num);
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".panel.price li:eq(1)").toggle();

  var array = $(".panel.price li:eq(1)")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));
  changeButton(".btn-mushrooms", num);
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".panel.price li:eq(2)").toggle();

  var array = $(".panel.price li:eq(2)")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));
  changeButton(".btn-green-peppers", num);
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".panel.price li:eq(3)").toggle();

  var array = $(".panel.price li:eq(3)")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));
  changeButton(".btn-sauce", num);
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".panel.price li:eq(4)").toggle();

  var array = $(".panel.price li:eq(4)")
    .text()
    .split(" ", 1)[0];
  var num = parseInt(array.substr(1, array.length - 1));
  changeButton(".btn-crust", num);
});

function changeButton(button, price) {
  if ($(button).hasClass("active")) {
    changePriceTotal("plus", price);
  } else {
    changePriceTotal("minus", price);
  }
}

function changePriceTotal(operation, price) {
  if (operation === "plus") {
    priceTotal += price;
  } else {
    priceTotal -= price;
  }
  num = 0;

  $(".panel.price strong").text(`$${priceTotal}`);
}

// });