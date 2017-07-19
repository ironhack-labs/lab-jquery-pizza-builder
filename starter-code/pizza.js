$(document).ready(function() {

// toggle everything off...
$(".sauce").toggleClass("sauce-white");
$(".crust").toggleClass("crust-gluten-free");
$(".btn").toggleClass("active");
$(".pep").toggle();
$(".green-pepper").toggle();
$(".mushroom").toggle();
$(".price li:eq(0)").toggle();
$(".price li:eq(1)").toggle();
$(".price li:eq(2)").toggle();
$(".price li:eq(3)").toggle();
$(".price li:eq(4)").toggle();
$(".price strong:eq(0)").text("Total: $10");

// create reprice function to reprice after button press......
reprice = function(){
  $(".price strong:eq(0)").text("Total: $" + grandTotal);
};
// grand total var.....
var grandTotal = 10;

// pepperoni button.....
$(".btn-pepperonni").on('click', function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  var itemPrice = 1;
  if($(".btn-pepperonni").hasClass("active")){
    $(".price li:eq(0)").toggle();
    grandTotal += itemPrice;
    reprice();
  }else{
    $(".price li:eq(0)").toggle();
    grandTotal -= itemPrice;
    reprice();
  }
});

// green-pepper button.......
$(".btn-green-peppers").on('click', function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  var itemPrice = 1;
  if($(".btn-green-peppers").hasClass("active")){
    $(".price li:eq(1)").toggle();
    grandTotal += itemPrice;
    reprice();
  }else{
    $(".price li:eq(1)").toggle();
    grandTotal -= itemPrice;
    reprice();
  }
});

// mushroom button......
$(".btn-mushrooms").on('click', function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  var itemPrice = 1;
  if($(".btn-mushrooms").hasClass("active")){
    $(".price li:eq(2)").toggle();
    grandTotal += itemPrice;
    reprice();
  }else{
    $(".price li:eq(2)").toggle();
    grandTotal -= itemPrice;
    reprice();
  }
});

// sauce button......
$(".btn-sauce").on('click', function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  var itemPrice = 3;
  if($(".btn-sauce").hasClass("active")){
    $(".price li:eq(3)").toggle();
    grandTotal += itemPrice;
    reprice();
  }else{
    $(".price li:eq(3)").toggle();
    grandTotal -= itemPrice;
    reprice();
  }
});

// crust button......
$(".btn-crust").on('click', function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  var itemPrice = 5;
  if($(".btn-crust").hasClass("active")){
    $(".price li:eq(4)").toggle();
    grandTotal += itemPrice;
    reprice();
  }else{
    $(".price li:eq(4)").toggle();
    grandTotal -= itemPrice;
    reprice();
  }
});

// end....
});
