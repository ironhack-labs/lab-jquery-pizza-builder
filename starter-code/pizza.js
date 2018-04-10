// Write your Pizza Builder JavaScript in this file.
var pepper = $('.green-pepper');
var mush = $('.mushroom');
var pepp = $('.pep');
var btnPepper = $('.btn-green-peppers');
var btnMush = $('.btn-mushrooms');
var btnPepp = $('.btn-pepperonni')
var btnSauce = $('.btn-sauce');
var btnCrust = $('.btn-crust');
var toggleGreen = true;
var toggleRed = true;
var toggleBrown = true;
var toggleSW = true;
var toggleCR = true;
var sauceWhite = $('.sauce-white');
var crust = $('.crust')
var pricepepper = $('.price ul li:nth-child(3)')
var pricepep = $('.price ul li:first-child')
var pricemush = $('.price ul li:nth-child(2)')
var pricesauce = $('.price ul li:nth-child(4)')
var pricecrust = $('.price ul li:last-child')
var finalprice = $('.price strong');

btnSauce.removeClass('active');
btnCrust.removeClass('active');
crust.removeClass('crust-gluten-free');
sauceWhite.removeClass('sauce-white');
pricecrust.hide();
pricesauce.hide();
finalprice.text('$13');


btnPepper.on('click', function(){
  pepper.toggle();
  btnPepper.toggleClass('active');
  pricepepper.toggle();
});

btnPepp.on('click', function(){
  pepp.toggle();
  btnPepp.toggleClass('active');
  pricepep.toggle();
});

btnMush.on('click', function(){
  mush.toggle();
  btnMush.toggleClass('active');
  pricemush.toggle();
});

btnSauce.on('click', function(){
  sauceWhite.toggleClass('sauce-white');
  btnSauce.toggleClass('active');
  pricesauce.toggle();
  finalprice.text('$16');
})

btnCrust.on('click', function(){
  crust.toggleClass('crust-gluten-free');
  btnCrust.toggleClass('active');
  pricecrust.toggle();
  finalprice.text('$19');
})


