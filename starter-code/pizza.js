// Write your Pizza Builder JavaScript in this file.
//add and remove pepperonni, mushrooms and green peppers
$(document).ready(function() {

//when clicking "btn-pepperonni" display / remove pepperoni
$('.btn-pepperonni').click(function(){
  //make peperronis invisible
  $('.pep').toggle(); 
  ($(this)).toggleClass('active');
});

$('.btn-mushrooms').click(function(){
  //make peperronis invisible
  $('.mushroom').toggle(); 
  ($(this)).toggleClass('active');
});

$('.btn-green-peppers').click(function(){
  //make peperronis invisible
  $('.green-pepper').toggle(); 
  ($(this)).toggleClass('active');
});

//setting default regular sauce
$('.sauce').removeClass('sauce-white');
$('.btn-sauce').click(function(){
 $('.sauce').toggleClass('sauce-white'); 
 $($(this)).toggleClass('active');
});

//setting default regular crust
$('.crust').removeClass('crust-gluten-free');
$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $($(this)).toggleClass('active');
});

}); // end DOMready   

