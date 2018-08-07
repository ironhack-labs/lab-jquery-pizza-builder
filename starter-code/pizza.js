// Write your Pizza Builder JavaScript in this file.
// add toppings
// $("#hide").click(function(){
//     $("p").hide();
// });
//
// $("#show").click(function(){
//     $("p").show();
// });

//clear the pizza
//$("#pizza")
//  .children(".mushroom")
//  .hide();
//$("#pizza")
//  .children(".pep")
//  .hide();
//$("#pizza")
//  .children(".green-pepper")
//  .hide();
$('.price li:nth-child(4)').toggle();    
$('.price li:nth-child(5)').toggle(); 
$('price strong').val('look')


$(document).ready(function() {
  //add toppings when requested
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");  
    $(".pep").toggle();
    console.log("add pep");
    $('.price li:nth-child(1)').toggle();
  });
  $(".btn-mushrooms").click(function() {
    $('.price li:nth-child(2)').toggle();
    $(this).toggleClass("active");  
    $(".mushroom").toggle();
    console.log("add pep");
  });
  $(".btn-green-peppers").click(function() {
    $('.price li:nth-child(3)').toggle();
    $(this).toggleClass("active");      
    $(".green-pepper").toggle();
    console.log("add pepper");
  });
  //ITERATION 2 - Sauce Crust toggle white sauce and gluten free
  //$("button").click(function(){
  //    $("p").toggleClass("main");
  //});

  $(".btn-sauce").click(function() {
    $('.price li:nth-child(4)').toggle();    
    $(this).toggleClass("active");      
    $(".sauce").toggleClass("sauce-white");
    console.log("change sauce");
  });

  $(".btn-crust").click(function() {
    $('.price li:nth-child(5)').toggle();
    $(this).toggleClass("active");      
    $(".crust").toggleClass("crust-gluten-free");
    console.log("change crust");
  });

//ITERATION 3 ---------------------
//toggle active added in buttons

//ITERATION 4--------
// set price display

//ITERATION 5-----
// correct price display
// use nth child of li's to add prices
var pizzaPrice = 10 + 1 + 1 + 1 + 3 +5;
$('.price strong').text('pizzaPrice')
  // END OF DOCUMENT READY COMMMAND - DO NOT CODE BELOW HERE!
});
