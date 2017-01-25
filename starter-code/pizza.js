$(document).on('ready',function(){
  console.log('linked');
  $('.btn-pepperonni').on('click', function(){
    $('.pep').toggle();
  });
  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').toggle();
  });
  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').toggle();
  });

  $('.sauce').removeClass('sauce-white');

  $('.btn-sauce').on('click', function(){
    $('.sauce').addClass('sauce-white');
  });

  $('.crust').removeClass('crust-gluten-free');

  $('.btn-crust').on('click',function(){
    $('.crust').addClass('crust-gluten-free');
  });
});// Write your Pizza Builder JavaScript in this file.
