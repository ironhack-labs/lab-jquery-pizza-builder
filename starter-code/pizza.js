// Write your Pizza Builder JavaScript in this file.
window.onload = function () {
$(".green-pepper").removeClass("green-pepper");
$(".cap").text("");
$("#pizza  section div").removeClass("stem cap");
$("#pizza section").removeClass("mushroom");
$(".pep").text("");
$("#pizza section").removeClass("pep");
 $("#pizza section").removeClass("crust-gluten-free");
 $("#pizza section section:last-child").removeClass("sauce-white");
 $(".active").removeClass("active");
 $(".price li").hide();



$(".btn-green-peppers").click(function(){
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(3)").show();} 
    else {
      $(".price li:nth-of-type(3)").hide();
    }
  for (let i = 1; i < 22; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("green-pepper"); 
  }
    
  })

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")){
      $(".price li:nth-of-type(2)").show();} 
      else {
        $(".price li:nth-of-type(2)").hide();
      }
    for (let i = 22; i < 54; i++) {
      $("#pizza section:nth-of-type(" + i + ")").toggleClass("mushroom");
      
    }

    $("#pizza section div:first-child").toggleClass("cap");
    $("#pizza section div:last-child").toggleClass("stem");
      
  })



$(".btn-pepperonni").click(function(){
  $(this).toggleClass("active");

  if ($(this).hasClass("active")){
    $(".price li:first-child").show();} 
    else {
      $(".price li:first-child").hide();
    }
  
  for (let i = 54; i < 86; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("pep");
 
  }
  
})

$(".btn-sauce").click(function(){
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(4)").show();} 
    else {
      $(".price li:nth-of-type(4)").hide();
    }
  $("#pizza section section:last-child").toggleClass("sauce-white");
})

$(".btn-crust").click(function(){
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(5)").show();} 
    else {
      $(".price li:nth-of-type(5)").hide();
    }
  $("#pizza section:last-child:not(section section)").toggleClass("crust-gluten-free");
})






}