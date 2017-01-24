// Write your Pizza Builder JavaScript in this file.
$(document).on('ready', function (){
  console.log('linked');

  function setTotal(){
    var total = 10;
    if ($('.btn-pepperonni').hasClass('active')) total += 1;
    if ($('.btn-mushrooms').hasClass('active')) total += 1;
    if ($('.btn-green-peppers').hasClass('active')) total += 1;
    if ($('.btn-sauce').hasClass('active')) total += 3;
    if ($('.btn-crust').hasClass('active')) total += 5;
    $('.price strong').html('$' + String(total));
  }

  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn').removeClass('active');
  $('.btn-pepperonni').addClass('active');
  $('.btn-green-peppers').addClass('active');
  $('.btn-mushrooms').addClass('active');

  //prices
  $('.price ul > li:nth-child(4)').hide();
  $('.price li:nth-child(5)').hide();

  $('.btn-pepperonni').on('click', function(){
    $('.pep').toggle();
    if ($('#pizza > .pep').is(":visible")){
      $('.btn-pepperonni').addClass('active');
      $('.price li:nth-child(1)').show();
    } else {
      $('.btn-pepperonni').removeClass('active');
      $('.price li:nth-child(1)').hide();
    }
    setTotal();
  });

  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').toggle();
    if ($('#pizza > .green-pepper').is(":visible")){
      $('.btn-green-peppers').addClass('active');
      $('.price li:nth-child(3)').show();
    }
    else {
      $('.btn-green-peppers').removeClass('active');
      $('.price li:nth-child(3)').hide();
    }
    setTotal();
  });

  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').toggle();
    if ($('.btn-mushrooms').hasClass('active')){
      $('.btn-mushrooms').removeClass('active');
      $('.price li:nth-child(2)').hide();
    } else {
      $('.btn-mushrooms').addClass('active');
      $('.price li:nth-child(2)').show();
    }
    setTotal();
  });

  $('.btn-sauce').on('click', function(){
    $('.sauce').toggleClass('sauce-white');
    if ($('.btn-sauce').hasClass('active')){
      $('.btn-sauce').removeClass('active');
      $('.price li:nth-child(4)').hide();
    } else {
      $('.btn-sauce').addClass('active');
      $('.price li:nth-child(4)').show();
    }
    setTotal();
  });

  $('.btn-crust').on('click', function(){
    $('.crust').toggleClass('crust-gluten-free');
    if ($('.btn-crust').hasClass('active')){
      $('.btn-crust').removeClass('active');
      $('.price li:nth-child(5)').hide();
    } else {
      $('.btn-crust').addClass('active');
      $('.price li:nth-child(5)').show();
    }
    setTotal();
  });
});
