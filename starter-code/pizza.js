// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $('.pep, .mushroom, .green-pepper').hide();
  $('.btn-pepperonni, .btn-mushrooms,.btn-green-peppers, .btn-sauce, .btn-crust').removeClass('active');
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');  
  $('.price > ul > li:nth-child(4), .price > ul > li:last-child').hide();


  $('.btn-pepperonni').click(function () {
    $('.pep').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(1)').show();
    } else {
      $('.price > ul > li:nth-child(1)').hide();
    }
  });
  $('.btn-mushrooms').click(function () {
    $('.mushroom').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(2)').show();
    } else {
      $('.price > ul > li:nth-child(2)').hide();
    }
  });
  $('.btn-green-peppers').click(function () {
    $('.green-pepper').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(3)').show();
    } else {
      $('.price > ul > li:nth-child(3)').hide();
    }
  });
  $('.btn-sauce').click(function () {
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(4)').show();
    } else {
      $('.price > ul > li:nth-child(4)').hide();
    }
  });
  $('.btn-crust').click(function () {
    $('.crust').toggleClass('crust-gluten-free');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:last-child').show();
    } else {
      $('.price > ul > li:last-child').hide();
    }
  });
  
});

