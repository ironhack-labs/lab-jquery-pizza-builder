// Sets initial states for sauce / crust / buttons
var pizzaPrice = 13;
$(".sauce").toggleClass("sauce-white");
$(".crust").toggleClass('crust-gluten-free');
$(".btn-sauce").toggleClass("active");
$(".btn-crust").toggleClass("active");
$(".panel.price ul li:nth-child(4)").toggle();
$(".panel.price ul li:nth-child(5)").toggle();

// Event code for buttons
$(".btn-pepperonni").click(function(e){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".panel.price ul li:nth-child(1)").toggle();
  if($(".btn-pepperonni").hasClass("active")) {
    pizzaPrice += 1;
  } else {
    pizzaPrice -= 1;
  }
  updatePrice();
});

$(".btn-mushrooms").click(function(e){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".panel.price ul li:nth-child(2)").toggle();
  if($(".btn-mushrooms").hasClass("active")) {
    pizzaPrice += 1;
  } else {
    pizzaPrice -= 1;
  }
  updatePrice();
});

$(".btn-green-peppers").click(function(e){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".panel.price ul li:nth-child(3)").toggle();
  if($(".btn-green-peppers").hasClass("active")) {
    pizzaPrice += 1;
  } else {
    pizzaPrice -= 1;
  }
  updatePrice();
});

$(".btn-sauce").click(function(e){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".panel.price ul li:nth-child(4)").toggle();
  if($(".btn-sauce").hasClass("active")) {
    pizzaPrice += 3;
  } else {
    pizzaPrice -= 3;
  }
  updatePrice();
});

$(".btn-crust").click(function(e){
  $(".crust").toggleClass('crust-gluten-free');
  $(".btn-crust").toggleClass("active");
  $(".panel.price ul li:nth-child(5)").toggle();
  if($(".btn-crust").hasClass("active")) {
    pizzaPrice += 5;
  } else {
    pizzaPrice -= 5;
  }
  updatePrice();
});

function updatePrice() {
  $(".panel.price strong").text("$" + pizzaPrice);
}