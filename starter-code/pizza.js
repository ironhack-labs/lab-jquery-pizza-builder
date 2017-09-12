$(document).ready(function() {

//Initial Setup

$('.btn').removeClass('active');

$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.price ul li:nth-child(1)').hide();
$('.price ul li:nth-child(2)').hide();
$('.price ul li:nth-child(3)').hide();
$('.price ul li:nth-child(4)').hide();
$('.price ul li:nth-child(5)').hide();
$('.price strong').text('$10')


$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');

//Button Dynamics

$('.btn-pepperonni').click(function(){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $('.price ul li:nth-child(1)').toggle();
});

$('.btn-mushrooms').click(function(){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $('.price ul li:nth-child(2)').toggle();
});

$('.btn-green-peppers').click(function(){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $('.price ul li:nth-child(3)').toggle();
});

$('.btn-sauce').click(function(){
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $('.price ul li:nth-child(4)').toggle();
});

$('.btn-crust').click(function(){
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.price ul li:nth-child(5)').toggle();
});

$('button').click(function(){
$('.price strong').text(function(){
 var price = 10;
if($('.btn-green-peppers').hasClass('active')){
  price +=1 }
  if($('.btn-mushrooms').hasClass('active')){
    price +=1 }
  if($('.btn-pepperonni').hasClass('active')){
      price +=1 }
  if($('.btn-sauce').hasClass('active')){
        price +=3 }
  if($('.btn-crust').hasClass('active')){
          price +=5 }
  return '$' + price.toString()
})
})



});
