// Write your Pizza Builder JavaScript in this file.
var totalPrice = 13;

function toggleTopping(event) {
  event.data.topping.toggle();
  $(this).toggleClass('active');
  event.data.toppingPrice.toggle();
  if ($(this).hasClass('active')) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  $('strong').html('$' + totalPrice);
}

function toggleCrustSauce(event) {
  event.data.topping.toggleClass(event.data.className);
  $(this).toggleClass('active');
  event.data.toppingPrice.toggle();
  if ($(this).hasClass('active')) {
    switch (event.data.className) {
      case 'sauce-white':
        totalPrice += 3;
        break;
      default:
        totalPrice += 5;
    }
  } else {
    switch (event.data.className) {
      case 'sauce-white':
        totalPrice -= 3;
        break;
      default:
        totalPrice -= 5;
    }
  }
  $('strong').html('$' + totalPrice);
}

$(document).ready(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.sauce').toggleClass('sauce-white');
  $('body > aside > ul > li:nth-child(4)').toggle();
  $('body > aside > ul > li:nth-child(5)').toggle();
  $('.btn-pepperonni').click({
    topping: $('.pep'),
    toppingPrice: $('body > aside > ul > li:nth-child(1)')
  }, toggleTopping);
  $('.btn-green-peppers').click({
    topping: $('.green-pepper'),
    toppingPrice: $('body > aside > ul > li:nth-child(2)')
  }, toggleTopping);
  $('.btn-mushrooms').click({
    topping: $('.mushroom'),
    toppingPrice: $('body > aside > ul > li:nth-child(3)')
  }, toggleTopping);
  $('.btn-sauce').click({
    topping: $('.sauce'),
    className: 'sauce-white',
    toppingPrice: $('body > aside > ul > li:nth-child(4)')
  }, toggleCrustSauce);
  $('.btn-crust').click({
    topping: $('.crust'),
    className: 'crust-gluten-free',
    toppingPrice: $('body > aside > ul > li:nth-child(5)')
  }, toggleCrustSauce);
});
