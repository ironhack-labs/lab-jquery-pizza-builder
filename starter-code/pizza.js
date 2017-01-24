// Write your Pizza Builder JavaScript in this file.

var pepps = 1;
var mushs = 1;
var greens = 1;
var crustys = 0;
var saucys = 0;

function getTotalPrice(){
  var sum = "$" + (10 + pepps + mushs + greens + saucys + crustys) + ".00";
  console.log(sum);
  $("#total-price").html(sum);
}

getTotalPrice();


$(".btn-pepperonni").click(function() {
  if ($(".btn-pepperonni").hasClass("active") === true) {
    $(".price ul").append("<li id='pepp'>$1 pepperoni</li>");
    pepps = 1;
    getTotalPrice();


  }else {
    $("#pepp").remove();
    pepps = 0;
    getTotalPrice();

  }
  $(".pep").toggleClass("hide");
  $(".btn-pepperonni").toggleClass("active");

});

$(".btn-mushrooms").click(function() {
  if ($(".btn-mushrooms").hasClass("active") === true) {
    $(".price ul").append("<li id='mushh'>$1 mushrooms</li>");
    mushs = 1;
    getTotalPrice();

  }else {
    $("#mushh").remove();
    mushs = 0;
    getTotalPrice();

  }
  $(".mushroom").toggleClass("hide");
  $(".btn-mushrooms").toggleClass("active");

});

$(".btn-green-peppers").click(function() {
  if ($(".btn-green-peppers").hasClass("active") === true) {
    $(".price ul").append("<li id='green'>$1 green peppers</li>");
    greens = 1;
    getTotalPrice();

  }else {
    $("#green").remove();
    greens = 0;
    getTotalPrice();

  }
  $(".green-pepper").toggleClass("hide");
  $(".btn-green-peppers").toggleClass("active");

});

$(".btn-sauce").click(function() {
  if ($(".btn-sauce").hasClass("active") === true) {
    $(".price ul").append("<li id='saucy'>$3 white sauce</li>");
    saucys = 3;
    getTotalPrice();

  }else {
    $("#saucy").remove();
    saucys = 0;
    getTotalPrice();

  }
  $(".sauce").toggleClass(" sauce-white");
  $(".btn-sauce").toggleClass("active");

});

$(".btn-crust").click(function() {
  if ($(".btn-crust").hasClass("active") === true) {
    $(".price ul").append("<li id='crusty'>$5 gluten-free crust</li>");
    crustys = 5;
    getTotalPrice();

  }else {
  $("#crusty").remove();
  crustys = 0;
  getTotalPrice();

  }
  $(".crust").toggleClass(" crust-gluten-free");
  $(".btn-crust").toggleClass("active");

});
