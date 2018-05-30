
$(document).ready(function() {

  var sumNum = 13;

   // Ingredients and prices
   $(".price ul li:nth-child(4), .price ul li:nth-child(5)").hide(); //By defaulthiding the elements from the list of prices on the right.

  // buttons weird
  $(".btn-sauce, .btn-crust").toggleClass("active"); //Added this so that the two last buttons are by default "up", and not down.

  //When we click either of buttons, the following things happen:
  //- a toggle-function that makes the button visually up and down on click
  //- a toggle that shows or hides the respective ingredient on the pizza
  //- a toggle-function that hides or shows the respective list item
  //a final if-else that adds or subtracts the price of the item depending on whether the button is currently "up" or "down."

  //pepperoni disappears or appears, whatever
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".price ul li:nth-child(1)").toggle();
    if ($(".panel.controls ul li:nth-child(1) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

    //mushrooms disappear or appear, whatever
  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $(".price ul li:nth-child(2)").toggle();
    if ($(".panel.controls ul li:nth-child(2) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

    //green peppers disappear or appear, whatever
  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $(".price ul li:nth-child(3)").toggle();
    if ($(".panel.controls ul li:nth-child(3) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

  //other buttons: sauce
  $(".sauce").removeClass("sauce-white"); //This removes white sauce by default.

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").toggle();
    if ($(".panel.controls ul li:nth-child(4) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum+=3))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum-=3))
    }
  });

  //other buttons: crust
  $(".crust").removeClass("crust-gluten-free");  //This removes gluten-free crust by default.

  $(".btn-crust").click(function() {
    $(this).toggleClass("active"); 
    $(".crust-gluten-free").toggleClass("crust");
    $(".price ul li:nth-child(5)").toggle();
    if ($(".panel.controls ul li:nth-child(5) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum+=5))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum-=5))
    }
  });


  // display the sum in the total price element
  $("aside strong").replaceWith("<strong> $" + sumNum + "</strong>");
});

 

 

 