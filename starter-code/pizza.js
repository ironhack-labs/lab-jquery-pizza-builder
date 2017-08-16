// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {



    $('.btn-pepperonni').click(function() {
        console.log($('.pepPrice').val());
        $('.pep').toggle();
        $('.pepPrice').toggle();

    });

});

$(document).ready(function() {

    $('.btn-mushrooms').click(function() {

        $('.mushroom').toggle();
        $('.mushPrice').toggle();
    });

});


$(document).ready(function() {

    $('.btn-green-peppers').click(function() {
        $('.green-pepper').toggle();
        $('.greenPrice').toggle();
    });
});

$(document).ready(function() {

  $('.btn-sauce').click(function() {
      $('.sauce').toggleClass('sauce-white');
      $('.whitePrice').html('$3 white sauce');
  });

});


$(document).ready(function() {

  $('.btn-crust').click(function() {

      $('.crust').toggleClass('crust-gluten-free');

  });

});

$(document).ready(function() {

  $('.btn').click(function() {
    $(this).toggleClass('active');
  });

});

$(document).ready(function() {

});
