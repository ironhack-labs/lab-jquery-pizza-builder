//1

//Pepperoni
$(document).ready(function(){
  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".precio1").toggle();
  
  });
  $(".btn-pepperonni").on("click",function(){
    $(".btn-pepperonni").toggleClass("active");
  });

  //Mushrooms

  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(".precio2").toggle();
  });
  $(".btn-mushrooms").on("click",function(){
    $(".btn-mushrooms").toggleClass("active");
  });

  //peppers
  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".precio3").toggle();
  });
  $(".btn-green-peppers").on("click",function(){
    $(".btn-green-peppers").toggleClass("active");
  });


  //Sauce
  $(".sauce-white").removeClass("sauce-white");
  $(".precio4").hide();
  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $(".precio4").toggle();

  });
  $(".btn-sauce").removeClass("active");
  $(".btn-sauce").on("click",function(){
    $(".btn-sauce").toggleClass("active");
  });

  //Crust
  $(".crust").removeClass("crust-gluten-free");
  $(".precio5").hide();

  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".precio5").toggle();

  });
  });
  $(".btn-crust").removeClass("active");
  $(".btn-crust").on("click",function(){
    $(".btn-crust").toggleClass("active");


  //precios
});
