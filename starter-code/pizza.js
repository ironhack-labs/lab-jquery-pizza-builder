// Write your Pizza Builder JavaScript in this file.
$(function() {
  // alert("DOM is Loaded");
 
  // $("button").click(function(){
  //   $("#pizza").toggle();

  // Iteration 1


  // var pizzaDrawing = $("#pizza > .pep, #pizza > .mushroom, #pizza > .green-pepper");
  // pizzaDrawing.hide();

  
  $(".btn-green-peppers").click(function () {
   $("#pizza > .green-pepper").toggle();
  });
  $(".btn-mushrooms").click(function () {
   $("#pizza > .mushroom").toggle();
  });
  
  $(".btn-pepperonni").click(function () {
   $("#pizza > .pep").toggle();
  });
  })


