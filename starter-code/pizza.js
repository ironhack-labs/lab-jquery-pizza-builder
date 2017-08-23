// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

$('.btn-pepperonni').on("click",function(){
  $(".pep").toggle();
  $("button.btn-pepperonni").toggleClass("active")
});



$(".btn-mushrooms").on("click", function(){
  $(".mushroom").toggle();
  $("button.btn-mushrooms").toggleClass("active")
});

$(".btn-green-peppers").on("click", function(){
  $(".green-pepper").toggle();
  $("button.btn-green-peppers").toggleClass("active")
})

});

$(".crust-gluten-free").removeClass("crust-gluten-free")
$(".sauce-white").removeClass("sauce-white");

$(".btn-crust").on("click", function(){
  $(".crust").addClass("crust-gluten-free");
});

$(".btn-sauce").on("click", function(){
  $(".sauce").addClass("sauce-white");
});
