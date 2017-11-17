// Write your Pizza Builder JavaScript in this file.
//buttons for main ingredients
$(function(){

  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    if ($(".btn-pepperonni").hasClass("active")){
      $(".pep").css("display", "inline");
      $("li:contains('$1 pepperonni')").css("display", "block");
    }
    else {
      $(".pep").css("display", "none");
      $("li:contains('$1 pepperonni')").css("display", "none");
    }
    sumTotalPrice();
  });
  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    if ($(".btn-mushrooms").hasClass("active")){
      $(".mushroom").css("display", "inline");
      $("li:contains('$1 mushrooms')").css("display","block");
    }
    else {
      $(".mushroom").css("display", "none");
      $("li:contains('$1 mushrooms')").css("display", "none");
    }
    sumTotalPrice();
  });
  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    if ($(".btn-green-peppers").hasClass("active")){
      $(".green-pepper").css("display", "inline");
      $("li:contains('$1 green peppers')").css("display","block");
    }
    else {$(".green-pepper").css("display", "none");
    $("li:contains('$1 green peppers')").css("display","none");
  }
  sumTotalPrice();
  });
//button for sauce
  $(".btn-sauce").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $("li:contains('$3 white sauce')").css("display", "none");

  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    if ($(".btn-sauce").hasClass("active")){
      $("li:contains('$3 white sauce')").css("display", "block");
    }
    else {$("li:contains('$3 white sauce')").css("display", "none");
    }
    sumTotalPrice();
});
//button for gluten-free
  $(".btn-crust").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $("li:contains('$5 gluten-free crust')").css("display", "none");

  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".btn-crust").hasClass("active")){
      $("li:contains('$5 gluten-free crust')").css("display", "block");
    }
    else {$("li:contains('$5 gluten-free crust')").css("display", "none");
    }
    sumTotalPrice();
  });
  //calculate total price
  var pepperonniPrice = 0;
  var mushroomsPrice = 0;
  var greenPeppersPrice = 0;
  var whiteSaucePrice = 0;
  var glutenFreePrice = 0;

    sumTotalPrice = function () {
      if ($(".btn-pepperonni").hasClass("active")){
        pepperonniPrice = 1;
      } else {pepperonniPrice = 0;}
      console.log(pepperonniPrice);
      if ($(".btn-mushrooms").hasClass("active")){
        mushroomsPrice = 1;
      } else {mushroomsPrice = 0;}
      console.log(mushroomsPrice);
      if ($(".btn-green-peppers").hasClass("active")){
        greenPeppersPrice = 1;
      } else {greenPeppersPrice = 0;}
      console.log(greenPeppersPrice);
      if ($(".btn-sauce").hasClass("active")){
        whiteSaucePrice = 3;
      }
      else {whiteSaucePrice = 0;}
      console.log(whiteSaucePrice);
      if ($(".btn-crust").hasClass("active")){
        glutenFreePrice = 5;
      }
      else {glutenFreePrice =0;}
      console.log(glutenFreePrice);
      var totalPrice = 10+pepperonniPrice+mushroomsPrice+greenPeppersPrice+whiteSaucePrice+glutenFreePrice;
      $("strong:last-child").text('$'+totalPrice);
      console.log(totalPrice);
    };
    sumTotalPrice();



});
