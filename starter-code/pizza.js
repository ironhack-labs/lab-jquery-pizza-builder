// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    var hasPepperoni = false;
    var hasMushrooms = false;
    var hasGreenPepper = false;
    var isGlutenFree = false;
    var isWhiteSauce = false;
    var totalPrice = 10;
    $('.totalPrice').html('$' + totalPrice);
    $('.pep').hide();
    $('.mushroom').hide();
    $('.green-pepper').hide();
    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');
    $('.btn').removeClass('active');
    $('.price-li').hide();




  $('.btn-pepperonni').click(function () {
    if (!hasPepperoni) {
      $('.pep').show();
      hasPepperoni = true;
      $('.pep-li').show();
      $(this).addClass('active');
      totalPrice += 1;
    }
    else {
      $('.pep').hide();
      hasPepperoni = false;
      $('.pep-li').hide();
      $(this).removeClass('active');
      totalPrice -= 1;
    }
  });

  $('.btn-mushrooms').click(function () {
    if (hasMushrooms === false) {
      $('.mushroom').show();
      $('.mushroom-li').show();
      hasMushrooms = true;
      $(this).addClass('active');
      totalPrice += 1;
    }
    else {
      $('.mushroom').hide();
      $('.mushroom-li').hide();
      hasMushrooms = false;
      $(this).removeClass('active');
      totalPrice -= 1;
    }
  });




  $('.btn-green-peppers').click(function () {
    if (hasGreenPepper === false) {
      $('.green-pepper').show();
      $('.green-pepper-li').show();
      hasGreenPepper = true;
      $(this).addClass('active');
      totalPrice += 1;
    }
    else {
      $('.green-pepper').hide();
      $('.green-pepper-li').hide();
      hasGreenPepper = false;
      $(this).removeClass('active');
      totalPrice -= 1;
    }
  });

// ---------------GLUTEN FREEE-------------

  $('.btn-crust').click(function () {
    if (isGlutenFree) {
      $('.crust').removeClass('crust-gluten-free');
      isGlutenFree = false;
      $('.gluten-free-li').hide();
      $(this).removeClass('active');
      totalPrice -= 5;
    }
    else {
      $('.crust').addClass('crust-gluten-free');
      $('.gluten-free-li').show();
      isGlutenFree = true;
      $(this).addClass('active');
      totalPrice += 5;
    }
  });

//---------- SAUCE -----------------------

  $('.btn-sauce').click(function () {
    if (isWhiteSauce) {
      $('.sauce').removeClass('sauce-white');
      $('.white-sauce-li').hide();
      isWhiteSauce = false;
      totalPrice -= 3;
      $(this).removeClass('active');
    }
    else {
      $('.sauce').addClass('sauce-white');
      $('.white-sauce-li').show();
      isWhiteSauce = true;
      totalPrice += 3;
      $(this).addClass('active');
    }
  });

$('.btn').click(function() {
  $('.totalPrice').html('$' + totalPrice);
});



});
