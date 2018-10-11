// Write your Pizza Builder JavaScript in this file.


var classNames = [
  {name: $(".btn-pepperonni"), price: 1 },
  {name: $(".btn-mushrooms"), price: 1 },
  {name: $(".btn-green-peppers"), price: 1 },
  {name: $(".btn-sauce"), price: 3 },
  {name: $(".btn-crust"), price: 5 },
]

$(".btn-pepperonni").click(function() {
  $(".btn-pepperonni").toggleClass("active")
  $(".pep").toggle()
  $("#pep-price").toggle()
  updatePrice(classNames)
});

$(".btn-mushrooms").click(function() {
  $(".btn-mushrooms").toggleClass("active")
  $(".mushroom").toggle()
  $("#mushroom-price").toggle()
  updatePrice(classNames)
});

$(".btn-green-peppers").click(function() {
  $(".btn-green-peppers").toggleClass("active")
  $(".green-pepper").toggle()
  $("#green-peppers-price").toggle()
  updatePrice(classNames)
});

$(".btn-sauce").click(function() {
  $(".btn-sauce").toggleClass("active")
  $(".sauce").toggleClass("sauce-white")
  $("#white-sauce-price").toggle()
  updatePrice(classNames)
});

$(".btn-crust").click(function() {
  $(".btn-crust").toggleClass("active")
  $(".crust").toggleClass("crust-gluten-free")
  $("#gluten-free-price").toggle()
  updatePrice(classNames)
});


function updatePrice(classNames) {
  var total  = 10;
  for ( var i = 0 ; i < object.length ; I++) {
    if (classNames[i].name.hasClass("active")) {
    total += classNames[i].price
  }
}
var displayedTotalPrice = $("#total-price").text(total + "$");
return displayedTotalPrice;
}






