// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-pepperonni").toggleClass("active");
  $(".pep").toggle();
  $(".panel.price ul li:nth-child(1)").toggle();
  //Change the price:
  var x = $("strong").html(); //Take out the $21 and declare it in a variable
  var price = parseInt(x.substring(1, x.length)-1); //Declare x is an Int, and will remove the first character $

  //Food Variables
  var cheesePizza = 10;

  $(".btn-pepperonni").click(function(event) {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".panel.price ul li:nth-child(1)").toggle();
    if ($(this).hasClass("active")) {
      price += 1;
      $("strong").html(price);
    }else {
      price -= 1;
      $("strong").html(price);
    }
  });
  $(".btn-mushrooms").click(function(event) {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $(".panel.price ul li:nth-child(2)").toggle();
    if ($(this).hasClass("active")) {
      price += 1;
      $("strong").html(price);
    }else {
      price -= 1;
      $("strong").html(price);
    }
  });
  $(".btn-green-peppers").click(function(event) {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $(".panel.price ul li:nth-child(3)").toggle();
    if ($(this).hasClass("active")) {
      price += 1;
      $("strong").html(price);
    }else {
      price -= 1;
      $("strong").html(price);
    }
  });
  $(".btn-sauce").click(function(event) {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".panel.price ul li:nth-child(4)").toggle();
    if ($(this).hasClass("active")) {
      price += 3;
      $("strong").html(price);
    }else {
      price -= 3;
      $("strong").html(price);
    }
  });
  $(".btn-crust").click(function(event) {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel.price ul li:nth-child(5)").toggle();
    if ($(this).hasClass("active")) {
      price += 5;
      $("strong").html(price);
    }else {
      price -= 5;
      $("strong").html(price);
    }
  });
});
