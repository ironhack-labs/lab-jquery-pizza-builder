// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

//iteraction 1
  $(".btn-pepperonni").click(function(){
      $(".pep").toggle();
  });

  $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle();
  });

  //iteraction 2
  $(".crust").removeClass("crust-gluten-free");

  $(".sauce").removeClass("sauce-white");

  $(".btn-sauce").click(function(){
      $(".sauce").toggleClass("sauce-white");
  });

  $(".btn-crust").click(function(){
      $(".crust").toggleClass("crust-gluten-free");
  });
});

//iteraction 3
