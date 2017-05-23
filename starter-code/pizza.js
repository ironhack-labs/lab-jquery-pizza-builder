// $(document).ready(function(){ **********************************ASK WHEN THIS IS NECESSARY

/*ITERATION 1*/
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  // $(this).removeClass("active");

});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
});


$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
});

/*
ITERATION 2
 */
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
});
