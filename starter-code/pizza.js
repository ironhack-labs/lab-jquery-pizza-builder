// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on('click',function(){
  $('.pep').toggleClass('display-none');
  $('.btn-pepperonni').toggleClass('active');
  $('.price ul li:first-child').toggleClass('display-none');
  if($('.btn-pepperonni').hasClass('active')){
  $('.price strong').text(parseInt($('.price strong').text()) +1)
  }else{
    $('.price strong').text(parseInt($('.price strong').text()) -1)
  }
})
$('.btn-mushrooms').on('click',function(){
  $('.mushroom').toggleClass('display-none');
  $('.btn-mushrooms').toggleClass('active');
  $('.price ul li:nth-child(2)').toggleClass('display-none');
  if($('.btn-mushrooms').hasClass('active')){
    $('.price strong').text(parseInt($('.price strong').text()) +1)
    }else{
      $('.price strong').text(parseInt($('.price strong').text()) -1)
    }
})
$('.btn-green-peppers').on('click',function(){
  $('.green-pepper').toggleClass('display-none');
  $('.btn-green-peppers').toggleClass('active');
  $('.price ul li:nth-child(3)').toggleClass('display-none');
  if($('.btn-green-peppers').hasClass('active')){
    $('.price strong').text(parseInt($('.price strong').text()) +1)
    }else{
      $('.price strong').text(parseInt($('.price strong').text()) -1)
    }
})
$('.price ul li:nth-child(5)').addClass('display-none');
$('.btn-crust').on('click',function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price ul li:nth-child(5)').toggleClass('display-none');
  if($('.btn-crust').hasClass('active')){
    $('.price strong').text(parseInt($('.price strong').text()) +5)
    }else{
      $('.price strong').text(parseInt($('.price strong').text()) -5)
    }
  
})
$('.price ul li:nth-child(4)').addClass('display-none');
$('.btn-sauce').on('click',function(){
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price ul li:nth-child(4)').toggleClass('display-none');
  if($('.btn-sauce').hasClass('active')){
    $('.price strong').text(parseInt($('.price strong').text()) +3)
    }else{
      $('.price strong').text(parseInt($('.price strong').text()) -3)
    }
})