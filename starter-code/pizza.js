// Once the HTML document is "ready" use this JavaScript file to do cool stuff.
$(document).ready(function(){

// Default Pizza
  $('.btn').toggleClass('active'); // Makes all buttons inactive by default.

  // Hide these three ingredients by default.
  $('.mushroom').hide();
  $('.green-pepper').hide();
  $('.pep').hide();

  // Helping set default pizza by having the regular sauce and crust come up.
  $('.sauce').toggleClass("sauce-white");
  $('.crust').toggleClass("crust-gluten-free");

  // Removes list items for white sauce and crust by default.
  $("aside > ul > li:contains(white sauce)").hide();
  $("aside > ul > li:contains(crust)").hide();

  // Sets the base price to $10.
  $("strong").text("$10");
  
  // Allows for button to toggle pepperoni and returns the new totalPrice based on price of adding pepperoni.
  $('.btn-pepperonni').click(function() {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    if($(".btn-pepperonni").hasClass("active")) {
      totalPrice += 1
    }
    else {
      totalPrice -= 1
    }
    $("strong").html("$" + totalPrice);
  }) 

  // Allows for button to toggle mushrooms and returns the new totalPrice based on price of adding mushrooms.
  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    if($(".btn-mushrooms").hasClass("active")) {
      totalPrice += 1;
    }
    else {
      totalPrice -= 1;
    }
    $("strong").html("$" + totalPrice);
  }) 

  // Allows for button to toggle peppers and returns the new totalPrice based on price of adding peppers.
  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    if($(".btn-green-peppers").hasClass("active")) {
      totalPrice += 1;
    }
    else {
      totalPrice -= 1;
    }
    $("strong").html("$" + totalPrice);
  }) 

  // Allows for button to toggle sauce and returns the new totalPrice based on price of adding sauce.
  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $("aside > ul > li:contains(white sauce)").toggle();
    if($(".btn-sauce").hasClass("active")) {
      totalPrice += 3;
    }
    else {
      totalPrice -= 3;
    }
    $("strong").html("$" + totalPrice);
  }) 

  // Allows for button to toggle crust and returns the new totalPrice based on price of adding crust.
  $('.btn-crust').click(function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $("aside > ul > li:contains(crust)").toggle();
    if($(".btn-crust").hasClass("active")) {
      totalPrice += 5;
    }
    else {
      totalPrice -= 5;
    }
    $("strong").html("$" + totalPrice);
  }) 
  // Sets the default totalPrice to $10.
  var totalPrice = 10;
});
