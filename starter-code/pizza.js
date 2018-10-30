// Write your Pizza Builder JavaScript in this file.

$(document).ready( function() {

var totalPrice = 13;

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    if ($(".pep:visible").length>0 ){
      $(".btn-pepperonni").addClass("active");
      $("aside li:nth-child(1)").show();
      totalPrice+=1;
    } else {
      $(".btn-pepperonni").removeClass("active");
      $("aside li:nth-child(1)").hide();
      totalPrice-=1;
    }; 
    $("aside strong").html("$"+totalPrice);
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    if ($(".mushroom:visible").length>0 ){
      $(".btn-mushrooms").addClass("active");
      $("aside li:nth-child(2)").show();
      totalPrice+=1;
    } else {
      $(".btn-mushrooms").removeClass("active")
      $("aside li:nth-child(2)").hide();
      totalPrice-=1;
    }; 
    $("aside strong").html("$"+totalPrice);
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    if ($(".green-pepper:visible").length>0 ){
      $(".btn-green-peppers").addClass("active");
      $("aside li:nth-child(3)").show();
      totalPrice+=1;
    } else {
      $(".btn-green-peppers").removeClass("active");
      $("aside li:nth-child(3)").hide();
      totalPrice-=1;
    }; 
    $("aside strong").html("$"+totalPrice);
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    //$(".btn-sauce").toggleClass("active",$(".sauce").hasClass("sauce-white"));
    //$(".btn-sauce").toggleClass("active",false);
    if ($(".sauce").hasClass("sauce-white")){
      $(".btn-sauce").addClass("active");
      $("aside li:nth-child(4)").show();
      totalPrice+=3;
    } else {
      $(".btn-sauce").removeClass("active");
      $("aside li:nth-child(4)").hide();
      totalPrice-=3;
    }; 
    $("aside strong").html("$"+totalPrice);
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
   // console.log($(".crust").hasClass("crust-gluten-free"));
    if ($(".crust").hasClass("crust-gluten-free")){
      $(".btn-crust").addClass("active");
      $("aside li:nth-child(5)").show();
      totalPrice+=5;
    } else {
      $(".btn-crust").removeClass("active");
      $("aside li:nth-child(5)").hide();
      totalPrice-=5;
    }; 
    $("aside strong").html("$"+totalPrice);
  });

 

  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");

  $("aside li:nth-child(4)").hide();
  $("aside li:nth-child(5)").hide();

  $("aside strong").html("$"+totalPrice);

});