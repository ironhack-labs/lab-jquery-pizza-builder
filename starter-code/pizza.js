// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  //loads pages without gluten free crust
  $(".crust").removeClass("crust-gluten-free");
  //loads page with red saucy
  $(".sauce").removeClass("sauce-white");
  //crust button loads as inactive
  $(".btn-crust").removeClass("active");
  //sauce button loads as inactive
  $(".btn-sauce").removeClass("active");

  
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    //toggles the class actve from 
    //button that was clicked
    $(this).toggleClass("active")
    //removes item from price pannel when toggled
    $(".price ul li:nth-child(1)").toggle();
  })

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(this).toggleClass("active")
    $(".price ul li:nth-child(2)").toggle();
  })

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(this).toggleClass("active")
    $(".price ul li:nth-child(3)").toggle();
  })

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active")
    $(".price ul li:nth-child(4)").toggle();
  })

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active")
    $(".price ul li:nth-child(5)").toggle();
  })


});

