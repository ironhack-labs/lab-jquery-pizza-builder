// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

// BUTTON VARS

var btnPepperoni = $('.btn-pepperonni');

var btnMushrooms = $('.btn-mushrooms');

var btnGreenPeppers = $('.btn-green-peppers');

var btnSauce = $('.btn-sauce');

var btnCrust = $('.btn-crust');

var btnWhite = $('.btn-sauce');

var totalPriceDiv = $('strong');

var actualTotalPrice = totalPriceDiv.html();

var priceList = $('.price li');
// var ingredientsAsNumbers = priceList.html();

// START WITH GLUTEN TOGGLED OFF

btnCrust.removeClass('active');
priceList.eq(4).toggle();
$(".crust").toggleClass("crust-gluten-free");

totalPriceDiv.html(16);

// CLICK FUNCTIONS FOR EACH BUTTON


var getPrice = function getTotalPrice() {
	
	//console.log("Fired");
	
	var total = 10;
	
	if(btnPepperoni.hasClass("active"))
		total += 1;
	if(btnMushrooms.hasClass("active"))
		total += 1;
	if(btnGreenPeppers.hasClass("active"))
		total += 1;
	if(btnWhite.hasClass("active"))
		total += 3;
	if(btnCrust.hasClass("active"))
		total += 5;

	console.log(total);
	totalPriceDiv.html(total);
}


btnPepperoni.click(function() {
	
        $('.pep').toggle();
        btnPepperoni.toggleClass('active');
        priceList.eq(0).toggle();
		getPrice();
});

btnMushrooms.click(function(event) {
    $('.mushroom').toggle();
    btnMushrooms.toggleClass('active');
    priceList.eq(1).toggle();
	getPrice();
});

btnGreenPeppers.click(function(event) {
    $('.green-pepper').toggle();
    btnGreenPeppers.toggleClass('active');
    priceList.eq(2).toggle();
	getPrice();
});

btnWhite.click(function(event) {
    $('.sauce-white').toggle();
    btnWhite.toggleClass('active');
    priceList.eq(3).toggle();
	getPrice();
});

btnCrust.click(function(event) {
	$(".crust").toggleClass("crust-gluten-free");
    btnCrust.toggleClass('active');
    priceList.eq(4).toggle();
	getPrice();
});

console.log(actualTotalPrice);


});