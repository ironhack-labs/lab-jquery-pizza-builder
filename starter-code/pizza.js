
// Write your Pizza Builder JavaScript in this file.
var total = Number($('#totalPrice').text().replace(/[^0-9\.]+/g,""));

    var clicked = true;
  $('.btn-pepperoni').on('click', function(e) {
    $('.pep').toggle();
    if($(this).hasClass('active')) {
      $('.price ul li:first').hide();
    } else {
      $('.price ul li:first').show();
    }

    if(clicked === true) {
      total = total - 1;
      $('#totalPrice').text('$' + total);
      clicked = false;
    } else if(clicked === false) {
      total = total + 1;
        $('#totalPrice').text('$' + total);
      clicked = true;
    }
  });
  var clickedmush = true;
  $('.btn-mushrooms').on('click', function(e) {
    $('.mushroom').toggle();
    if($(this).hasClass('active')) {
      $('.price ul li:nth-child(2)').hide();
    } else {
      $('.price ul li:nth-child(2)').show();
    }
    if(clickedmush === true) {
      total = total - 1;
      $('#totalPrice').text('$' + total);
      clickedmush = false;
    } else if(clickedmush === false) {
      total = total + 1;
        $('#totalPrice').text('$' + total);
      clickedmush = true;
    }
  });

  var clickedpeppers = true;
  $('.btn-green-peppers').on('click', function(e) {
    $('.green-pepper').toggle();
    if($(this).hasClass('active')) {
      $('.price ul li:nth-child(3)').hide();
    } else {
      $('.price ul li:nth-child(3)').show();
    }
    if(clickedpeppers === true) {
      total = total - 1;
      $('#totalPrice').text('$' + total);
      clickedpeppers = false;
    } else if(clickedpeppers === false) {
      total = total + 1;
        $('#totalPrice').text('$' + total);
      clickedpeppers = true;
    }
  });

$('.price ul li:nth-child(4)').hide();

var clickedsauce = false;
$('.sauce').removeClass('sauce-white');
  $('.btn-sauce').on('click', function(e) {
    if($('.sauce').hasClass('sauce-white')) {
      $('.sauce').removeClass('sauce-white');
      $('.price ul li:nth-child(4)').hide();
    } else {
      $('.sauce').addClass('sauce-white');
      $('.price ul li:nth-child(4)').show();
    }
    if(clickedsauce === true) {
      total = total - 3;
      $('#totalPrice').text('$' + total);
      clickedsauce = false;
    } else if(clickedsauce === false) {
      total = total + 3;
        $('#totalPrice').text('$' + total);
      clickedsauce = true;
    }
  });

$('.price ul li:nth-child(5)').hide();

var clickedcrust = false;
$('.crust').removeClass('crust-gluten-free');

$('.btn-crust').on('click', function(e) {
    if($('.crust').hasClass('crust-gluten-free')) {
      $('.crust').removeClass('crust-gluten-free');
      $('.price ul li:nth-child(5)').hide();
    } else {
      $('.crust').addClass('crust-gluten-free');
      $('.price ul li:nth-child(5)').show();
    }
    if(clickedcrust === true) {
      total = total - 5;
      $('#totalPrice').text('$' + total);
      clickedcrust = false;
    } else if(clickedcrust === false) {
      total = total + 5;
        $('#totalPrice').text('$' + total);
      clickedcrust = true;
    }
  });

//Put buttons in correct active state
$('.btn-crust, .btn-sauce').removeClass('active');

$('.btn').on('click', function(e) {
  $(this).toggleClass('active');
});
