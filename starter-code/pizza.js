// Write your Pizza Builder JavaScript in this file.
/*function  listenerButton() {
    var $btnpepperonni = $(".btn-pepperonni");
    var $btnmushrooms = $(".btn-mushrooms");
    var $btngreenpeppers = $(".btn-green-peppers");
    $btnpepperonn.click(function (){
        $(this).toggleClass("on");

        if($("$btn-pepperonni.on").
    })
}*/
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
        $(".price li:nth-child(1)").show();
      } else {
        $(".mushroom").hide();
        $(".price li:nth-child(1)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
  });



  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(3)").toggleClass("charge");
    if ($(this).hasClass("active")){
        $(".green-pepper").show();
        $(".price li:nth-child(1)").show();
      } else {
        $(".green-pepper").hide();
        $(".price li:nth-child(1)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
  });


  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(4)").toggleClass("charge");
    if ($(this).hasClass("active")){
        $(".sauce").show();
        $(".price li:nth-child(1)").show();
      } else {
        $(".sauce").hide();
        $(".price li:nth-child(1)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
  });


  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".price li:nth-child(5)").toggleClass("charge");
    if ($(this).hasClass("active")){
        $(".crust").show();
        $(".price li:nth-child(1)").show();
      } else {
        $(".crust").hide();
        $(".price li:nth-child(1)").hide();
      }
      totalPrice.innerHTML = "$" + getTotalPrice();
  });
});
