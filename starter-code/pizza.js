var totalPrice = 13;
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // pepperoni button - click
  $("#total-price").text("Total price: $" + totalPrice);  
  $("#sauce-price").hide();
  $("#crust-price").hide();

      // if this.prop('class') == has-pepperoni - remove all pepperoni
      // else if this.prop('class') !== has-pepperoni - add pepperoni
  $(".btn-pepperonni").click(function () {
    // swap between active and !active
    $(this).toggleClass("active");
    // toggle display of pepperoni
    $(".pep").toggle();
    $("#pep-price").toggle();
    if ($(this).prop("class").includes("active")) {
      totalPrice += 1; 
      $("#total-price").text("Total price: $" + totalPrice);
    }
    else {
      totalPrice -= 1; 
      $("#total-price").text("Total price: $" + totalPrice);
    }
    
  });

  $(".btn-mushrooms").click(function () {
    // swap between active and !active
    $(this).toggleClass("active");
    // toggle display of pepperoni
    $(".mushroom").toggle();
    $("#mushroom-price").toggle();
    if ($(this).prop("class").includes("active")) {
      totalPrice += 1;
      $("#total-price").text("Total price: $" + totalPrice);
    }
      else {
        totalPrice -= 1; 
        $("#total-price").text("Total price: $" + totalPrice);
      } 
  });

  $(".btn-green-peppers").click(function () {
    // swap between active and !active
    $(this).toggleClass("active");
    // toggle display of pepperoni
    $(".green-pepper").toggle();
    $("#green-price").toggle();
    if ($(this).prop("class").includes("active")) {
      totalPrice += 1;
      $("#total-price").text("Total price: $" + totalPrice);
    }
      else {
        totalPrice -= 1; 
        $("#total-price").text("Total price: $" + totalPrice);
      }  
  });

  $(".btn-crust").click(function () {
    // swap between active and !active
    $(this).toggleClass("active");
    $("#crust-price").toggle();
    if($(this).prop("class").includes("active")) {
      $("#crust").addClass("crust-gluten-free");
      totalPrice += 5;
      $("#total-price").text("Total price: $" + totalPrice); 
    }
    else {
      totalPrice -= 5; 
      $("#total-price").text("Total price: $" + totalPrice);
      $("#crust").removeClass("crust-gluten-free");
    }  
  });
  $(".btn-sauce").click(function () {
    // swap between active and !active
    $(this).toggleClass("active");
    $("#sauce-price").toggle();
    if($(this).prop("class").includes("active")) {
      $("#sauce").addClass("sauce-white");
      totalPrice += 3;
      $("#total-price").text("Total price: $" + totalPrice); 
    }
    else {
      totalPrice -= 3; 
      $("#total-price").text("Total price: $" + totalPrice);
      $("#crust").removeClass("sauce-white");
    } 
  });

});