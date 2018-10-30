$(document).ready(function (){

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
})

$(".btn-mushrooms").click(function() {
    $(".mushroom div").toggle();
    $(".btn-mushrooms").toggleClass("active");
})

$(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
})

$(".sauce-white").removeClass("sauce-white");
$(".crust-gluten-free").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");


$(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
})

$(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
})

$(".price li:nth-child(4)").remove();
$(".price li:nth-child(4)").remove();



})