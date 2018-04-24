// Remove active class and hide toppings and their li sections 
// when first load the pizza builder
$(".btn-pepperonni").removeClass("active");
$('.pep').hide();
$("li:contains('$1 pepperonni')").hide();
$(".btn-mushrooms").removeClass("active");
$('.mushroom').hide();
$("li:contains('$1 mushrooms')").hide();
$(".btn-green-peppers").removeClass("active");
$('.green-pepper').hide();
$("li:contains('$1 green peppers')").hide();

// Add, remove, activate, and update price for pepperonni topping
$(".btn-pepperonni").on("click", function () {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains('pepperonni')").toggle();
  totalPrice()
});

// Add, remove, activate, and update price for mushroom topping
$(".btn-mushrooms").on("click", function () {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains('mushrooms')").toggle();
  totalPrice()
});

// Add, remove, activate, and update price for green pepper topping
$(".btn-green-peppers").on("click", function () {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains('green peppers')").toggle();
  totalPrice()
});
// Add, remove, activate, and update price for white sauce
$(".btn-sauce").on("click", function () {
  $(".sauce").toggle();
  $(".btn-sauce").toggleClass("active");
  $("li:contains('white sauce')").toggle();
  totalPrice()
});
// Add, remove, activate, and update price for Gluten-free crust
$(".btn-crust").on("click", function () {
  $(".btn-crust").toggleClass("active");
  $("li:contains('gluten-free crust')").toggle();
  totalPrice()
});

// Calculate total price
function totalPrice(){
 let totalPrice = 10;
 if ($(".btn-pepperonni").hasClass("active")){
   totalPrice += 1;
 }
 if ($(".btn-mushrooms").hasClass("active")){
  totalPrice += 1;
}
 if ($(".btn-green-peppers").hasClass("active")){
  totalPrice += 1;
}
 if ($(".btn-sauce").hasClass("active")){
  totalPrice += 3;
}
 if ($(".btn-crust").hasClass("active")){
  totalPrice += 5;
}
 $("aside > strong").text("$" + totalPrice);
}