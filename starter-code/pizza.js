// Write your Pizza Builder JavaScript in this file.





$(document).ready(function() {
  
  $(".btn").toggleClass("active"); // Deactivate the button
  
  $(".pep").toggle();
  $( ".btn-pepperonni" ).click(function() {
    $(".btn-pepperonni").toggleClass("active");
   $(".pep").toggle();
   
});

$(".mushroom").toggle();
$( ".btn-mushrooms" ).click(function() {

  $(".mushroom").toggle();
  $(".btn-mushrooms ").toggleClass("active");
  
});


$(".green-pepper ").toggle();
$( ".btn-green-peppers" ).click(function() {
  $(".btn-green-peppers").toggleClass("active");
  $(".green-pepper ").toggle();
  
});

// $( ".btn-crust" ).click(function() {

//   $(".btn-crust").toggleClass("disabled");
  
// });

// Iteration 2: Sauce and crust options

$(".sauce").toggleClass("sauce-white"); 
$(".crust").toggleClass("crust-gluten-free"); 



$( ".btn-crust" ).click(function() {
  
  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free"); 
  
});

$( ".btn-sauce" ).click(function() {
  
  $(".btn-sauce").toggleClass("active");
  $(".sauce").toggleClass("sauce-white"); 
  
});


// Iteration 4
// $(".ing-Price  li:nth-child(1)").hide();
// $(".ing-Price  li:nth-child(2)").hide();
// $(".ing-Price  li:nth-child(3)").hide();
$(".ing-Price  li:nth-child(4)").hide();
$(".ing-Price  li:nth-child(5)").hide();

// $('.ing-Price li:gt(4)').hide();


});

