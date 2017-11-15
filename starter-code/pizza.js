// Write your Pizza Builder JavaScript in this file.

$(function(){
  $(".price li:nth-child(1), .price li:nth-child(2), .price li:nth-child(3)").addClass("charge");
  $(".price li:nth-child(4)").hide();
  $(".price li:nth-child(5)").hide();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
    $(".price li:nth-child(1)").toggleClass("charge");
    if ($(this).hasClass("active")){
      $(".pep").show();
      $(".price li:nth-child(1)").show();
    } else {
      $(".pep").hide();
      $(".price li:nth-child(1)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".price li:nth-child(2)").toggleClass("charge");
    if ($(this).hasClass("active")){
      $(".mushroom").show();
      $(".price li:nth-child(2)").show();
    } else {
      $(".mushroom").hide();
      $(".price li:nth-child(2)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".price li:nth-child(3)").toggleClass("charge");
    if ($(this).hasClass("active")){
      $(".green-pepper").show();
      $(".price li:nth-child(3)").show();
    } else {
      $(".green-pepper").hide();
      $(".price li:nth-child(3)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".price li:nth-child(4)").toggleClass("charge");
    if ($(this).hasClass("active")){
      $(".sauce").toggleClass("sauce-white");
      $(".price li:nth-child(4)").show();
    } else {
      $(".sauce").toggleClass("sauce-white");
      $(".price li:nth-child(4)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  $(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $(".price li:nth-child(5)").toggleClass("charge");
    if ($(this).hasClass("active")){
      $(".crust").toggleClass("crust-gluten-free");
      $(".price li:nth-child(5)").show();
    } else {
      $(".crust").toggleClass("crust-gluten-free");
      $(".price li:nth-child(5)").hide();
    }
    totalPrice.innerHTML = "$" + getTotalPrice();
  });

  var totalPrice = document.querySelector(".price strong");
  totalPrice.innerHTML = "$" + getTotalPrice();

  function getTotalPrice(){
    var ingredients = document.querySelectorAll(".price li.charge");
    var total = 0;
    for(var i = 0; i < ingredients.length; i++){
      total += parseInt(ingredients[i].innerHTML.replace("$",""));
    }
    return total + 10;
  }
});
