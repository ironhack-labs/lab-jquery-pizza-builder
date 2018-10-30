// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


$(".price strong").html(`$${13}`);
let total = 13;

$(".btn-pepperonni").removeClass("active");
$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  if($(".btn-pepperonni").hasClass("active")){
    $(".btn-pepperonni").removeClass("active");
    $(".price ul li:first-child").show();
    total += 1;
  } else {
    $(".btn-pepperonni").addClass("active");
    $(".price ul li:first-child").hide();
    total -= 1;
  }
   $(".price strong").html(`$${total}`);
})

$(".btn-mushrooms").removeClass("active");
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  if($(".btn-mushrooms").hasClass("active")){
    $(".btn-mushrooms").removeClass("active");
    $(".price ul li:nth-child(2)").show();
    total += 1;
  } else {
    $(".btn-mushrooms").addClass("active");
    $(".price ul li:nth-child(2)").hide();
    total -= 1;
  }
  $(".price strong").html(`$${total}`);
});

$(".btn-green-peppers").removeClass("active");
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  if($(".btn-green-peppers").hasClass("active")){
    $(".btn-green-peppers").removeClass("active");
    $(".price ul li:nth-child(3)").show();
    total += 1;
  } else {
    $(".btn-green-peppers").addClass("active");
    $(".price ul li:nth-child(3)").hide();
    total -= 1;
  }
  $(".price strong").html(`$${total}`);
});


$(".sauce-white").hide();
$(".btn-sauce").click(function(){
  $(".sauce-white").toggle();
  if($(".btn-sauce").html() == "White sauce"){
    $(".btn-sauce").html("Regular sauce");
    $(".price ul li:nth-child(4)").show();
    total += 3;
  } else {
    $(".btn-sauce").html("White sauce");
    $(".price ul li:nth-child(4)").hide();
    total -= 3;
  }
  $(".price strong").html(`$${total}`);
});

$("#pizza section").removeClass("crust-gluten-free");
$(".btn-crust").click(function(){
if( $(".btn-crust").html() == "Gluten-free crust" ){
    $(".btn-crust").html("Regular crust");
    $("#pizza .crust").addClass("crust-gluten-free");
    $(".price ul li:nth-child(5)").show();
    total += 5;
  } else {
    $(".btn-crust").html("Gluten-free crust");
    $("#pizza .crust").removeClass("crust-gluten-free");
    $(".price ul li:nth-child(5)").hide();
    total -= 5;
  }
  $(".price strong").html(`$${total}`);
});

$(".price ul li:nth-child(n+4)").hide();
});

