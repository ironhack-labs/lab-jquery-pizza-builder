// Write your Pizza Builder JavaScript in this file.
$(function(){
  $('.sauce-white').toggleClass('sauce-white');
  $('.crust-gluten-free').toggleClass('crust-gluten-free');
  $('aside li:eq(3)').toggle();
  $('aside li:eq(4)').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.btn-mushrooms').toggleClass('active');
  $('.btn-green-peppers').toggleClass('active');
})

$('.btn-pepperonni').click(function(){
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('aside li:eq(0)').toggle('aside li:eq(0)');
})

$('.btn-mushrooms').click(function(){
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('aside li:eq(1)').toggle('aside li:eq(1)');
})

$('.btn-green-peppers').click(function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('aside li:eq(2)').toggle('aside li:eq(2)');
})

$('.btn-sauce').click(function(){
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('aside li:eq(3)').toggle('aside li:eq(3)');
})

$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('aside li:eq(4)').toggle('aside li:eq(4)');
})

function totalPrice(){
  var liString = $('.price li:visible').text();
  console.log(liString);
  var liArray = liString.split('$')
  console.log(liArray);
  var total = 0;
  liArray.forEach(function(price){
   total += parseInt(price[1]);
   
  })
  console.log(total)

}