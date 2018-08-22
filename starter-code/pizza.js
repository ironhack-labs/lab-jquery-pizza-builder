// Write your Pizza Builder JavaScript in this file.
//remove white sauce and gluten-free on default
$('.sauce').removeClass('sauce-white');
$('.crust').removeClass('crust-gluten-free');
$('.btn-pepperonni').removeClass('active'); 
$('.btn-mushrooms').removeClass('active'); 
$('.btn-green-peppers').removeClass('active'); 
$('.btn-sauce').removeClass('active'); 
$('.btn-crust').removeClass('active');  


//remove toppings on default
$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.price li').eq(0).hide();
$('.price li').eq(1).hide();
$('.price li').eq(2).hide();
$('.price li').eq(3).hide();
$('.price li').eq(4).hide();

totalPrice = 10;

$('strong').html("$" + totalPrice);

//toggle toppings/sauce/crust on button click
$(".btn-pepperonni").click(() => {
  $(".pep").toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.price li').eq(0).toggle();

if($('.btn-pepperonni').hasClass('active')) {
  totalPrice += 1
} else {
  totalPrice -= 1
}

$('strong').html("$" + totalPrice);
});

$('.btn-mushrooms').click(() => {
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.price li').eq(1).toggle();

if($('.btn-mushrooms').hasClass('active')) {
  totalPrice += 1
} else {
  totalPrice -= 1
}

$('strong').html("$" + totalPrice);
});

$('.btn-green-peppers').click(() => {
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price li').eq(2).toggle();

if($('.btn-green-peppers').hasClass('active')) {
  totalPrice += 1
} else {
  totalPrice -= 1
}

$('strong').html("$" + totalPrice);
});

$('.btn-sauce').click(() => {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price li').eq(3).toggle();

if($('.btn-sauce').hasClass('active')) {
  totalPrice += 3
} else {
  totalPrice -= 3
}

$('strong').html("$" + totalPrice);
});

$('.btn-crust').click(() => {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price li').eq(4).toggle();


if($('.btn-crust').hasClass('active')) {
  totalPrice += 5
} else {
  totalPrice -= 5
}

$('strong').html("$" + totalPrice);
});









