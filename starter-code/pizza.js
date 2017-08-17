// Write your Pizza Builder JavaScript in this file.

//removes initial button press at load
$(document).ready(function () {
  $('.btn').removeClass("active");
});

//toppings toggle
$(document).ready(function () {
  $('.btn-pepperonni').click(function () {
    $('.pep').toggle();
      $('.pep-price').toggle();
    });
  });
  $('.btn-mushrooms').click(function () {
    $('.mushroom').toggle();
      $('.mush-price').toggle();
  });
    $('.btn-green-peppers').click(function () {
      $('.green-pepper').toggle();
        $('.green-price').toggle();
});// END toppings toggle

//sauce and crust toggle
$(document).ready(function () {
  $('.btn-sauce').click(function () {
    $('.sauce').toggleClass('sauce-white');
      $('.white-price').toggle();
  });
  $(document).ready(function () {
    $('.btn-crust').click(function () {
      $('.crust').toggleClass('crust-gluten-free');
        $('.gluten-price').toggle();
    });
  });
});//END sauce and crust toggle

$(document).ready(function () {
  $('.btn').click(function (){
    $(this).toggleClass('active');
  });
});
