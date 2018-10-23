// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  let total = 21; 
  $('.btn-pepperonni').off('click').on('click', function() {
      if($('.btn-pepperonni').hasClass('active')) {
        $('.btn-pepperonni').removeClass('active');
        $('.pep').toggle();
        $('.price li:contains("$1 pepperonni")').toggle();
        $('.price strong').text('$' + (total-1));
        total -= 1;
      } else {
        $('.price li:contains("$1 pepperonni")').toggle();
        $('.btn-pepperonni').addClass('active');
        $('.pep').toggle();
        $('.price strong').text('$' + (total+1));
        total += 1;
      }
  });
  $('.btn-mushrooms').off('click').on('click', function() {
    if($('.btn-mushrooms').hasClass('active')) {
      $('.btn-mushrooms').removeClass('active');
      $('.mushroom').toggle();
      $('.price li:contains("$1 mushrooms")').toggle();
      $('.price strong').text('$' + (total-1));
      total -= 1;
    } else {
      $('.btn-mushrooms').addClass('active');
      $('.mushroom').toggle();
      $('.price li:contains("$1 mushrooms")').toggle();
      $('.price strong').text('$' + (total+1));
      total += 1;
    }
});
$('.btn-green-peppers').off('click').on('click', function() {
  if($('.btn-green-peppers').hasClass('active')) {
    $('.btn-green-peppers').removeClass('active');
    $('.green-pepper').toggle();
    $('.price li:contains("$1 green peppers")').toggle();
    $('.price strong').text('$' + (total-1));
    total -= 1;
  } else {
    $('.btn-green-peppers').addClass('active');
    $('.green-pepper').toggle();
    $('.price li:contains("$1 green peppers")').toggle();
    $('.price strong').text('$' + (total+1));
    total += 1;
  }
});
$('.btn-sauce').off('click').on('click', function() {
if($('.btn-sauce').hasClass('active')) {
  $('.btn-sauce').removeClass('active');
  $('.sauce').addClass('sauce-white');
  $('.price li:contains("$3 sauce")').text('$3 sauce-white');
} else {
  $('.btn-sauce').addClass('active');
  $('.sauce-white').removeClass('sauce-white');
  $('.price li:contains("$3 sauce-white")').text('$3 sauce');
}
});
$('.btn-crust').off('click').on('click', function() {
  if($('.btn-crust').hasClass('active')) {
    $('.btn-crust').removeClass('active');
    $('.crust').addClass('crust-gluten-free');
    $('.price li:contains("$5 crust")').text('$10 gluten-free-crust');
    $('.price strong').text('$' + (total+5));
    total += 5;
  } else {
    $('.btn-crust').addClass('active');
    $('.crust').removeClass('crust-gluten-free');
    $('.price li:contains("$10 gluten-free-crust")').text('$5 crust');
    $('.price strong').text('$' + (total-5));
    total -= 5;
  }
});

$('.sauce-white').addClass('sauce').removeClass('sauce-white');
$('.crust-gluten-free').addClass('crust').removeClass('crust-gluten-free');
$('.price li:contains("$3 white sauce")').text('$3 sauce');
$('.price li:contains("$5 gluten-free crust")').text('$5 crust');
});