// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // On document load
  $('.green-pepper').css('display','none');
  $('.mushroom').css('display','none');
  $('.pep').css('display','none');
  $('.crust.crust-gluten-free').removeClass('crust-gluten-free');
  $('.sauce.sauce-white').removeClass('sauce-white');

  // Button clicks
  $('.btn-pepperonni').click(function() {
    $('.pep').css('display','block');
    $('.btn-pepperonni').addClass('active');
  });

  // $( "#clickme" ).click(function() {
  //   $( "#" ).toggle( "slow", function() {
  //     // Animation complete.
  //   });
  // });

  $('.btn-mushrooms').click(function() {
    $('.mushroom').css('display','block');
    $('.btn-pepperonni').addClass('active');
  });

  $('.btn-green-peppers').click(function() {
    $('.green-pepper').css('display','block');
    $('.btn-pepperonni').addClass('active');
  });

  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce sauce-white');
    $('.btn-pepperonni').addClass('active');
  });

  $('.btn-crust').click(function() {
    $('.crust').addClass('crust-gluten-free');
    $('.btn-pepperonni').addClass('active');
  });
});
