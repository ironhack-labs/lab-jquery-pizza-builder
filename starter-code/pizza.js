// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

$(".opc").hide();
toggleGreenpeppers();
toggleMushrooms();
togglePepperoni();
toogleCrust();
toogleSauce();
totalPrice();
});

function togglePepperoni() {
$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price ul li:first-child ").toggle();
  totalPrice();
});
}

function toggleMushrooms() {
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price ul li:nth-child(2)").toggle();
  totalPrice();
});
}

function toggleGreenpeppers() {
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price ul li:nth-child(3)").toggle();
  totalPrice();
});
}


function toogleSauce(){
 $('.btn-sauce').click(function(){
   $(".sauce").toggleClass("sauce-white");
   $(".btn-sauce").toggleClass("active");
   $(".price ul li:nth-child(4)").toggle();
   totalPrice();
 });
}

function toogleCrust(){
 $('.btn-crust').click(function(){
   $(".crust").toggleClass("crust-gluten-free");
   $(".btn-crust").toggleClass("active");
   $(".price ul li:nth-child(5)").toggle();
   totalPrice();
 });
}



function totalPrice(){
 var price = 10;
 if($(".btn-crust").hasClass("active")) price+=5;
 if($(".btn-sauce").hasClass("active")) price+=3;
 if($(".btn-green-peppers").hasClass("active")) price+=1;
 if($(".btn-mushrooms").hasClass("active")) price+=1;
 if($(".btn-pepperonni").hasClass("active")) price+=1;

 $(".price strong").replaceWith("<strong>$"+ price +"</strong>");

}
