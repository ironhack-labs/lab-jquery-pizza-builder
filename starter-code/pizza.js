// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
    $(".active").toggleClass("active");
    var theTotal = 10;
//Pep Toggle
    $("#ingredients li:first").toggle();
    $(".pep").toggle();
    $ (".btn-pepperonni").click (function(){
    $("#ingredients li:first").toggle();
    $(".pep").toggle();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      theTotal = Number(theTotal) + Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    } else {
      theTotal = Number(theTotal) - Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    }
  });
//Mushrooms Toggle
    $("#mush").toggle();
    $(".mushroom").toggle();
  $ (".btn-mushrooms").click (function(){
    $("#mush").toggle();
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      theTotal = Number(theTotal) + Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    } else {
      theTotal = Number(theTotal) - Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    }
  });
//Green Peepers Toggle
    $("#gpep").toggle();
    $(".green-pepper").toggle();
  $ (".btn-green-peppers").click (function(){
    $("#gpep").toggle();
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      theTotal = Number(theTotal) + Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    } else {
      theTotal = Number(theTotal) - Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    }
  });
  //Gluten Free Crust
    $("#gcrust").toggle();
    $ (".btn-crust").click (function(){
    $("#gcrust").toggle();
    $(".cheese").toggle();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      theTotal = Number(theTotal) + Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    } else {
      theTotal = Number(theTotal) - Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    }
    });
  //WHite Sauce
    $("#wsauce").toggle();
    $ (".btn-sauce").click (function(){
    $("#wsauce").toggle();
    $(".sauce-white").toggle();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      theTotal = Number(theTotal) + Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    } else {
      theTotal = Number(theTotal) - Number($(this).val());
      $('#total-price').text("Total Price: "+theTotal);
    }
    });


    $('.total').text("Total: "+theTotal);
});
