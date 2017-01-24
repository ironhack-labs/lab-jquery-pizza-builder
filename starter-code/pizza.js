// Write your Pizza Builder JavaScript in this file.
$(document).on('ready', function(){
  console.log('linked');

//Set if buttons are active or not by default
$('.btn-pepperonni, .btn-green-peppers, .btn-mushrooms').addClass('active');
$('.btn-sauce, .btn-crust').removeClass('active');
//Remove class from crust and sauce by default (sauce-white & gluten)
$('.crust').removeClass('.crust crust-gluten-free');
$('.sauce').removeClass('.sauce sauce-white');

$('.panel > .price').hide();

//triggers the button on and of and toggle bwetteen active state
  $('.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
        $(this).toggleClass('active');
  });

  $('.btn-mushrooms').on('click', function() {
    $('.mushroom').toggle();
      $(this).toggleClass('active');
  });

  $('.btn-green-peppers').on('click', function() {
    $('.green-pepper').toggle();
      $(this).toggleClass('active');
  });

  $('.btn-sauce').on('click', function() {
    $('.sauce').toggleClass('.sauce sauce-white');
      $(this).toggleClass('active');
  });

  $('.btn-crust').on('click', function() {
    $('.crust').toggleClass('.crust crust-gluten-free');
      $(this).toggleClass('active');
  });
});
