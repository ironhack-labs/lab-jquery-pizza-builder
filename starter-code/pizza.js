//1st iteration
function init() {
$( ".btn-pepperonni" ).on( "click", function() {
  $(".pep").toggle();
});
$( ".btn-mushrooms" ).on( "click", function() {
  $('.mushroom').toggle();
});
$( ".btn-green-peppers" ).on( "click", function() {
  $('.green-pepper').toggle();
});
//2nd Iteration
$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").on( "click", function() {
$('.crust').toggleClass("crust-gluten-free");
});

$(".sauce").removeClass("sauce-white");
$(".btn-sauce").on( "click", function() {

$('.sauce').toggleClass("sauce-white");
});

$(".btn-pepperonni").removeClass("active");
$(".btn-pepperonni").on( "click", function() {
  $('.btn-pepperonni').toggleClass("active");
});
  $(".btn-mushrooms").removeClass("active");
  $(".btn-mushrooms").on( "click", function() {
    $('.btn-mushrooms').toggleClass("active");
});
    $(".btn-green-peppers").removeClass("active");
    $(".btn-green-peppers").on( "click", function() {
    $('.btn-green-peppers').toggleClass("active");

});
$(".btn-crust").removeClass("active");
$(".btn-crust").on( "click", function() {
$('.btn-crust').toggleClass("active");

});
$(".btn-sauce").removeClass("active");
$(".btn-sauce").on( "click", function() {
$('.btn-sauce').toggleClass("active");

});
//iteration 3

}
$(document).ready(function() {
  init();
});
