// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var pepperoni = $(".pep");
  var greenPepper = $(".green-pepper");
  var mushroom = $(".mushroom");
  $('.btn-pepperonni').click(function(){
    pepperoni.toggleClass('pep');
  });
  $('.btn-mushrooms').click(function(){
    mushroom.toggleClass('mushroom');
  });
  $('.btn-green-peppers').click(function(){
    greenPepper.toggleClass('green-pepper');
  });
});
