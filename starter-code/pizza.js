// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  window.onload = function(){
    $(".btn-sauce, .btn-crust").removeClass("active");
  }

  var total = 13;
  function updatePrice() {
    $("strong").html("$" + total.toFixed(2));
  }

  updatePrice();

  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggleClass("hidden");
    $("#pep").toggleClass("hidden");
    if ($(".btn-pepperonni").hasClass("active")) return total += 1, updatePrice();
    return total -= 1, updatePrice();
  })

  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggleClass("hidden");
    $("#mush").toggleClass("hidden");
    if ($(".btn-mushrooms").hasClass("active")) return total += 1, updatePrice();
    return total -= 1, updatePrice();
  })
  
  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggleClass("hidden");
    $("#green").toggleClass("hidden");
    if ($(".btn-green-peppers").hasClass("active")) return total += 1, updatePrice();
    return total -= 1, updatePrice();
  })

  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  

  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $("#sauce").toggleClass("hidden");
    if ($(".btn-sauce").hasClass("active")) return total += 3, updatePrice();
    return total -= 3, updatePrice();
  })
 
  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $("#crust").toggleClass("hidden");
    if ($(".btn-crust").hasClass("active")) return total += 5, updatePrice();
    return total -= 5, updatePrice();
  })

})