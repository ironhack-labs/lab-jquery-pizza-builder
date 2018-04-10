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
var i = 13;

btnSauce.removeClass('active');
btnCrust.removeClass('active');
crust.removeClass('crust-gluten-free');
sauceWhite.removeClass('sauce-white');
pricecrust.hide();
pricesauce.hide();
finalprice.text('$' + i);


btnPepper.on('click', function(){
  pepper.toggle();
  btnPepper.toggleClass('active');
  pricepepper.toggle();
  if (btnPepper.hasClass('active')){
    i ++;
  } else {
    i--;
  }
  finalprice.text('$' + i);
});

btnPepp.on('click', function(){
  pepp.toggle();
  btnPepp.toggleClass('active');
  pricepep.toggle();
  if (btnPepp.hasClass('active')){
    i ++;
  } else {
    i--;
  }
  finalprice.text('$' + i);
});

btnMush.on('click', function(){
  mush.toggle();
  btnMush.toggleClass('active');
  pricemush.toggle();
  if (btnMush.hasClass('active')){
    i ++;
  } else {
    i--;
  }
  finalprice.text('$' + i);
});

btnSauce.on('click', function(){
  sauceWhite.toggleClass('sauce-white');
  btnSauce.toggleClass('active');
  pricesauce.toggle();
  finalprice.text('$16');
  if (btnSauce.hasClass('active')){
    i = i +3;
  } else {
    i = i -3;
  }
  finalprice.text('$' + i);
})

btnCrust.on('click', function(){
  crust.toggleClass('crust-gluten-free');
  btnCrust.toggleClass('active');
  pricecrust.toggle();
  finalprice.text('$19');
  if (btnCrust.hasClass('active')){
    i = i +5;
  } else {
    i = i -5;
  }
  finalprice.text('$' + i);
})


