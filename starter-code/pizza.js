// Write your Pizza Builder JavaScript in this file.
function init() {
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
    }
    else {
      $(".pep").css("display","none");
    }
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
  });

  // Add or remove mushrooms
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
  });

  // Add or remove green-pepper
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
  });

  // select white sauce and gluten free crust
  $(".btn-sauce").click(function(){
    $(".sauce-white").toggle();
    $(".btn-sauce").toggleClass("active");
  });

  $(".btn-crust").click(function(){
    if ($(".btn-crust").hasClass("active")){
      $(".crust").removeClass("crust-gluten-free");
    }
    else {
      $(".crust").addClass("crust-gluten-free");
    }
    $(".btn-crust").toggleClass("active");
  });
}

$(document).ready(init());
