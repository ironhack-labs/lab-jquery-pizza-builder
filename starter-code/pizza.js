// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    $('.btn-pepperonni').click(function () {
      $(this).toggleClass('active');
      $('.pep').toggle(600);
      $("li:contains('pepperonni')").toggle(500);
      calTotal();
    });

    $('.btn-mushrooms').click(function () {
      $(this).toggleClass('active');
      $('.mushroom').toggle(600);
      $("li:contains('mushroom')").toggle(500);
      calTotal();
    });

    $('.btn-green-peppers').click(function () {
      $('.green-pepper').toggle(600);
      $(this).toggleClass('active');
      $("li:contains('green')").toggle(500);
      calTotal();
    });

    // WHITE SAUCE ========================
    $('.btn-sauce').removeClass('active');
    $("li:contains('white')").hide();

    // GLUTEN FREE =========================
    $('.btn-crust').removeClass('active');
    $("li:contains('gluten')").hide();

    // WHITE SAUCE APPLY ========================
    $('.btn-sauce').click(function () {
      $(this).toggleClass('active');
      $('.sauce').toggleClass('sauce-white');
      $("li:contains('white')").toggle();
      calTotal();

    });
    // CRUST GLUTEN FREE APPLY ========================
    $('.btn-crust').click(function () {
      $(this).toggleClass('active');
      $('.crust').toggleClass('crust-gluten-free');
      $("li:contains('gluten')").toggle();
      calTotal();
    });


        // var totalPrice = $('#total').html(0);

      function calTotal() {

        var pizza = 10;

        if ($('.btn-pepperonni').hasClass('active')) {
            $('#total').html(pizza += 1);
        }

        if ($('.btn-mushrooms').hasClass('active')) {
            $('#total').html(pizza += 1);
        }

        if ($('.btn-green-peppers').hasClass('active')) {
            $('#total').html(pizza += 1);
        }

        if ($('.btn-sauce').hasClass('active')) {
            $('#total').html(pizza += 3);
        }

        if ($('.btn-crust').hasClass('active')) {
          $('#total').html(pizza += 5);
        }
      }



});
