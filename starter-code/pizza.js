// Write your Pizza Builder JavaScript in this file.
$(document).ready(function (){
  $('.crust-gluten-free').removeClass('crust-gluten-free');
  $('.sauce-white').removeClass('sauce-white');
  $('.price ul li:nth-child(4)').hide();
  $('.price ul li:nth-child(5)').hide();


  $('.btn-pepperonni').click(function(){
    if ($(this).hasClass('active')) {
      $('.pep').hide();
      $('.price ul li:nth-child(1)').hide();
      $(this).removeClass('active');
    } else {
      $('.pep').show();
      $('.price ul li:nth-child(1)').show();
      $(this).addClass('active');
    }
    total();
  })

  $('.btn-green-peppers').click(function(){
    if ($(this).hasClass('active')) {
      $('.green-pepper').hide();
      $('.price ul li:nth-child(3)').hide();
      $(this).removeClass('active');
    } else {
      $('.green-pepper').show();
      $('.price ul li:nth-child(3)').show();
      $(this).addClass('active');
    }
    total();
  })

  $('.btn-mushrooms').click(function(){
    if ($(this).hasClass('active')) {
      $('.mushroom').hide();
      $('.price ul li:nth-child(2)').hide();
      $(this).removeClass('active');
    } else {
      $('.mushroom').show();
      $('.price ul li:nth-child(2)').show();
      $(this).addClass('active');
    }
    total();
  })

  $('.btn-crust').click(function(){
    if ($(this).hasClass('active')){
      $('.crust').addClass('crust-gluten-free');
      $('.price ul li:nth-child(5)').show();
      $(this).removeClass('active');
    } else {
      $('.crust-gluten-free').addClass('crust');
      $('.crust').removeClass('crust-gluten-free');
      $('.price ul li:nth-child(5)').hide();
      $(this).addClass('active');
    }
    total();
  })

  $('.btn-sauce').click(function(){
    if ($(this).hasClass('active')){
      $('.sauce').addClass('sauce-white');
      $('.price ul li:nth-child(4)').show();
      $(this).removeClass('active');
    } else {
      $('.sauce-white').addClass('sauce');
      $('.sauce').removeClass('sauce-white');
      $('.price ul li:nth-child(4)').hide();
      $(this).addClass('active');
    }
    total();
  })

 function total(){
  $('strong').text(function(){
    var total = 10;
    for(var i = 1; i < $('.price ul ').length; i++){
      total += parseInt($('.price ul li:nth-child('+i+')[0]'));
    }
    $(this).text(total);
  })
}










})