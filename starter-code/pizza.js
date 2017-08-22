// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

$('.btn-pepperonni').on("click",function(){
  $(".pep").toggle();
});

$(".btn-mushrooms").on("click", function(){
  $(".mushroom").toggle();
});

$(".btn-green-peppers").on("click", function(){
  $(".green-pepper").toggle();
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
