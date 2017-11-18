// Write your Pizza Builder JavaScript in this file.

$(function (){
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
})


// click

$("button.btn-crust").click(function(){
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  totalPrice(); updatePrice();
});

$("button.btn-sauce").click(function(){
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  totalPrice(); updatePrice();
});

$("button.btn-pepperonni").click(function(){
  $(this).toggleClass("active");
  $(".pep").toggle();
  totalPrice(); updatePrice();
});


$("button.btn-mushrooms").click(function(){
  $(this).toggleClass("active");
  $(".mushroom").toggle();
  totalPrice(); updatePrice();
});


$("button.btn-green-peppers").click(function() {
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
  totalPrice(); updatePrice();
});


function updatePrice() {
  $(".btn-pepperonni").hasClass("active") ? $(".price li:nth-child(1)").show() : $(".price li:nth-child(1)").hide();
  $(".btn-mushrooms").hasClass("active") ? $(".price li:nth-child(2)").show() : $(".price li:nth-child(2)").hide();
  $(".btn-green-peppers").hasClass("active") ? $(".price li:nth-child(3)").show() : $(".price li:nth-child(3)").hide();
  $(".btn-sauce").hasClass("active") ? $(".price li:nth-child(4)").show() : $(".price li:nth-child(4)").hide();
  $(".btn-crust").hasClass("active") ? $(".price li:nth-child(5)").show() : $(".price li:nth-child(5)").hide();
}


function totalPrice() {
  var total = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-sauce").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-crust").hasClass("active")) {
    total += 1;
  }

  $("strong").text("$" + total);
}



//function updatePrice () {
// $("button").toArray().forEach(function(button, index){
// var listElement = $("ul price li")[index];
// if($(button).hasClass("active")){
//   $(listElement).show();
// }
// else {
//   $(listElement).hide();
// }
// }
// })
// }
