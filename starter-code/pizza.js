// Write your Pizza Builder JavaScript in this file.
var allPeppers = $(".green-pepper");
var allMushrooms = $(".mushroom");
var allPepperoni = $(".pep");
var currentTotal = 13;

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
  $("li:contains('green peppers')").toggleClass("not-show");
  updateCurrentTotal();
  printCurrentTotal();
});

$(".btn-mushrooms").click(function(){
  allMushrooms.toggle();
  $(this).toggleClass("active");
  $("li:contains('mushrooms')").toggleClass("not-show");
  updateCurrentTotal();
  printCurrentTotal();
});

$(".btn-pepperonni").click(function(){
  $(allPepperoni).toggle();
  $(this).toggleClass("active");
  $("li:contains('pepperonni')").toggleClass("not-show");
  updateCurrentTotal();
  printCurrentTotal();
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $("li:contains('gluten-free crust')").toggleClass("not-show");
  updateCurrentTotal();
  printCurrentTotal();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $("li:contains('white sauce')").toggleClass("not-show");
  updateCurrentTotal();
  printCurrentTotal();
});


function updateCurrentTotal() {
  var allIngredients = $(".panel.price li");
  var thisPrice = 10;
  allIngredients.each(function(){
    if ($(this).hasClass("not-show") === false) {
      switch($(this).text()){
        case "$1 pepperonni":
        case "$1 mushrooms":
        case "$1 green peppers":
          thisPrice += 1;
          break;
        case "$3 white sauce":
          thisPrice += 3;
          break;
        case "$5 gluten-free crust":
          thisPrice += 5;
          break;
      }
    }
  });
  currentTotal = thisPrice;
};


function printCurrentTotal() {
  $("#total-price").html(currentTotal);
};