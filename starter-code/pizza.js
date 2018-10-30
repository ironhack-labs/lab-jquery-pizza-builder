// Write your Pizza Builder JavaScript in this file.
$(function() {
  // alert("DOM is Loaded");
  $(".btn-pepperonni").toggleClass("active");
  $(".btn-mushrooms").toggleClass("active");
  $(".btn-green-peppers").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $(".sauce").toggleClass("sauce-white");
  $(".price > ul > li:eq(3)").toggle();
  $(".price > ul > li:eq(4)").toggle();

  $("aside > strong")


  // var pizzaDrawing = $("#pizza > .pep, #pizza > .mushroom, #pizza > .green-pepper");
  // pizzaDrawing.hide();
  $(".btn-pepperonni").click(function () {
   $("#pizza > .pep").toggle();
   $(".btn-pepperonni").toggleClass("active");
   $(".price > ul > li:eq(0)").toggle();
   totalPrice();
  });

  $(".btn-mushrooms").click(function () {
    $("#pizza > .mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price > ul > li:eq(1)").toggle();
    totalPrice();
   });

  $(".btn-green-peppers").click(function () {
    $("#pizza > .green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price > ul > li:eq(2)").toggle();
    totalPrice();
   });

  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price > ul > li:eq(3)").toggle();
    totalPrice();
  });

  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price > ul > li:eq(4)").toggle();
    totalPrice();
});

function totalPrice() {
  var precioBase = parseInt($(".price b").text().match(/\d+/)[0]);
  console.log(precioBase);
  var activePrice = $(".price li:visible")
  for (i = 0; i < activePrice.length; i++) {
    precioBase += parseInt($(activePrice[i]).text().match(/\d+/)[0]);
    console.log(precioBase);
  }
  $("strong").text("$"+ precioBase);
  console.log(activePrice);
}
totalPrice()
})


  

  

