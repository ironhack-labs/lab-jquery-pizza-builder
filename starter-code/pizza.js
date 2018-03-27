// Write your Pizza Builder JavaScript in this file.
"use strict"

$(".pep, .green-pepper, .mushroom").hide();

$(".btn-pepperonni").click(function(){
  $('.pep').toggle();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
});

$(".btn-crust").click(function() {
  $(".crust-gluten-free").toggle();
});

$(".btn-sauce").click(function() {
  $(".sauce-white").toggle();
});




/*
btn - mushrooms;
btn - green - peppers;
btn - sauce;
btn - crust;

*/