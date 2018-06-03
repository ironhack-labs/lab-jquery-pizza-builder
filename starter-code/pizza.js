// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $('.pep, .mushroom, .green-pepper').hide();
  $('.btn-pepperonni, .btn-mushrooms,.btn-green-peppers, .btn-sauce, .btn-crust').removeClass('active');
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');  
  $('.price > ul > li:nth-child(4), .price > ul > li:last-child').hide();
  $('.price > strong').text('$10');
  var totalPrice = 10;
  
  $('.btn-pepperonni').click(function () {
    $('.pep').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(1)').show();
      totalPrice += 1;
    } else {
      $('.price > ul > li:nth-child(1)').hide();
      totalPrice -= 1;
    }
    $('.price > strong').text('$' + totalPrice);
  });
  $('.btn-mushrooms').click(function () {
    $('.mushroom').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(2)').show();
      totalPrice += 1;
    } else {
      $('.price > ul > li:nth-child(2)').hide();
      totalPrice -= 1;
    }
    $('.price > strong').text('$' + totalPrice);
  });
  $('.btn-green-peppers').click(function () {
    $('.green-pepper').toggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(3)').show();
      totalPrice += 1;
    } else {
      $('.price > ul > li:nth-child(3)').hide();
      totalPrice -= 1;
    }
    $('.price > strong').text('$' + totalPrice);
  });
  $('.btn-sauce').click(function () {
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:nth-child(4)').show();
      totalPrice += 3;
    } else {
      $('.price > ul > li:nth-child(4)').hide();
      totalPrice -= 3;
    }
    $('.price > strong').text('$' + totalPrice);
  });
  $('.btn-crust').click(function () {
    $('.crust').toggleClass('crust-gluten-free');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.price > ul > li:last-child').show();
      totalPrice += 5;
    } else {
      $('.price > ul > li:last-child').hide();
      totalPrice -= 5;
    }
    $('.price > strong').text('$' + totalPrice);
  });
    
});

