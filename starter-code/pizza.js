// Write your Pizza Builder JavaScript in this file
$(document).ready(function(){



var greenPepper = $('.green-pepper');
var mushroom = $('.mushroom');
var pepperonni = $('.pep');
var glutenFreeCrust = $('.crust-gluten-free');
var whiteSauce = $('.sauce-white');
greenPepper.hide();
mushroom.hide();
pepperonni.hide();

$('.btn-pepperonni').click(function(){
  pepperonni.toggle();
});
$('.btn-mushrooms').click(function(){
  mushroom.toggle();
});
$('.btn-green-peppers').click(function(){
  greenPepper.toggle();
});

$('.btn-sauce').click(function(){
  whiteSauce.toggle();
});

$('.btn-crust').click(function(){
  glutenFreeCrust.toggle(); //// NO CRUST FOR THE HIPPIES
});


});

// Unfinished Tuesday 6:30pm-ish. Oleh, Javi, Kev0
