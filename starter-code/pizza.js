$(document).ready(function(){

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass('active');
  $(".panel price ul li:first").toggle();
  });

  $(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass('active');
  });

  $(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass('active');
  });

  $(".btn-crust").click(function(){
  $(".crust").toggleClass('crust-gluten-free');
  $(".btn-crust").toggleClass('active');
  });

  $(".btn-sauce").click(function(){
  $(".sauce").toggleClass('sauce-white');
  $(".btn-sauce").toggleClass('active');
  });







});
