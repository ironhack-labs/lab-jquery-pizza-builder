// Write your Pizza Builder JavaScript in this file.

let prices = {
  pepperonni: 1,
  mushrooms: 1,
  peppers: 1,
  sauce: 3,
  crust: 5
};

let price = 21;

const totalPrice = $("#total-price");

$('.btn').click(function(){
  $(this).toggleClass('active');
})

$('.btn-pepperonni').click(function(){
  const pep = $('.pep').toggle();
  $('#panel-pepperonni').toggle(this);

if (pep.is(":hidden")) {
    price -= prices.pepperonni;
    totalPrice.text(`$${price}`);
} else {
    price += prices.pepperonni;
    totalPrice.text(`$${price}`);
  };
})

$('.btn-mushrooms').click(function(){
  const mush = $('.mushroom').toggle();
  $('#panel-mushroom').toggle(this);
  if (mush.is(":hidden")) {
    price -= prices.mushrooms;
    totalPrice.text(`$${price}`);
} else {
    price += prices.mushrooms;
    totalPrice.text(`$${price}`);
  };
})


$('.btn-green-peppers').click(function(){
  const pepper = $('.green-pepper').toggle();
  $('#panel-pepper').toggle(this);
  if (pepper.is(":hidden")) {
    price -= prices.peppers;
    totalPrice.text(`$${price}`);
} else {
    price += prices.peppers;
    totalPrice.text(`$${price}`);
  };
})


$('.btn-sauce').click(function(){
  const sauce = $('.sauce').toggleClass('sauce-white');
  $('#panel-sauce').toggle(this);
  if (!sauce.hasClass('sauce-white')) {
    price -= prices.sauce;
    totalPrice.text(`$${price}`);
} else {
    price += prices.sauce;
    totalPrice.text(`$${price}`);
  };
})

$('.btn-crust').click(function(){
  const crust = $('.crust').toggleClass('crust-gluten-free');
  $('#panel-crust').toggle(this);
  if (!crust.hasClass('crust-gluten-free')) {
    price -= prices.crust;
    totalPrice.text(`$${price}`);
} else {
    price += prices.crust;
    totalPrice.text(`$${price}`);
  };
})
