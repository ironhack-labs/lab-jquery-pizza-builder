// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

//iteraction 1
  $(".btn-pepperonni").click(function(){
      $(".pep").toggle();
  });

  $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle();
  });

  //iteraction 2
  $(".crust").removeClass("crust-gluten-free");

  $(".sauce").removeClass("sauce-white");
  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();

  $(".btn-sauce").click(function(){
      $(".sauce").toggleClass("sauce-white");
  });

  $(".btn-crust").click(function(){
      $(".crust").toggleClass("crust-gluten-free");
  });
});

//iteraction 3
var pepper = $(".btn-pepperonni");
pepper.click(function() {
  $(".btn-pepperonni").toggleClass("active");
  if ($(".btn-pepperonni").hasClass("active")){
    $(".price ul li:nth-child(1)").show();
  }else{
    $(".price ul li:nth-child(1)").hide();
  }
});

var mush = $(".btn-mushrooms");
mush.click(function() {
  $(".btn-mushrooms").toggleClass("active");
  if ($(".btn-mushrooms").hasClass("active")){
    $(".price ul li:nth-child(2)").show();
  }else{
    $(".price ul li:nth-child(2)").hide();
  }
});

var gp = $(".btn-green-peppers");
gp.click(function() {
  $(".btn-green-peppers").toggleClass("active");
  if ($(".btn-green-peppers").hasClass("active")){
    $(".price ul li:nth-child(3)").show();
  }else{
    $(".price ul li:nth-child(3)").hide();
  }
});

var sauce = $(".btn-sauce");
sauce.click(function() {
  $(".btn-sauce").toggleClass("active");
  if ($(".btn-sauce").hasClass("active")){
    $(".price ul li:nth-child(4)").hide();
  }else{
    $(".price ul li:nth-child(4)").show();
  }
});

var gluten = $(".btn-crust");
gluten.click(function() {
  $(".btn-crust").toggleClass("active");
  if ($(".btn-crust").hasClass("active")){
    $(".price ul li:nth-child(5)").hide();
  }else{
    $(".price ul li:nth-child(5)").show();
  }
});
