// Write your Pizza Builder JavaScript in this file.


$(document).ready( function () {
  $('.btn-pepperonni').click( function () {
    $('.pep').toggle();

  });
  $('.btn-mushrooms').click( function () {
    $('.mushroom').toggle();
  });
  $('.btn-green-peppers').click( function () {
    $('.green-pepper').toggle();
  });

  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').click( function () {
    $('.sauce').toggleClass('sauce-white');
  });
  $('.crust').removeClass('crust-gluten-free');
  $('.btn-crust').click( function () {
    $('.crust').toggleClass('crust-gluten-free');
  });

});
