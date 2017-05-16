// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

$(".btn-pepperonni").on("click", function() {
  $(this).toggleClass("active");
    $(".pep").toggle()
    $(".price ul li:first-child").toggle()
     });

$(".btn-mushrooms").on("click", function() {
   $(this).toggleClass("active");
   $(".mushroom").toggle()
     $(".price ul li:nth-child(2)").toggle()
    });

$(".btn-green-peppers").on("click", function() {
  $(this).toggleClass("active");
  $(".green-pepper").toggle()
   });

$(".btn-sauce").on("click", function() {
   $(this).toggleClass("active");
   $(".sauce").toggle()
    });

$(".btn-crust").on("click", function() {
  $(this).toggleClass("active");
  $(".crust").toggle()
   });

$(".btn-pepperonni").html("Pepperoni");

$(".btn-mushrooms").html("Mushrooms");

$(".btn-green-peppers").html("Green peppers");

$(".btn-sauce").html("White Sauce");

$(".btn-crust").html("Gluten-Free Crust");


});
