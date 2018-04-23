// Write your Pizza Builder JavaScript in this file.
$(window).load(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  activeCheck();
  calculateTotal();
});

$(".btn-pepperonni").click(function() {
  if ($(".pep").css("display") == "none") {
    $(".pep").css("display", "block");
    $(".btn-pepperonni").addClass("active");
  } else {
    $(".pep").css("display", "none");
    $(".btn-pepperonni").removeClass("active");
  }
});

$(".btn-mushrooms").click(function() {
  if ($(".mushroom").css("display") == "none") {
    $(".mushroom").css("display", "block");
    $(".btn-mushrooms").addClass("active");
  } else {
    $(".mushroom").css("display", "none");
    $(".btn-mushrooms").removeClass("active");
  }
});

$(".btn-green-peppers").click(function() {
  if ($(".green-pepper").css("display") == "none") {
    $(".green-pepper").css("display", "block");
    $(".btn-green-peppers").addClass("active");
  } else {
    $(".green-pepper").css("display", "none");
    $(".btn-green-peppers").removeClass("active");
  }
});

$(".btn-sauce").click(function() {
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
  }
});

$(".btn-crust").click(function() {
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
  }
});

function activeCheck(){
  let pepperonni = $(".price li")[0];
  let mushrooms = $(".price li")[1];
  let greenPeppers = $(".price li")[2];
  let sauce = $(".price li")[3];
  let crust = $(".price li")[4];
  
  
  if ($(".btn-pepperonni").hasClass("active")){
    $(pepperonni).css("display","list-item");
  }
  else{
    $(pepperonni).css("display","none");
  }

  if ($(".btn-mushrooms").hasClass("active")){
    $(mushrooms).css("display","list-item");
  }
  else{
    $(mushrooms).css("display","none");
  }

  if ($(".btn-green-peppers").hasClass("active")){
    $(greenPeppers).css("display","list-item");
  }
  else{
    $(greenPeppers).css("display","none");
  }

  if ($(".btn-sauce").hasClass("active")){
    $(sauce).css("display","list-item");
  }
  else{
    $(sauce).css("display","none");
  }

  if ($(".btn-crust").hasClass("active")){
    $(crust).css("display","list-item");
  }
  else{
    $(crust).css("display","none");
  }
}

function calculateTotal(){
  let total = 10;

  if ($(".btn-pepperonni").hasClass("active")){
    total += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")){
    total += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")){
    total += 1;
  }
  if ($(".btn-sauce").hasClass("active")){
    total += 3;
  }
  if ($(".btn-crust").hasClass("active")){
    total += 5;
  }

  $(".price strong").text("$" + total);
}



$(".btn").click(function(){
  activeCheck();
  calculateTotal();
});
// idea: 
//     use active class to hide or show the li containing prices

//     use "$(".price li")[0].innerText;" to cycle through all
//     of the li and use parseInt at the location of numbers 
//     in the string to pull the numbers and pop them into an
//     array. This should all happen in one function. 

//     Create another function for totaling all of the units
//     in the array and display them.

//     Create an on click for the btn class that will refresh
//     all calculations.
