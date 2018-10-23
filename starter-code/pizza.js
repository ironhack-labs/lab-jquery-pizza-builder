// Write your Pizza Builder JavaScript in this file.
$('.sauce-price').toggle();
$('.crust-price').toggle();

const totalPrice = function () {
  const ingredientsPrice = $('.price>ul>li:visible');
  let total = 10;
  for (let i = 0; i < ingredientsPrice.length; i += 1) {
    const cafe = ingredientsPrice[i].textContent;
    total += parseInt(cafe[1]);
    console.log(cafe);
  }
  $('.price>strong').empty().append(`$ ${total}`);
};

totalPrice();

// append and remove
$('.btn-pepperonni').on('click', function () {
  $('.pep').fadeToggle(2000);
  $('aside > ul :nth-child(1)').toggle('li');
  totalPrice();
});

$('.btn-mushrooms').on('click', function () {
  $('.mushroom').fadeToggle(2000);
  $('aside > ul :nth-child(2)').toggle('li');
  totalPrice();
});

$('.btn-green-peppers').on('click', function () {
  $('.green-pepper').fadeToggle(2000);
  $('aside > ul :nth-child(3)').toggle('li');
  totalPrice();
});

// 2

$('.crust').removeClass('crust-gluten-free');

$('.btn-crust').removeClass('active');

$('.sauce').removeClass('sauce-white');
$('.btn-sauce').removeClass('active');


$('.btn-crust').on('click', function () {
  $('.btn-crust').toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('aside > ul :nth-child(5)').toggle('li');
  totalPrice();
});

$('.btn-sauce').on('click', function () {
  $('.btn-sauce').toggleClass('active');
  $('.sauce').toggle('sauce-white');
  $('aside > ul :nth-child(4)').toggle('li');
  totalPrice();
});
