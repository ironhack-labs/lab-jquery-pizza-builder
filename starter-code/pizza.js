// Write your Pizza Builder JavaScript in this file.


$(document).ready( function () {
  $('.btn-pepperonni').click( function () {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.panel.price ul li:nth-child(1)').toggle();

  });
  $('.btn-mushrooms').click( function () {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.panel.price ul li:nth-child(2)').toggle();
  });

  $('.panel.price ul li:nth-child(3)').toggle();
  $('.green-pepper').toggle();
  $('.btn-green-peppers').click( function () {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.panel.price ul li:nth-child(3)').toggle();
  });

  $('.sauce').removeClass('sauce-white');
  $('.panel.price ul li:nth-child(4)').toggle();
  $('.btn-sauce').click( function () {
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.panel.price ul li:nth-child(4)').toggle();
  });

  $('.crust').removeClass('crust-gluten-free');
  $('.panel.price ul li:nth-child(5)').toggle();
  $('.btn-crust').click( function () {
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.panel.price ul li:nth-child(5)').toggle();
  });

});
