// Write your Pizza Builder JavaScript in this file.
// $(document).ready(function(){

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
});
$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
});
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
});

$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

});

$(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
});

$(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
});


// });
