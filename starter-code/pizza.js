$(document).ready(function(){
  calculatePrice();
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".price ul li:first-child").toggle();
    calculatePrice();
  });

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".price ul li:nth-child(2)").toggle();
    calculatePrice();
  });

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".price ul li:nth-child(3)").toggle();
    calculatePrice();
  });

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").toggle();
    calculatePrice();
  });

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last-child").toggle();
    calculatePrice();
  });
  $(".btn").click(function(){
    $(this).toggleClass("active");
  });
function calculatePrice () {
  var totalPrice = 10;
  if($(".price ul li:first-child").is(":visible") === true) {
    totalPrice += 1;
  }
  if($(".price ul li:nth-child(2)").is(":visible") === true) {
    totalPrice += 1;
  }
  if($(".price ul li:nth-child(3)").is(":visible") === true) {
    totalPrice += 1;
  }
  if($(".price ul li:nth-child(4)").is(":visible") === true) {
    totalPrice += 3;
  }
  if($(".price ul li:last-child").is(":visible") === true) {
    totalPrice += 5;
  }

  $(".panel.price strong").text("$"+totalPrice);
}




});
