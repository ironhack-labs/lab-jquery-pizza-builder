// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("section.crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $("li:contains('white sauce')").hide();
  $("li:contains('gluten-free crust')").hide();

  var totalPrice = parseInt($(".panel.price strong").html().slice(1));
  var updatePrice = totalPrice - 3 - 5;
  total();

  $('.btn').click(function(){
    $(this).toggleClass('active');
  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $("li:contains('pepperonni')").toggle();
    if($(this).hasClass("active")){
      updatePrice += 1;
    } else {
      updatePrice -= 1;
    }
    total();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $("li:contains('green peppers')").toggle();
    if($(this).hasClass("active")){
      updatePrice += 1;
    } else {
      updatePrice -= 1;
    }
    total();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $("li:contains('mushroom')").toggle();
    if($(this).hasClass("active")){
      updatePrice += 1;
    } else {
      updatePrice -= 1;
    }
    total();
  });

  $(".btn-crust").click(function(){
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle();
    if($(this).hasClass("active")){
      updatePrice -= 5;
    } else {
      updatePrice += 5;
    }
    total();
  });
  $(".btn-sauce").click(function(){
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle();
    if($(this).hasClass("active")){
      updatePrice -= 3;
    } else {
      updatePrice += 3;
    }
    total();
  });

  function total() {
    $(".panel.price strong").html("$" + updatePrice);
  }


});
