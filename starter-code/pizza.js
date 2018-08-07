// Write your Pizza Builder JavaScript in this file.
var greenPepper = $('.green-pepper');
var mushrooms = $('.mushroom');
var pep = $('.pep');

var pizzaCrust = $('.crust');
var sauce = $('.sauce');

var liPep = $('body > aside > ul > li:nth-child(1)');
var liMush = $('body > aside > ul > li:nth-child(2)');
var liGreen = $('body > aside > ul > li:nth-child(3)');
var liCrust = $('body > aside > ul > li:nth-child(4)');
var liSauce = $('body > aside > ul > li:nth-child(5)');

var totalPrice = $('strong');
var priceNum = 10;

$(document).ready(function() {
	greenPepper.toggle();
	mushrooms.hide();
	pep.hide();
	pizzaCrust.removeClass('crust-gluten-free');
	sauce.removeClass('sauce-white');
	liPep.siblings().hide();
	liPep.hide();
	//totalPrice.text('0');
});

var btnPeperonni = $('.btn-pepperonni');
var btnMush = $('.btn-mushrooms');
var btnGreen = $('.btn-green-peppers');
var btnCrust = $('.btn-crust ');
var btnSauce = $('.btn-sauce');

//FUNCTION TO UPDATE THE PRICE
function changePrice(btn, price) {
	if (btn.hasClass('active')) {
		priceNum -= price;
	} else {
		priceNum += price;
	}
	totalPrice.text('$ ' + priceNum);
}

btnPeperonni.click(function() {
	pep.toggle();
	btnPeperonni.toggleClass('active');
	liPep.toggle();

	changePrice(btnPeperonni, 1);
});

btnMush.click(function() {
	mushrooms.toggle();
	btnMush.toggleClass('active');
	liMush.toggle();

	changePrice(btnMush, 1);
});

btnGreen.click(function() {
	greenPepper.toggle();
	btnGreen.toggleClass('active');
	liGreen.toggle();

	changePrice(btnGreen, 1);
});

btnCrust.click(function() {
	pizzaCrust.toggleClass('crust-gluten-free');
	btnCrust.toggleClass('active');
	liCrust.toggle();

	changePrice(btnCrust, 5);
});

btnSauce.click(function() {
	sauce.toggleClass('sauce-white');
	btnSauce.toggleClass('active');
	liSauce.toggle();

	changePrice(btnSauce, 3);
});
