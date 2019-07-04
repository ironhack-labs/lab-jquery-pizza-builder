// Write the JavaScript necessary for
//  those three buttons to add and remove pepperonni,
//   mushrooms and green peppers from the pizza. 

$("document").ready (function(){

// Hide Prices 

$(".pep").hide();
$(".mushroom").hide();
$(".green-pepper").hide();
$("#pepPrice").hide();
$("#mushPrice").hide();
$("#greenPrice").hide();
$("#crustPrice").hide();
$("#saucePrice").hide();



//Green Peppers
  $("#green").click(function () {
    $(".green-pepper").toggle()
    $("#green").toggleClass("active")
    $("#greenPrice").toggle()
    pizzaPrice();
  });
  
// Mushrooms
 $("#mushroom").click(function () {
  $(".mushroom").toggle()
  $("#mushroom").toggleClass("active")
  $("#mushPrice").toggle()
  pizzaPrice();
});

//Pepperonni

$("#pepperonni").click(function () {
  $(".pep").toggle()
  $("#pepperonni").toggleClass("active")
  $("#pepPrice").toggle()
  pizzaPrice();
});

//White Sauce 
$("#sauce-white").click(function () {
  $(".sauce").toggle()
  $("#sauce-white").toggleClass("active")
  $("#saucePrice").toggle()
  pizzaPrice();
});


$("#crust").click(function () {
  $(".crust-gluten-free").toggle()
  .toggleClass("green")
  .show(".crust-gluten-free")
  $("#crust").toggleClass("active")
  $("#crustPrice").toggle()
   pizzaPrice();
}); 

function pizzaPrice(){
  var totalPrice=10;

  if ($('#pepperonni').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('#mushroom').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('#green').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('#sauce-white').hasClass('active')) {
    totalPrice += 3;
  }
  if ($('#crust').hasClass('active')) {
    totalPrice += 5;
  }

  $('.totalPizza').html(totalPrice);
}

});








