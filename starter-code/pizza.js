// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
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



  $(".btn-mushrooms").click(function() {
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



  $(".btn-green-peppers").click(function() {
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


  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".sauce").parent().toggleClass("sauce-white");
    if ($(this).hasClass("active")){
        $(".sauce, sauce-white").show();
        $(".price li:nth-child(4)").show();
      } else {
        $(".sauce-white").hide();
        $(".price li:nth-child(4)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
  });


  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(this).hasClass("active")){
        $(".crust, .crust-gluten-free").show();
        $(".price li:nth-child(5)").show();
      } else {
        $(".crust, .crust-gluten-free").hide();
        $(".price li:nth-child(5)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
      
  });
});
