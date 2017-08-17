// Write your Pizza Builder JavaScript in this file.

var price = 10;


function priceTotal () {
  $('strong').html(price);
}

//removes initial button press at load
$(document).ready(function () {
  $('.btn').removeClass("active");
});

//toppings toggle
$(document).ready(function () {
  price += 1;
  $('.btn-pepperonni').click(function () {
    $('.pep').toggle();
      $('.pep-price').toggle();
        priceTotal();
    });
  });
  $('.btn-mushrooms').click(function () {
    price += 1;
    $('.mushroom').toggle();
      $('.mush-price').toggle();
      priceTotal();
  });
    $('.btn-green-peppers').click(function () {
      price += 1;
      $('.green-pepper').toggle();
        $('.green-price').toggle();
        priceTotal();
});// END toppings toggle

//sauce and crust toggle
$(document).ready(function () {
  price += 3;
  $('.btn-sauce').click(function () {
    $('.sauce').toggleClass('sauce-white');
      $('.white-price').toggle();
      priceTotal();

  });
  $(document).ready(function () {
    price += 5;
    $('.btn-crust').click(function () {
      $('.crust').toggleClass('crust-gluten-free');
        $('.gluten-price').toggle();
        priceTotal();
    });
  });
});//END sauce and crust toggle

$(document).ready(function () {
  $('.btn').click(function (){
    $(this).toggleClass('active');
  });
});
