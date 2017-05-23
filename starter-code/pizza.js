// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $("#pizza .green-pepper").hide();
  $("#pizza .mushroom").hide();
  $("#pizza .pep").hide();
  $("#pizza .crust .sauce-white").hide();
  $("#pizza .crust .cheese").hide();
  $(".btn-mushrooms").toggleClass("active");
  $(".btn-pepperonni").toggleClass("active");
  $(".btn-green-peppers").toggleClass("active");
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".price li, .price b").hide();
});


$(".btn-pepperonni").click(function(){
  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .pep").show();
    $(".price li:nth-child(1)").show();
  } else {
    $("#pizza .pep").hide();
    $(".price li:nth-child(1)").hide();
  }
});

$(".btn-mushrooms").click(function(){
  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .mushroom").show();
    $(".price li:nth-child(2)").show();
  } else {
    $("#pizza .mushroom").hide();
    $(".price li:nth-child(2)").hide();
  }
});

$(".btn-green-peppers").click(function(){
  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .green-pepper").show();
      $(".price li:nth-child(3)").show();
  } else {
    $("#pizza .green-pepper").hide();
      $(".price li:nth-child(3)").hide();
  }
});

$(".btn-sauce").click(function() {
  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .crust .sauce-white").show();
    $(".price li:nth-child(4)").show();
  } else {
    $("#pizza .crust .sauce-white").hide();
    $(".price li:nth-child(4)").hide();
  }
});

$(".btn-crust").click(function() {
  $(this).toggleClass("active");
  if($(this).hasClass("active")){
    $("#pizza .crust .cheese").show();
    $(".price b").show();
  } else {
    $("#pizza .crust .cheese").hide();
    $(".price b").hide();
  }
});
