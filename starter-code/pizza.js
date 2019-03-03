// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');
    $('.btn-mushrooms').removeClass('active');
    $('.btn-pepperonni').removeClass('active');
    $('.btn-green-peppers').removeClass('active');
    $('.price li:contains("white sauce")').toggle();
    $('.price li:contains("gluten-free")').toggle();
    $('.price strong').text("$"+ pizzaPrice);
});
  
var pizzaPrice = 13
function totalPrice (x,y){
    if ($(x).hasClass('active')) {
      pizzaPrice = pizzaPrice - y;
      } else {
        pizzaPrice = pizzaPrice + y;
        }
     console.log(pizzaPrice);
  
      $('.price strong').text("$"+ pizzaPrice)
    };
  
  
  
$(".btn").click(function () {
    $(this).toggleClass('active');
});
  
$(".btn-mushrooms").click(function () {
    $('.cap').toggle();
    $('.stem').toggle();
    $('.price li:contains("mushrooms")').toggle();
    totalPrice ('.btn-mushrooms',1);
});
  
$(".btn-pepperonni").click(function () {
    $('.pep').toggle();
    $('.price li:contains("pepperonni")').toggle();
    totalPrice ('.btn-pepperonni',1);
});
  
$(".btn-green-peppers").click(function () {
    $('.green-pepper').toggle();
    $('.price li:contains("green peppers")').toggle();
    totalPrice ('.btn-green-peppers',1);
});
  
  
$(".btn-sauce").click(function () {
    $('.sauce').toggleClass('sauce-white');
    $('.price li:contains("white sauce")').toggle();
    totalPrice ('.btn-sauce',3);
});  
  
$(".btn-crust").click(function () {
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:contains("gluten-free")').toggle();
    totalPrice ('.btn-crust',5);
});