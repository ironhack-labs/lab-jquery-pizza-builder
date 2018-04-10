// Write your Pizza Builder JavaScript in this file.

$( document ).ready(function() {

  $(".active").toggleClass("active");
  $(".btn-pepperonni").toggleClass("active");
  $(".btn-mushrooms").toggleClass("active");
  $(".btn-green-peppers").toggleClass("active");
  $("#white").toggle();
  $("#gluten").toggle();


// Add/Remove Toppings
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(this).toggleClass("active"); 
    $("#pep").toggle();
    if ($(".btn-pepperonni").hasClass("active")) {
      base += 1;
    } else {
      base -= 1
    }
    $("strong").html("$" + base);
  }); 

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(this).toggleClass("active"); 
    $("#mushroom").toggle();
    if ($(".btn-mushrooms").hasClass("active")) {
      base += 1;
    } else {
      base -= 1
    }
    $("strong").html("$" + base);
  }); 

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(this).toggleClass("active"); 
    $("#grnpep").toggle();
    if ($(".btn-green-peppers").hasClass("active")) {
      base += 1;
    } else {
      base -= 1
    }
    $("strong").html("$" + base);
  }); 


// Add/Remove Sauce and Crust
  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active"); 
    $("#white").toggle();
    
    if ($(".btn-sauce").hasClass("active")) {
      base += 3;
    } else {
      base -= 3
    }
    $("strong").html("$" + base);
  }); 

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active"); 
    $("#gluten").toggle();

    if ($(".btn-crust").hasClass("active")) {
      base += 5;
    } else {
      base -= 5
    }
    $("strong").html("$" + base);
  }); 


// Calculate Price
var base = 13;
$(".price > strong").text("$13");



});



