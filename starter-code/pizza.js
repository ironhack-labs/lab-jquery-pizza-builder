$(function(){
// Boton pepperoni
$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");

$("aside.panel strong").text(sumaTotal());

$(".btn-crust").click(function(){

  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".cheese").toggle();
  }
  else {
    $(".cheese").toggle();
  }
  $("aside.panel li:nth-child(5)").toggle();
  $("aside.panel strong").text(sumaTotal());
});
  $(".btn-sauce").click(function(){

  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".sauce").toggle();
  }
  else {
    $(".sauce").toggle();
  }
  $("aside.panel li:nth-child(4)").toggle();
  $("aside.panel strong").text(sumaTotal());
});

$(".btn-pepperonni").click(function(){
  $("aside.panel li:nth-child(1)").toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".pep").toggle();
  }
  else {
    $(".pep").toggle();
  }
  $("aside.panel strong").text(sumaTotal());
});
$(".btn-green-peppers").click(function(){
  $("aside.panel li:nth-child(3)").toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".green-pepper").toggle();
  }
  else {
    $(".green-pepper").toggle();
  }
  $("aside.panel strong").text(sumaTotal());
});
$(".btn-mushrooms").click(function(){
  $("aside.panel li:nth-child(2)").toggle();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".mushroom").toggle();
  }
  else {
    $(".mushroom").toggle();
  }
  $("aside.panel strong").text(sumaTotal());
});


//Write your Pizza Builder JavaScript in this file.
});

function sumaTotal() {
  var sum = 10;
   if( $(".btn-pepperonni").hasClass("active")) {
     sum +=1 ;
   }
   if( $(".btn-mushrooms").hasClass("active")) {
     sum +=1 ;
   }
   if( $(".btn-green-peppers").hasClass("active")) {
     sum +=1 ;
   }
   if( $(".btn-sauce").hasClass("active")) {
     sum +=3 ;
   }
   if( $(".btn-crust").hasClass("active")) {
     sum +=5;
   }
return sum;

 };
