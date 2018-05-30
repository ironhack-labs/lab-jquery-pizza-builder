// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  //Default price
  var sumNum = 13
  $(".panel.price strong").replaceWith("<strong>$"+sumNum+"</strong>")
  
//make buttons active by default
  $(".btn-pepperonni").removeClass("active");
  $(".btn-green-peppers").removeClass("active");
  $(".btn-mushrooms").removeClass("active");

  //remove toppings when clicked on buttons
  $(".btn-pepperonni").on("click", function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".price li:nth-of-type(1)").toggle();
    if ($(".panel.controls ul li:nth-child(1) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
  });

  $(".btn-mushrooms").on("click", function() {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $(".price li:nth-of-type(2)").toggle();
    if ($(".panel.controls ul li:nth-child(2) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
  });

  $(".btn-green-peppers").on("click", function() {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:nth-of-type(3)").toggle();
    if ($(".panel.controls ul li:nth-child(3) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
  });

  //white sauce + crust
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
 //dont show by default
  $(".price li:nth-of-type(4)").toggle();
  $(".price li:nth-of-type(5)").toggle();

//when button clicked
  $(".btn-sauce").on("click", function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white", "sauce");
    $(".price li:nth-of-type(4)").toggle();
    if ($(".panel.controls ul li:nth-child(4) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum-=3))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum+=3))
    }
  });

  $(".btn-crust").on("click", function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free", "crust");
    $(".price li:nth-of-type(5)").toggle();
    if ($(".panel.controls ul li:nth-child(5) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum-=5))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum+=5))
    }
  });




});



