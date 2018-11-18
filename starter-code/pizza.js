// Write your Pizza Builder JavaScript in this file.
$(function () { 
$( ".btn-pepperonni" ).click(function() {
  $(".pep").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 pepperonni')").toggle();
});

$( ".btn-mushrooms" ).click(function() {
  $(".mushroom").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 mushrooms')").toggle();
});

$( ".btn-green-peppers" ).click(function() {
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
  $("li:contains('$1 green peppers')").toggle();
});

$(".btn-crust").toggleClass("active");
$(".crust").toggleClass("crust-gluten-free");
$("li:contains('$5 gluten-free crust')").hide();

$( ".btn-crust" ).click(function() {
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $("li:contains('$5 gluten-free crust')").toggle();
});

$(".btn-sauce").toggleClass("active");
$(".sauce").toggleClass("sauce-white");
$("li:contains('$3 white sauce')").hide();

$( ".btn-sauce" ).click(function() {
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $("li:contains('$3 white sauce')").toggle();
});

var totalBill = 10;
$(".panel .price strong").text("$13");


function updatePrice(){
  $(".btn").click(function() {
    $( ".panel.price li:visible" ).each(function() {
      var priceUnd = parseInt($(this).text().substr(1,1));
      totalBill += priceUnd;
      });
    $(".panel.price strong").text("$" + totalBill);
    totalBill = 10;
    })
  }
  updatePrice();
})
  

