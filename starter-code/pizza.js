// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $(".btn-pepperonni").on("click", function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price ul li:first-child").toggle();

  });
  $(".btn-green-peppers").on("click", function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("aside ul li:nth-child(3)").toggle();
  });
  $(".btn-mushrooms").on("click", function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("aside ul li:nth-child(2)").toggle();
  });
  $(".btn-crust").on("click", function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("aside ul li:nth-child(5)").toggle();
  });
  $(".btn-sauce").on("click", function(){
  $(".sauce-white").toggle();
  $(".btn-sauce").toggleClass("active");
  $("aside ul li:nth-child(4)").toggle();
  });

});
