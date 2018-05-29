$(document).ready(function() {

  //DEFAULTS
  var sumNum = 13
  $(".panel.price strong").replaceWith("<strong>$"+sumNum+"</strong>")

  /*This removes white sauce and the glutenfree crust of the pizza classes 
  from the webpage, so that when the page loads it start up without those in them. */
  $(".crust").removeClass("crust-gluten-free"); 
  $(".sauce").removeClass("sauce-white"); 


  $(".panel.price ul li:nth-child(4), .panel.price ul li:nth-child(5)").hide();/*By default, we hide white sauce and gluten-free crust from the ul element*/


  $(".btn-sauce, .btn-crust").toggleClass("active");/*Sauce and crust buttons are now unpressed by default. For some reason all buttons were pressed on default.*/




  /*-----BUTTONS --------- all buttons do these things on click:
  a toggle-function that takes the GUI-button up and down on click.
  a toggle that shows or hides the respective ingredient on the pizza
  a toggle-function that hides or shows the respective list item
  a final if-else that adds or subtracts the price of the item depending 
    on whether the button is currently "up" or "down." NB! This is is a bit
    confusing because it's added after the button-press-toggle is done.*/

  /*The pepperoni button */
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".panel.price ul li:nth-child(1)").toggle()
    if ($(".panel.controls ul li:nth-child(1) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

  /*The mushroom button */
  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $ (".panel.price ul li:nth-child(2)").toggle()
    if ($(".panel.controls ul li:nth-child(2) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

  /*The green peppers button */
  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $ (".panel.price ul li:nth-child(3)").toggle()
    if ($(".panel.controls ul li:nth-child(3) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(++sumNum))
    }
    else {
      $("body aside strong").html("$"+parseInt(--sumNum))
    }
  });

  /*The sauce button toggles between red and white sauce; there's never no sauce*/
  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $ (".panel.price ul li:nth-child(4)").toggle() 
    if ($(".panel.controls ul li:nth-child(4) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum+=3))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum-=3))
    }
  });

  /*The crust button, like the sauce button, toggles between an ordinary and gluten-free crust */
  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free"); 
    $ (".panel.price ul li:nth-child(5)").toggle()
    if ($(".panel.controls ul li:nth-child(5) button").hasClass("active")) {
      $("body aside strong").html("$"+parseInt(sumNum+=5))
    }
    else {
      $("body aside strong").html("$"+parseInt(sumNum-=5))
    }
  });
});