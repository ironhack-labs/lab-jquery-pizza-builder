// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var pepperoni = $(".pep");
  var greenPepper = $(".green-pepper");
  var mushroom = $(".mushroom");
  var whiteSauce = $(".sauce-white");
  var crustGlutenFree = $(".crust-gluten-free");
  $('.btn-pepperonni').click(function(){
    pepperoni.toggle();
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
    crustGlutenFree.toggleClassName('crust-gluten-free');
  });
});
