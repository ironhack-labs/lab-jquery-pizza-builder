// Write your Pizza Builder JavaScript in this file.

// append and remove
$('.btn-pepperonni').on('click', function () {
  $('.pep').fadeToggle(2000);
  $('aside > ul :nth-child(1)').toggle('li');
});

$('.btn-mushrooms').on('click', function () {
  $('.mushroom').fadeToggle(2000);
  $('aside > ul :nth-child(2)').toggle('li');
});

$('.btn-green-peppers').on('click', function () {
  $('.green-pepper').fadeToggle(2000);
  $('aside > ul :nth-child(3)').toggle('li');
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
});

$('.btn-sauce').on('click', function () {
  $('.btn-sauce').toggleClass('active');
  $('.sauce').toggle('sauce-white');
  $('aside > ul :nth-child(4)').toggle('li');
});

$('.panel.price > ul :nth-Child(4)').hide().toggleClass('off');
$('.panel.price > ul :nth-Child(5)').hide().toggleClass('off');
$('.panel.price > strong').text('$13');
function updatePrice() {
  let totalPrice = 10;
  const l = $('.panel.price > ul > li');
  const n = $('.panel.price > ul > li').size();
  for (let i = 0; i < n; i++) {
    if (!$(l).eq(i).hasClass('off')) {
      console.log(i, n, ($(l).eq(i).text().split('')[1]));
      totalPrice += parseInt($(l).eq(i).text().split('')[1]);
    }
  }
  $('.panel.price > strong').text('${$totalPrice}');
}
