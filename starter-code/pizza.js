// PIZZA & BUTTONS RESET

$("#pizza > section:not(:last-child").toggleClass("hide");
$("#pizza section:last-child").toggleClass("crust-gluten-free sauce-white");
$(".btn").toggleClass("active");

// ADD TOPINGS TO PIZZA

$(".btn-pepperonni").on("click", function(){
  $("#pizza > section.pep").toggleClass("hide");

});

$(".btn-mushrooms").on("click", function(){
  $("#pizza > section.mushroom").toggleClass("hide");
});

$(".btn-green-peppers").on("click", function(){
  $("#pizza > section.green-pepper").toggleClass("hide");
});



