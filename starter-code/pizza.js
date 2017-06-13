// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass('crust-gluten-free');
$(".sauce").removeClass('sauce-white');
$(".pep").css ("display", "none");
$(".mushroom").css ("display", "none");
$(".green-pepper").css ("display", "none");

$(".pepPrice").css ("display", "none");
$(".mushPrice").css ("display", "none");
$(".greenPrice").css ("display", "none");
$(".whitePrice").css ("display", "none");
$(".crustPrice").css ("display", "none");


var currentPrice = 10;

$(document).ready (function() {
  var  currentPepperoniState = "off";
    $('.btn-pepperonni').click(function (){
      console.log(currentPepperoniState);

      if (currentPepperoniState === "off") {

      $(".pep").css ("display", "inline");
      $(".pepPrice").css ("display", "block");
      currentPepperoniState = "on";
      $(this).addClass('active');
        currentPrice += 1;
      }
      else {
        $(".pep").css ("display", "none");
        $(".pepPrice").css ("display", "none");
      currentPepperoniState = "off";
      $(this).removeClass('active');
      currentPrice -= 1;
      }

      $('#total-price').html('$' + currentPrice);
    });
});

$(document).ready (function() {
  var  currentMushroomState = "off";
    $('.btn-mushrooms').click(function (){
      console.log(currentMushroomState);

      if (currentMushroomState === "off") {

      $(".mushroom").css ("display", "inline");
      $(".mushPrice").css ("display", "inline");
      currentMushroomState = "on";
        $(this).addClass('active');
        currentPrice += 1;
      }
      else {
        $(".mushroom").css ("display", "none");
        $(".mushPrice").css ("display", "none");
      currentMushroomState = "off";
        $(this).removeClass('active');
        currentPrice -= 1;
      }
      $("#total-price").html("$" + currentPrice);
    });
});

$(document).ready (function() {
  var  currentGreenPepperState = "off";
    $('.btn-green-peppers').click(function (){
      console.log(currentGreenPepperState);

      if (currentGreenPepperState === "off") {
      $(".green-pepper").css ("display", "block");
      currentGreenPepperState = "on";
      $(this).addClass('active');
      $(".greenPrice").css ("display", "block");
      currentPrice += 1;
      }
      else {
        $(".green-pepper").css ("display", "none");
      currentGreenPepperState = "off";
        $(this).removeClass('active');
        $(".greenPrice").css ("display", "none");
        currentPrice -= 1;
      }
      $('#total-price').html('$' + currentPrice);
    });
});

$(document).ready (function() {
  var  currentWhiteSauceState = "off";
    $(".btn-sauce").click(function (){
      console.log(currentWhiteSauceState);

      if (currentWhiteSauceState === "off") {
      $(".sauce").addClass ("sauce-white");
      currentWhiteSauceState = "on";
      $(this).removeClass('active');
      $(".whitePrice").css ("display", "block");
      currentPrice += 3;
      }
      else if (currentWhiteSauceState === "on") {
        $(".sauce").removeClass('sauce-white');
      currentWhiteSauceState = "off";
      $(this).addClass('active');
      $(".whitePrice").css ("display", "none");
      currentPrice -= 3;
      }
      $('#total-price').html('$' + currentPrice);
    });
});

$(document).ready (function() {
  var  currentCrustState = "off";
    $(".btn-crust").click(function (){
      console.log(currentCrustState);

      if (currentCrustState === "off") {
      $(".crust").addClass ('crust-gluten-free');
      currentCrustState = "on";
      $(this).addClass('active');
      $(".crustPrice").css ("display", "block");
      currentPrice += 5;
      }
      else if(currentCrustState === "on") {
        $(".crust").removeClass ('crust-gluten-free');
      currentCrustState = "off";
      $(this).removeClass('active');
      $(".crustPrice").css ("display", "none");
      currentPrice -= 5;
      }
      $('#total-price').html('$' + currentPrice);
    });
});
