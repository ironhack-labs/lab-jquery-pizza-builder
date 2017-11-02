$(document).ready(function() {
  var price = [10,1,1,1,-3,-5];
  $('.crust').toggleClass('crust-gluten-free');
  $('.sauce').toggleClass(' sauce-white');
  $('ul:last > :last').toggle();
  $('ul:last > :nth-child(4)').toggle();

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('ul:last > :first ').toggle();
    price[1] *= -1;
  });
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('ul:last > :nth-child(2) ').toggle();
    price[2] *= -1;
  });
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('ul:last > :nth-child(3) ').toggle();
    price[3] *= -1;
  });
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('ul:last > :nth-child(4) ').toggle();
    price[4] *= -1;
  });
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('ul:last > :last ').toggle();
    price[5] *= -1;
  });
$('strong').html = "$"+ toString(price.reduce(function(sum, value){
  if(value > 0){
    return sum + value;
  }else{
    return sum;
  }
},0));
});//document ready
