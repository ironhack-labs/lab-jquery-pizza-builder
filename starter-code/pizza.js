// Write your Pizza Builder JavaScript in this file.
$(document).ready (function() {

var $pricePizza = $(".price ul").children();

$($pricePizza[0]).hide();
$($pricePizza[1]).hide();
$($pricePizza[2]).hide();
$($pricePizza[3]).hide();
$($pricePizza[4]).hide();


  var $green = $(".green-pepper");
  var $pepperButton = $(".btn-green-peppers");

  $green.hide();
  
  $pepperButton.click(function(){
  
    if ($green.css("display") == "none" ){
      $green.show();
      $($pricePizza[2]).show();
      $pepperButton.addClass("active");
    } else {
      $green.hide();
      $($pricePizza[2]).hide();
      $pepperButton.removeClass("active");

    }
  })


//-------------------------------------------------------
  
  var $mushrooms = $(".mushroom");
  var $mushroomButton = $(".btn-mushrooms");

  $mushrooms.hide();

  $mushroomButton.click(function(){
    if ($mushrooms.css("display") == "none" ){
      $mushrooms.show();
      $($pricePizza[1]).show();
      $mushroomButton.addClass("active");

    } else {
    $mushrooms.hide();
    $($pricePizza[1]).hide();
    $mushroomButton.removeClass("active");
    }
  })
  //---------------------------------------------------
  var $pepperonis = $(".pep");
  var $pepperonisButton = $(".btn-pepperonni");

  $pepperonis.hide();

  $pepperonisButton.click(function(){
    if ($pepperonis.css("display") == "none" ){
      $pepperonis.show();
      $($pricePizza[0]).show();  
      $pepperonisButton.addClass("active");
    } else {
    $pepperonis.hide();
    $($pricePizza[0]).hide();
    $pepperonisButton.removeClass("active");
    }
  })
  //-------------------------------------------------------
  var $sauceButton = $(".btn-sauce");
  
  $sauceButton.click(function() {
    if ($sauceButton.text() == "White sauce") {
      $sauceButton.text("Regular Sauce");
      $($pricePizza[3]).show();
    } else {
      $sauceButton.text("White sauce");
      $($pricePizza[3]).hide();

    }
    ;
  })
  
  //-------------------------------------------------------
  
  var $crustButton = $(".btn-crust");
  
  $crustButton.click(function() {
  if ($crustButton.text() == "Gluten-free crust") {
      $crustButton.text("Crust");
      $($pricePizza[4]).show();
    } else {
      $crustButton.text("Gluten-free crust");
      $($pricePizza[4]).hide();
    }
    ;
  });



})  

