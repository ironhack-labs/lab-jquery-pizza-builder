// Write your Pizza Builder JavaScript in this file.
// $(document).ready(function(){

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
});
$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
});
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();

$(".btn-pepperonni").toggleClass("active");
});

$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");


});

$(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
});

$(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");

});

function changeButton(){

}
// });
