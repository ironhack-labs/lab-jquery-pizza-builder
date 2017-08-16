// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


  var pepperonniPrice =1;
  var mushroomPrice =1;
  var greenPrice =1;
  var whiteSauce = 3;
  var crustGluten = 5;
  var total = 21;
  $('.totalCost').html('$'+total);

  $('.btn-pepperonni').click(function(){
    $('.btn-pepperonni').toggleClass('active');
    $('.pep').toggle();
    $('.pep-price').toggle();
    $('.pep-price').html('$'+pepperonniPrice+ ' pepperonni');
    $('.totalCost').html('$'+ (total - pepperonniPrice));
  })


  $('.btn-mushrooms').click(function(){
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom').toggle();
    $('.mush-price').toggle();
    $('.pep-price').html('$'+mushroomPrice+ ' pepperonni');
  })

  $('.btn-green-peppers').click(function(){
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper').toggle();
    $('.green-price').toggle();
    $('.pep-price').html('$'+greenPrice+ ' pepperonni');
  })
  $('.btn-sauce').click(function(){
    $('.btn-sauce').toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('.sauce-price').toggle();
    $('.pep-price').html('$'+whiteSauce+ ' pepperonni');
  })
  $('.btn-crust').click(function(){
    $('.btn-crust').toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('.crust-price').toggle();
    $('.pep-price').html('$'+crustGluten+ ' pepperonni')
});
});
