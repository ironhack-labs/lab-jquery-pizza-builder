// Write your Pizza Builder JavaScript in this file.
function init() {
  // Setting the initial price of the pizza
  $("strong").html("$13");
  var price = $("strong").html();
  price = price.substr(1);

// Remove the extra ingredients (cheese & gluten-free crust)
  // White sauce - remove picture and desactive button
  $(".sauce-white").toggle();
  $(".btn-sauce").toggleClass("active");
  // Remove ul items from the list
  $(".price ul li:nth-child(4)").toggle();

  // Gluten-free crust - remove picture and desactive button
  $(".crust-gluten-free").removeClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  // Remove ul items from the list
  $(".price ul li:nth-child(5)").toggle();

  // Add or remove pepperoni
  $(".btn-pepperonni").click(function() {
    if ($(".pep").attr("style")) {
      $(".pep").css("display","");
      price = price + 1;
    }
    else {
      $(".pep").css("display","none");
      price = price-1;
    }
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
    $("strong").html("$"+price);
  });

  // Add or remove mushrooms
  $(".btn-mushrooms").click(function(){
    if ($(".mushroom").attr("style")) {
      $(".mushroom").css("display","");
      price = price + 1;
    }
    else {
      $(".mushroom").css("display","none");
      price = price-1;
    }
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    $("strong").html("$"+price);
  });

  // Add or remove green-pepper
  $(".btn-green-peppers").click(function(){
    if ($(".green-pepper").attr("style")) {
      $(".green-pepper").css("display","");
      price = price + 1;
    }
    else {
      $(".green-pepper").css("display","none");
      price = price-1;
    }
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
    $("strong").html("$"+price);
  });

  // select white sauce and gluten free crust
  $(".btn-sauce").click(function(){
    if ($(".sauce-white").attr("style")) {
      $(".sauce-white").css("display","");
      price = price + 3;
    }
    else {
      $(".sauce-white").css("display","none");
      price = price-3;
    }
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
    $("strong").html("$"+price);
  });

  $(".btn-crust").click(function(){
    if ($(".btn-crust").hasClass("active")){
      $(".crust").removeClass("crust-gluten-free");
      price = price-5;
    }
    else {
      $(".crust").addClass("crust-gluten-free");
      price = price +5;
    }
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
    $("strong").html("$"+price);
  });
}

$(document).ready(init());
