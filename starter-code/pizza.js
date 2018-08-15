// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  window.onload = function(){
    $(".btn-sauce, .btn-crust").removeClass("active");
  }

  $(".btn-pepperonni").click(function(){
    $(".pep").toggleClass("hidden");
    $("#pep").toggleClass("hidden");
  })

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggleClass("hidden");
    $("#mush").toggleClass("hidden");
  })
  
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggleClass("hidden");
    $("#green").toggleClass("hidden");
  })

  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $("#sauce").toggleClass("hidden");
  })
 
  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $("#crust").toggleClass("hidden");
  })
  
  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
  })

  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
  })

  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
  })

  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
  })

  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
  })


})