// Write your Pizza Builder JavaScript in this file.
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
//SET PIZZA DEFAULTS -----------------
$(".price li:nth-child(4)").toggle();
$(".price li:nth-child(5)").toggle();
$(".price strong").text('$13');


$(document).ready(function() {
  //add toppings when requested
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    console.log("add pep");
    $(".price li:nth-child(1)").toggle();
  });
  $(".btn-mushrooms").click(function() {
    $(".price li:nth-child(2)").toggle();
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    console.log("add pep");
  });
  $(".btn-green-peppers").click(function() {
    $(".price li:nth-child(3)").toggle();
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    console.log("add pepper");
  });
  //ITERATION 2 - Sauce Crust toggle white sauce and gluten free
  //$("button").click(function(){
  //    $("p").toggleClass("main");
  //});

  $(".btn-sauce").click(function() {
    $(".price li:nth-child(4)").toggle();
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    console.log("change sauce");
  });

  $(".btn-crust").click(function() {
    $(".price li:nth-child(5)").toggle();
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    console.log("change crust");
  });

  //ITERATION 3 ---------------------
  //toggle active added in buttons

  //ITERATION 4--------
  // set price display in buttons

  //ITERATION 5-----
  // correct price display
  $(".btn").click(function() {
  // Calculate pizza price with if tree 
    var pizzaPrice = 10;
    if ($(".btn-pepperonni").hasClass("active")) {
      pizzaPrice += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
      pizzaPrice += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")) {
      pizzaPrice += 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
      pizzaPrice += 3;
    }
    if ($(".btn-crust").hasClass("active")) {
      pizzaPrice += 5;
    }
  // Update pizza price
    $(".price strong").text('$'+pizzaPrice);
  });

  //$("button[name]").on("click", function() {
  //
  //  if(!$(this).hasClass('active')) {
  //      total += Number($(this).val());
  //      $(this).addClass('active').html("remove " + $(this).attr("title"));
  //  } else {
  //      total -= Number($(this).val());
  //      $(this).removeClass('active').html("add " + $(this).attr("title"));
  //  }
  
  // END OF DOCUMENT READY COMMMAND - DO NOT CODE BELOW HERE!
});
