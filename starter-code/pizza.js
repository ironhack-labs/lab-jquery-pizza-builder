//$('.btn-pepperonni').click( function() {
  //$('.pep').css("display","none");
//});

$('.btn-pepperonni').click( function() {
  $('.pep').toggleClass("hidden");
  $('.btn-pepperonni').toggleClass("active");
});

$('.btn-green-peppers').click( function() {
  $('.green-pepper').toggleClass("hidden");
  $('.btn-green-peppers').toggleClass("active");

});

$('.btn-mushrooms').click( function() {
  $('.mushroom').toggleClass("hidden");
  $('.btn-mushrooms').toggleClass("active");
});

$('.crust').removeClass('crust-gluten-free');

$('.btn-crust').click( function() {
  $('.crust').toggleClass("crust-gluten-free");
  $('.btn-crust').toggleClass("active");
});

$('.sauce').removeClass('sauce-white');

$('.btn-sauce').click( function() {
  $('.sauce').toggleClass("sauce-white");
  $('.btn-sauce').toggleClass("active");
});

$('aside ul li').
