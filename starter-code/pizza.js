var totalPrice = $('.price strong').addClass('total-price');
$('.price strong').text('$10');
var stringToPrice = $('.price strong').text();

var priceNumber = stringToPrice.split('$');
totalAmount = parseInt(priceNumber[1]);

var pepperonniLi = $('.price ul > li:nth-child(1)').addClass('pep-price');
pepperonniLi.toggle();

$('.pep').toggle();
$('.btn-pepperonni').removeClass('active');
$('.btn.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  pepperonniLi.toggle();
  // var pepperonniAmount = parseInt(pepperonniLi.replace(/\D/g, ''));
  if ($('.btn-pepperonni').hasClass('active')) {
    totalAmount += 1;
  } else {
    totalAmount -= 1;
  }
  $('.price strong').text(totalAmount);
});

var mushroomLi = $('.price ul > li:nth-child(2)').addClass('mushroom-price');
mushroomLi.toggle();
$('.mushroom').toggle();
$('.btn-mushrooms').removeClass('active');
$('.btn.btn-mushrooms').click(function() {
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  mushroomLi.toggle();
  if ($('.btn-mushrooms').hasClass('active')) {
    totalAmount += 1;
  } else {
    totalAmount -= 1;
  }
  $('.price strong').text(totalAmount);
});

var greenPepperLi = $('.price ul > li:nth-child(3)').addClass(
  'greenpepper-price'
);
greenPepperLi.toggle();
$('.green-pepper').toggle();
$('.btn-green-peppers').removeClass('active');
$('.btn.btn-green-peppers').click(function() {
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  greenPepperLi.toggle();
  if ($('.btn-green-peppers').hasClass('active')) {
    totalAmount += 1;
  } else {
    totalAmount -= 1;
  }
  $('.price strong').text(totalAmount);
});

var sauceLi = $('.price ul > li:nth-child(4)').addClass('sauce-price');
sauceLi.toggle();
$('.sauce').toggle();
$('.btn-sauce').removeClass('active');
$('.btn.btn-sauce').click(function() {
  $('.sauce').toggle();
  $('.btn-sauce').toggleClass('active');
  sauceLi.toggle();
  if ($('.btn-sauce').hasClass('active')) {
    totalAmount += 3;
  } else {
    totalAmount -= 3;
  }
  $('.price strong').text(totalAmount);
});

var crustLi = $('.price ul > li:nth-child(5)').addClass('crust-price');
crustLi.toggle();
$('.crust').toggleClass('crust-gluten-free');
$('.btn-crust').removeClass('active');
$('.btn.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  crustLi.toggle();
  if ($('.btn-crust').hasClass('active')) {
    totalAmount += 5;
  } else {
    totalAmount -= 5;
  }
  $('.price strong').text(totalAmount);
});
