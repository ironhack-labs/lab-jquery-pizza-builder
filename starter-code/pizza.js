// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $('.active').removeClass('active');
  $('.price > ul').children().hide();

  $('.pep').hide();

  $('.btn-pepperonni').click(function(e){
    $(this).toggleClass('active');
    $('.price li:first-child').toggle(500);
    $('.pep').toggle(500);
    calcPrice();


  });

  $('.mushroom').hide();

  $('.btn-mushrooms').click(function(e){
    $(this).toggleClass('active');
    $('.price li:nth-child(2)').toggle(500);
    $('.mushroom').toggle(500);
    calcPrice();


  });

  $('.green-pepper').hide();

  $('.btn-green-peppers').click(function(e){
    $(this).toggleClass('active');
    $('.price li:nth-child(3)').toggle(500);
    $('.green-pepper').toggle(500);
    calcPrice();


  });

  $('.crust').removeClass('crust-gluten-free');

  $('.btn-crust').click(function(){
    $(this).toggleClass('active');
    $('.price ul > li:last-child').toggle(500);
    $('.crust').toggleClass('crust-gluten-free');
    calcPrice();


  });

  $('.sauce').removeClass('sauce-white');

  $('.btn-sauce').click(function(){
    $(this).toggleClass('active');
    $('.price ul > li:nth-child(4)').toggle(500);
    $('.sauce').toggleClass('sauce-white');
    calcPrice();



  });

});



function calcPrice(){

var totalSum = 10;

 if($('.btn-pepperonni').hasClass('active') ){
   totalSum += 1;
  }

  if($('.btn-mushrooms').hasClass('active')) {
    totalSum += 1;
  }

 if ($('.btn-green-peppers').hasClass('active')){
   totalSum += 1;
  }

  if ($('.btn-sauce').hasClass('active')) {
    totalSum += 3;
  }

  if ($('.btn-crust').hasClass('active')) {
    totalSum += 5;
  }

  $('.price strong').html('$'+totalSum);
  console.log('$' + totalSum);
}
