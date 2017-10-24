// Write your Pizza Builder JavaScript in this file.

$(function(){

  //Hide toppings
  $(".green-pepper").css({"visibility":"hidden"});
  $(".mushroom").css({"visibility":"hidden"});
  $(".pep").css({"visibility":"hidden"});


  //Show toppings
  $(".btn-pepperonni").click(function(){
    $(".pep").each(function(e){
      $(this).text().css({"visibility":"visible"});
      console.log("Soy el " + e);
    });
  });

});
