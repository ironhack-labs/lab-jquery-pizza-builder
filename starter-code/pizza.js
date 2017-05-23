

$(document).ready(function() {

  //Buttons

  $("button").click(function(event){
    $(this).toggleClass("active");
  });

  $("button.btn-mushrooms").click(function(event){
    $("section.mushroom").toggle("display");
  });

  $("button.btn-green-peppers").click(function(event){
    $("section.green-pepper").toggle("display");
  });

  $("button.btn-pepperonni ").click(function(event){
    $("section.pep").toggle("display");
  });

  //Sauce and crust Buttons


  $("button.btn-sauce").removeClass("active");

  $("section.sauce").removeClass("sauce-white");

  $("button.btn-sauce").click(function(event){
    $("section.sauce").toggleClass("sauce-white");
  });



  $("button.btn-crust").removeClass("active");


});
