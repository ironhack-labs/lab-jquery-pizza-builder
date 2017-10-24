// Write your Pizza Builder JavaScript in this file.

$(function(){

  //Hide toppings
  $(".green-pepper").toggle();
  $(".mushroom").toggle();
  $(".pep").toggle();

  //Remove sauce and crust
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass("active");
    //$('.price ul li:nth-child(5)').toggle();
   });
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $(this).toggleClass("active");
    //$('.price ul li:nth-child(5)').toggle();
   });


  //Show toppings
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(this).toggleClass("active");
  });
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(this).toggleClass("active");
  });
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
  });



});
