// Write your Pizza Builder JavaScript in this file.

//Iteration 1: Add and remove toppings
//Iteration 2: Sauce and crust options
//Iteration 3: Change the buttons' state
//Iteration 4: Ingredients and prices
//Iteration 5: Update price


$(document).ready(function() {
  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
    $(".pep").toggle();
  });

  $(".btn-mushrooms").click(function(){
      $(this).toggleClass("active");
      $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
      $(this).toggleClass("active");
      $(".green-pepper").toggle();
  });

  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");

  $(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
  });
});
