// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
$(".btn-pepperonni").on("click", function(){
  /*if($(this).hasClass('active')){
    $(".pep").hide();
  } else {
    $(".pep").show();
  }*/
  $(this).toggleClass("active");
  $(".pep").toggle();
  $("aside ul li:nth-child(1)").toggle();

});

$(".btn-mushrooms").on("click", function(){
  $(this).toggleClass("active");
  $(".mushroom").toggle();
  $("aside ul li:nth-child(2)").toggle();

});

$(".btn-green-peppers").on("click", function(){
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
  $("aside ul li:nth-child(3)").toggle();
});

$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$("aside ul li:nth-child(4)").hide();
$("aside ul li:nth-child(5)").hide();

$(".btn-sauce").on("click", function(){
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $("aside ul li:nth-child(4)").toggle();

});

$(".btn-crust").on("click", function(){
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $("aside ul li:nth-child(5)").toggle();
});




});
