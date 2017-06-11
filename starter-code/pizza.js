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



$(document).ready (function() {
  var  currentPepperoniState = "off";
    $('.btn-pepperonni').click(function (){

      if (currentPepperoniState === "off") {
      $(".pep").css ("display", "none");
      currentPepperoniState = "on";
      $(this).addClass('active');
      $(".pepPrice").css ("display", "none");
      }
      else {
        $(".pep").css ("display", "inline");
      currentPepperoniState = "off";
      $(this).removeClass('active');
      $(".pepPrice").css ("display", "block");
      }
    });
});

$(document).ready (function() {
  var  currentMushroomState = "off";
    $('.btn-mushrooms').click(function (){

      if (currentMushroomState === "off") {
      $(".mushroom").css ("display", "none");
      currentMushroomState = "on";
        $(this).addClass('active');
        $(".mushPrice").css ("display", "none");
      }
      else {
        $(".mushroom").css ("display", "inline");
      currentMushroomState = "off";
        $(this).removeClass('active');
        $(".mushPrice").css ("display", "block");
      }
    });
});

$(document).ready (function() {
  var  currentGreenPepperState = "off";
    $('.btn-green-peppers').click(function (){

      if (currentGreenPepperState === "off") {
      $(".green-pepper").css ("display", "none");
      currentGreenPepperState = "on";
      $(this).addClass('active');
      $(".greenPrice").css ("display", "none");
      }
      else {
        $(".green-pepper").css ("display", "inline");
      currentGreenPepperState = "off";
        $(this).removeClass('active');
        $(".greenPrice").css ("display", "block");
      }
    });
});

$(document).ready (function() {
  var  currentWhiteSauceState = "off";
    $(".btn-sauce").click(function (){

      if (currentWhiteSauceState === "off") {
      $(".sauce").removeClass ("sauce-white");
      currentWhiteSauceState = "on";
      $(this).addClass('active');
      $(".whitePrice").css ("display", "none");
      }
      else if (currentWhiteSauceState === "on") {
        $(".sauce").addClass('sauce-white');
      currentWhiteSauceState = "off";
      $(this).removeClass('active');
      $(".whitePrice").css ("display", "block");
      }

    });
});

$(document).ready (function() {
  var  currentCrustState = "off";
    $(".btn-crust").click(function (){

      if (currentCrustState === "off") {
      $(".crust").removeClass ('crust-gluten-free');
      currentCrustState = "on";
      $(this).addClass('active');
      $(".crustPrice").css ("display", "none");
      }
      else if(currentCrustState === "on") {
        $(".crust").addClass ('crust-gluten-free');
      currentCrustState = "off";
      $(this).removeClass('active');
      $(".crustPrice").css ("display", "block");
      }

    });
});
