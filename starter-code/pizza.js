// Write your Pizza Builder JavaScript in this file.
$(function(){
  $("#pizza > section:not(.crust), .sauce-white").hide();
  $("#pizza section:last-child").removeClass("crust-gluten-free");
  $("aside li").hide();
  $("button").removeClass("active");
  
  var price = 10; 
  $("strong").text("$" + price);

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
    $(".pep").fadeToggle();
    $("aside li:nth-child(1)").fadeToggle();
    if ($(this).hasClass("active")) {
      price += 1;
    } else {
      price -= 1;
    }
    $("strong").text("$" + price);
  });
  
  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".mushroom").fadeToggle();
    $("aside li:nth-child(2)").fadeToggle();
    if ($(this).hasClass("active")) {
      price += 1;
    } else {
      price -= 1;
    }
    $("strong").text("$" + price);
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".green-pepper").fadeToggle();
    $("aside li:nth-child(3)").fadeToggle();
    if ($(this).hasClass("active")) {
      price += 1;
    } else {
      price -= 1;
    }
    $("strong").text("$" + price);
  });

  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".sauce-white").fadeToggle();
    $("aside li:nth-child(4)").fadeToggle();
    if ($(this).hasClass("active")) {
      price += 3;
    } else {
      price -= 3;
    }
    $("strong").text("$" + price);
  });

  $(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $("section.crust").toggleClass("crust-gluten-free");
    $("aside li:nth-child(5)").fadeToggle();
    if ($(this).hasClass("active")) {
      price += 5;
    } else {
      price -= 5;
    }
    $("strong").text("$" + price);
  });



});