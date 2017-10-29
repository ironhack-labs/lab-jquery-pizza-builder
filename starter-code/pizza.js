$(document).ready(function() {
// Write your Pizza Builder JavaScript in this file.
var addToppingPep = 'on';
var addToppingMush = 'on';
var addToppingPeppers = 'on';

var addToppingSauce = 'on';
var addToppingCrust = 'on';

// Calc Price
var total;

var defaultCheesePizzaPrice = 10;
var pepPrice = 0;
var mushPrice = 0;
var greenPepPrice = 0;
var WhiteSaucePrice = 0;
var crustGlutFreePrice = 0;


// Hide Pepperonni, Mushroom, and Green-Pepper Toppings
// On Pizza
// on Load Apply:
$( ".pep" ).hide(1800);
$( ".mushroom" ).hide(1700);
$( ".green-pepper" ).hide(1600);

$( ".sauce-white" ).hide(1600);
	$( ".sauce" ).show(1600);
		$( ".sauce" ).toggleClass("sauce-white");

$( ".crust" ).show(1600);
	$( ".crust" ).toggleClass("crust-gluten-free");


// Hide Pepperonni, Mushrooms, and Green-Peppers Toppings
// In Price List
// on Load Apply:

$( ".price ul li:contains('pepperonni')" ).hide(1800); // Hide Pepperonni in Price List
$( ".price ul li:contains('mushrooms')" ).hide(1700); // Hide Mushrooms in Price List
$( ".price ul li:contains('green peppers')" ).hide(1600); // Hide Green-Peppers in Price List
$( ".price ul li:contains('white sauce')" ).hide(1600); // Hide Green-Peppers in Price List
$( ".price ul li:contains('gluten')" ).hide(1600); // Hide Gluten Free Crust in Price List




function calcPrice() {

	// var pepPrice = 1;
	// var mushPrice = 1;
	// var greenPepPrice = 1;
	// var saucePrice = 3;
	// var crustGlutFreePrice = 5;

	 total = (defaultCheesePizzaPrice) + (pepPrice) + (mushPrice) + (greenPepPrice) + (WhiteSaucePrice) + (crustGlutFreePrice);
	
	$( ".price strong").text('$' + total);

	console.log( 'CalcTotal INSIDE function ' + total);
	return '$ ' + total;
}







// Event Handler - button 1
$('.btn-pepperonni').click( function () {

	$( ".btn-pepperonni" ).toggleClass("add");
	$( ".price ul li:contains('pepperonni')" ).show(); // Show Pepperonni in Price List

	

	if ( addToppingPep === 'off') {
		pepPrice = 0; // Update Price
			$( ".pep" ).hide();
				addToppingPep = 'on';

		$( ".price ul li:contains('pepperonni')" ).hide(); // Hide Pepperonni in Price List
	} 
	else if (addToppingPep === 'on') {
		pepPrice = 1; // Update Price
			$( ".pep" ).show();
				addToppingPep = 'off';
	}

		console.log( 'Inside Pepprice - click BEFORE Calc Price total ' + total);
	calcPrice();
		console.log( 'Inside Pepprice - click AFTER Calc Price total ' + total);

}); // button END



// Event Handler - button 2
$('.btn-mushrooms').click( function () {
 
	$( ".btn-mushrooms" ).toggleClass("add");
	$( ".price ul li:contains('mushrooms')" ).show(); // Show Mushroom in Price List

	


	if (addToppingMush === 'off' ) {
		mushPrice = 0; // Update Price
			$( ".mushroom" ).hide();
				addToppingMush = 'on';

		$( ".price ul li:contains('mushrooms')" ).hide(); // Hide Mushroom in Price List
	} 
	else if (addToppingMush === 'on') {
		mushPrice = 1; // Update Price
			$( ".mushroom" ).show();
				addToppingMush = 'off';
	}


		console.log( 'Inside Mushroom - click BEFORE Calc Price total ' + total);
	calcPrice();
		console.log( 'Inside Mushroom - click AFTER Calc Price total ' + total);

}); // button END





// Event Handler - button 3
$('.btn-green-peppers').click( function () {
	
	$( ".btn-green-peppers" ).toggleClass("add");
	$( ".price ul li:contains('green peppers')" ).show(); // Show Green-Peppers in Price List


	if (addToppingPeppers === 'off' ) {
		greenPepPrice = 0; // Update Price
			$( ".green-pepper" ).hide();
				addToppingPeppers = 'on';

		$( ".price ul li:contains('green peppers')" ).hide(); // Hide Green-Peppers in Price List
	} 
	else if (addToppingPeppers === 'on') {
		greenPepPrice = 1; // Update Price
			$( ".green-pepper" ).show();
				addToppingPeppers = 'off';	
	}

		console.log( 'Inside Green-Peppers - click BEFORE Calc Price total ' + total);
	calcPrice();
		console.log( 'Inside Green-Peppers - click AFTER Calc Price total ' + total);

}); // button END





// Event Handler - button 4
$('.btn-sauce').click( function () {

	$( ".btn-sauce" ).toggleClass("add");
	$( ".price ul li:contains('white')" ).show(); // Show White Sauce in Price List


	if (addToppingSauce === 'off' ) {
		WhiteSaucePrice = 0; // Update Price
			$( ".sauce" ).toggleClass("sauce-white");
				addToppingSauce = 'on';
				$( ".price ul li:contains('white')" ).hide(); // Hide White Sauce in Price List

	} 
	else if (addToppingSauce === 'on') {
		WhiteSaucePrice = 3; // Update Price
			$( ".sauce" ).toggleClass("sauce-white");
				addToppingSauce = 'off';
	}

		console.log( 'Inside Sauce - click BEFORE Calc Price total ' + total);
	calcPrice();
		console.log( 'Inside Sauce - click AFTER Calc Price total ' + total);

}); // button END




// Event Handler - button 5
$('.btn-crust').click( function () {

	$( ".btn-crust" ).toggleClass("add");
	$( "li:contains('$5')" ).show(); // Show Gluten Free Crust in Price List
	

	if (addToppingCrust === 'off' ) {
		crustGlutFreePrice = 0; // Update Price
			$( ".crust" ).toggleClass("crust-gluten-free");
				addToppingCrust = 'on';
				$( "li:contains('$5')" ).hide(); // Hide Gluten Free Crust in Price List
		
	} 
	else if (addToppingCrust === 'on') {
		crustGlutFreePrice = 5; // Update Price
			$( ".crust" ).toggleClass("crust-gluten-free");
			addToppingCrust = 'off';
	} 

		console.log( 'Inside Crust - click BEFORE Calc Price total ' + total);
	calcPrice();
		console.log( 'Inside Crust - click AFTER Calc Price total ' + total);

});// button END







}); // END BODY WRAP ( Document.Ready Function)