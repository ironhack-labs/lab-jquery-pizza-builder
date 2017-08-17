// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $('.whitePrice').hide();
  $('.gluPrice').hide();

  var priceTotal = 13;

$(document).ready(function() {

    var status = 1;

    $('.btn-pepperonni').click(function() {
        console.log($('.pepPrice').val());
        $('.pep').toggle();
        $('.pepPrice').toggle();

        if(status === 1) {
          priceTotal--;
          status = 0;
        } else {
          priceTotal++;
          status = 1;
        }

        displayPrice(priceTotal);

    });

});

$(document).ready(function() {

    var status = 1;

    $('.btn-mushrooms').click(function() {

        $('.mushroom').toggle();
        $('.mushPrice').toggle();

        if(status === 1) {
          priceTotal--;
          status = 0;
        } else {
          priceTotal++;
          status = 1;
        }

        displayPrice(priceTotal);

    });

});


$(document).ready(function() {

    var status = 1;

    $('.btn-green-peppers').click(function() {
        $('.green-pepper').toggle();
        $('.greenPrice').toggle();

        if(status === 1) {
          priceTotal--;
          status = 0;
        } else {
          priceTotal++;
          status = 1;
        }

        displayPrice(priceTotal);

    });

});

$(document).ready(function() {

  var status = 0;

  $('.btn-sauce').click(function() {
      $('.sauce').toggleClass('sauce-white');
      $('.whitePrice').toggle();

      if(status === 1) {
        priceTotal -= 3;
        status = 0;
      } else {
        priceTotal += 3;
        status = 1;
      }

      displayPrice(priceTotal);

  });

});


$(document).ready(function() {

  var status = 0;

  $('.btn-crust').click(function() {

      $('.crust').toggleClass('crust-gluten-free');
      $('.gluPrice').toggle();

      if(status === 1) {
        priceTotal -= 5;
        status = 0;
      } else {
        priceTotal += 5;
        status = 1;
      }

      displayPrice(priceTotal);

  });

});

$(document).ready(function() {

  $('.btn').click(function() {
    $(this).toggleClass('active');
  });

});

$(document).ready(function() {

});

});


function displayPrice(price) {

  price = '$' + price;
  $('.totalPrice').html(price);

}
