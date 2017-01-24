// Write your Pizza Builder JavaScript in this file.
var totalPrice = 21;
var pepPrice = 1;
var mushrm = 1;
var grnPepper = 1;
var whtSauce = 3;
var glutFree = 5;



$(".btn-pepperonni").on('click', function(){
  $(".btn-pepperonni").toggleClass("active");
  $(".pep").fadeToggle(100);
  if ($('.btn-pepperonni').hasClass('active')){
    totalPrice += pepPrice;
  }
  else{
    totalPrice -= pepPrice;
  }
  $("strong").empty();
  $("strong").append("$" + totalPrice);
});

$(".btn-mushrooms").on('click', function(){
  $(".btn-mushrooms").toggleClass("active");
  $(".mushroom").fadeToggle(100);
  if ($('.btn-mushrooms').hasClass('active')){
    totalPrice += mushrm;
  }
  else{
    totalPrice -= mushrm;
  }
  $("strong").empty();
  $("strong").append("$" + totalPrice);
});

$(".btn-green-peppers").on('click', function(){
  $(".btn-green-peppers").toggleClass("active");
  $(".green-pepper").fadeToggle(100);
  if ($('.btn-green-peppers').hasClass('active')){
    totalPrice += grnPepper;
  }
  else{
    totalPrice -= grnPepper;
  }
  $("strong").empty();
  $("strong").append("$" + totalPrice);
});


$(".btn-sauce").on("click", function(){
  $(".btn-sauce").toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  if ($('.btn-sauce').hasClass('active')){
    totalPrice += whtSauce;
  }
  else{
    totalPrice -= whtSauce;
  }
  $("strong").empty();
  $("strong").append("$" + totalPrice);
});

$(".btn-crust").on("click", function(){
  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  if ($('.btn-crust').hasClass('active')){
    totalPrice += glutFree;
  }
  else{
    totalPrice -= glutFree;
  }
  $("strong").empty();
  $("strong").append("$" + totalPrice);
});
