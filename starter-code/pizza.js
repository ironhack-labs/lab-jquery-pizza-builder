$(document).ready(function() {

  $('.crust').toggleClass('crust-gluten-free');
  $('.sauce').toggleClass('sauce-white');
  $('ul:last > :last ').toggle();

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('ul:last > :first ').toggle();
  });
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('ul:last > :nth-child(2) ').toggle();
  });
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('ul:last > :nth-child(3) ').toggle();
  });
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('ul:last > :nth-child(4) ').toggle();
  });
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('ul:last > :last ').toggle();
  });

});//document ready
