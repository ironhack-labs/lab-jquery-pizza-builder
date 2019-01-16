// Write your Pizza Builder JavaScript in this file.

////////////////// Buttons behaviour

// red pepperonnis on/off
$(".panel .btn-pepperonni").click(function () {
	$(".pep").toggle();
	$(".btn-pepperonni").toggleClass("active");

});


// mushrooms on/off
$(".panel .btn-mushrooms").click(function () {
	$(".mushroom").toggle();
	$(".btn-mushrooms").toggleClass("active");

});

// peppers on/off
$(".panel .btn-green-peppers").click(function () {
	$(".green-pepper").toggle();
	$(".btn-green-peppers").toggleClass("active");
});


// allowing user to change to white sauce on click
$(".panel .btn-sauce").click(function () {
	$(".sauce").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active");

});

// same for crust, switch on button click
$(".panel .btn-crust").click(function () {
	$(".crust").toggleClass("crust-gluten-free");
	$(".btn-crust").toggleClass("active");

});


////////////////// Default Pizza Settings 

// setting regular crust and sauce by default (gluten free and white sauce are degeulasse..)
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");

// setting the state of crust sauce buttons to off (because there is gluten free or white sauce by default) 
$(".btn-crust").toggleClass("active");
$(".btn-sauce").toggleClass("active");

// removing red pepperonis by default (because of vegans)
$(".pep").toggle();
$(".btn-pepperonni").toggleClass("active");


////////////////// Pizza Price Calculations
// remove prix des peperronis
// remove la white
// remove gluten free crust