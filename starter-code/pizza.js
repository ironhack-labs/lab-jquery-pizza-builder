// Write your Pizza Builder JavaScript in this file.
var price = parseInt($(".panel.price strong").html().slice(1));
var realPrice = (price - 3 - 5);
$(".panel.price strong").html("$" + realPrice);

$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(1)").toggle();
  $(this).hasClass("active") ? realPrice += 1 : realPrice -= 1;
  $(".panel.price strong").html("$" + realPrice);
})

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(2)").toggle();
  $(this).hasClass("active") ? realPrice += 1 : realPrice -= 1;
  $(".panel.price strong").html("$" + realPrice);
})

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(3)").toggle();
  $(this).hasClass("active") ? realPrice += 1 : realPrice -= 1;
  $(".panel.price strong").html("$" + realPrice);
})

$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
$(".panel.price ul li:nth-child(4)").hide();
$(".panel.price ul li:nth-child(5)").hide();

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(4)").toggle();
  $(this).hasClass("active") ? realPrice += 3 : realPrice -= 3;
  $(".panel.price strong").html("$" + realPrice);
})

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(5)").toggle();
  $(this).hasClass("active") ? realPrice += 5 : realPrice -= 5;
  $(".panel.price strong").html("$" + realPrice);
})

