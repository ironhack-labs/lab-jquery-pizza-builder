// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $('.green-pepper').toggle();
  $('.pep').toggle();
  $('.stem').toggle();
  $('.cap').toggle();
  $('.sauce-white').toggle();
});

var priceString = $('strong').html();
var totalPrice = Number(priceString.slice(1));

$('.btn').click(function () {
  $(this).toggleClass('active');
});


$('.btn-pepperonni').click(function () {
  var display = $('aside ul li').eq(0).css('display');
  var pep = $('aside ul li').eq(0);
  if (display === 'none') {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
    $('.pep').toggle();
    toggleLIElements(0);
    $('strong').html(totalPrice);
});

function toggleLIElements(value) {
  var display = $('aside ul li').eq(value).css('display');
  var pep = $('aside ul li').eq(value);

  if (display === 'none') {
    pep.css('display', 'block');
  } else {
    pep.css('display', 'none');
  }
}

$('.btn-mushrooms').click(function () {
  var display = $('aside ul li').eq(1).css('display');
  var pep = $('aside ul li').eq(1);
  if (display === 'none') {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
    $('strong').html(totalPrice);
    $('.stem').toggle();
    $('.cap').toggle();
    toggleLIElements(1);
  });

$('.btn-green-peppers').click(function () {
  var display = $('aside ul li').eq(2).css('display');
  var pep = $('aside ul li').eq(2);
  if (display === 'none') {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
    $('strong').html(totalPrice);
    $('.green-pepper').toggle();
    toggleLIElements(2);
  });

$('.btn-sauce').click(function () {
    $('.sauce-white').toggle();
    var display = $('aside ul li').eq(3).css('display');
    var pep = $('aside ul li').eq(3);
    if (display === 'none') {
      totalPrice += 3;
    } else {
      totalPrice -= 3;
    }
      $('strong').html(totalPrice);
    toggleLIElements(3);
  });

$('.btn-crust').click(function () {
    $('.sauce-white').toggle();
    var display = $('aside ul li').eq(4).css('display');
    var pep = $('aside ul li').eq(4);
    if (display === 'none') {
      totalPrice += 5;
    } else {
      totalPrice -= 5;
    }
      $('strong').html(totalPrice);
    $('.crust-gluten-free').toggleClass('crust');
    toggleLIElements(4);
  });
