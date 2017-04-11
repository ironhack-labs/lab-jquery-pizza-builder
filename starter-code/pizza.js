// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {  
var total = 13;
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");
$('.btn-sauce').removeClass("active");
$('.btn-crust').removeClass("active");
$(".price li:nth-child(4)").toggle();
$(".price li:nth-child(5)").toggle();
$(".price strong").html("$"+total);
//$(".crust-sauce-white").removeClass();

$('.btn-sauce').on("click", function(){
  $(".sauce").toggleClass("sauce-white");
  $('.btn-sauce').toggleClass("active");
  $(".price li:nth-child(4)").toggle();
  calculatePrice(3, ".price li:nth-child(4)");

});


$('.btn-crust').on("click", function(){
  $(".crust").toggleClass("crust-gluten-free");
  $('.btn-crust').toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    calculatePrice(5, ".price li:nth-child(5)");

});

$('.btn-pepperonni').on("click", function(i){
  $(".pep").toggle();
  $('.btn-pepperonni').toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    calculatePrice(1, ".price li:nth-child(1)");
});

$('.btn-mushrooms').on("click", function(i){
  $(".mushroom").toggle();
  $('.btn-mushrooms').toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    calculatePrice(1, ".price li:nth-child(2)");
});

$('.btn-green-peppers').on("click", function(i){
  $(".green-pepper").toggle();
  $('.btn-green-peppers').toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    calculatePrice(1, ".price li:nth-child(3)");
});

function calculatePrice(updatePrice, onOff){
  if($(onOff).is(':visible')){
    total += updatePrice;
    $(".price strong").html("$"+ total);
  }
  else {
    total-=updatePrice;
    $(".price strong").html("$"+ total);
  }
}


});
