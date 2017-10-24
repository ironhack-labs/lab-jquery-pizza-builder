// Write your Pizza Builder JavaScript in this file.

$(".active").removeClass("active");
$('.green-pepper').hide();
$('.mushroom').hide();
$('.pep').hide();
$('.sauce-white').hide();
$('.crust').removeClass('crust-gluten-free');
$('.pPrice').hide();
$('.mPrice').hide();
$('.gPrice').hide();
$('.wPrice').hide();
$('.gfPrice').hide();

$('.btn-green-peppers').on('click', function() {
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $('.gPrice').toggle();

});

$('.btn-mushrooms').on('click', function() {
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $('.mPrice').toggle();
});

$('.btn-pepperonni').on('click', function() {
  $(this).toggleClass('active');
  $('.pep').toggle();
  $('.pPrice').toggle();
});

$('.btn-sauce').on('click', function() {
  $(this).toggleClass('active');
  $('.sauce').toggle('sauce-white');
  $('.wPrice').toggle();
});

$('.btn-crust').on('click', function() {
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.gfPrice').toggle();
});
