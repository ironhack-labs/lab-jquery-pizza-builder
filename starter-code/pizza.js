// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $("#pizza .green-pepper").hide();
  $("#pizza .mushroom").hide();
  $("#pizza .pep").hide();
  $("#pizza .crust .sauce-white").hide();
  $("#pizza .crust .cheese").hide();
  $(".btn-mushrooms").toggleClass("active");
  $(".btn-pepperonni").toggleClass("active");
  $(".btn-green-peppers").toggleClass("active");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".price li, .price b").hide();
  $(".price li").hide();
  $(".price strong").text("$10");
});

// The text() method sets or returns the text content of the selected elements.
// When this method is used to return content, it returns the text content of all matched elements (HTML markup will be removed).
// When this method is used to set content, it overwrites the content of ALL matched elements

$(".btn-pepperonni").click(function(){
  var priceString = $(".price strong").text();
  var price = parseInt(priceString.replace("$",""));

// The parseInt() function parses a string and returns an integer.

  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .pep").show("");
    $(".price li:nth-child(1)").show(""); // las comillas hacen que el show tenga más flow
    $(".price strong").text("$" + (price+1));
  } else {
    $("#pizza .pep").hide("");
    $(".price li:nth-child(1)").hide("");
    $(".price strong").text("$" + (price-1));

  }
});

$(".btn-mushrooms").click(function(){
  var priceString = $(".price strong").text();
  var price = parseInt(priceString.replace("$",""));

  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .mushroom").show("");
    $(".price li:nth-child(2)").show("");
    $(".price strong").text("$" + (price+1));
  } else {
    $("#pizza .mushroom").hide("");
    $(".price li:nth-child(2)").hide("");
    $(".price strong").text("$" + (price-1));

  }
});

$(".btn-green-peppers").click(function(){
  var priceString = $(".price strong").text();
  var price = parseInt(priceString.replace("$",""));

  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .green-pepper").show("");
    $(".price li:nth-child(3)").show("");
    $(".price strong").text("$" + (price+1));
  } else {
    $("#pizza .green-pepper").hide("");
    $(".price li:nth-child(3)").hide("");
    $(".price strong").text("$" + (price-1));
  }
});

$(".btn-sauce").click(function() {
  var priceString = $(".price strong").text();
  var price = parseInt(priceString.replace("$",""));

  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .crust .sauce-white").show("");
    $(".price li:nth-child(4)").show("");
    $(".price strong").text("$" + (price+3));
  } else {
    $("#pizza .crust .sauce-white").hide("");
    $(".price li:nth-child(4)").hide("");
    $(".price strong").text("$" + (price-3));
  }
});

$(".btn-crust").click(function() {
  var priceString = $(".price strong").text();
  var price = parseInt(priceString.replace("$",""));

  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .crust .cheese").show("");
    $(".price b").show("");
    $(".price strong").text("$" + (price+5));
  } else {
    $("#pizza .crust .cheese").hide("");
    $(".price b").hide("");
    $(".price strong").text("$" + (price-5));
  }
});
