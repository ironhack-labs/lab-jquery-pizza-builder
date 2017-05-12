// Write your Pizza Builder JavaScript in this file.

// Iteration 1: Add and remove toppings

$(".btn-pepperonni").click(function() {
	$(".pep").toggle();

  // This belongs to iteration 2
	$(".btn-pepperonni").toggleClass("active");

  // This belongs to iteration 3
	$("li:contains('pepperonni')").toggle();
});


$(".btn-green-peppers").click(function() {
	$(".green-pepper").toggle();

  // This belongs to Iteration 2

	$(".btn-green-peppers").toggleClass("active");

  // This belongs to Iteration 3
	$("li:contains('mushrooms')").toggle();
});


$(".btn-mushrooms").click(function() {
	$(".mushroom").toggle();

  // This belongs to Iteration 2
	$(".btn-mushrooms").toggleClass("active");

  // This belongs to Iteration 3
	$("li:contains('green peppers')").toggle();
});

// Iteration 2: Sauce and crust options
$(".btn-sauce").click(function() {
	$(".sauce").toggleClass("sauce-white");

  // This belongs to Iteration 2
	$(".btn-sauce").toggleClass("active");

  // This belongs to Iteration 3
	$("li:contains('white sauce')").toggle();
});


$(".btn-crust").click(function() {
	$(".crust").toggleClass("crust-gluten-free");

  // This belongs to Iteration 2
	$(".btn-crust").toggleClass("active");

  // This belongs to Iteration 3
	$("li:contains('gluten-free crust')").toggle();
});


// All the initial changes are managed via document.ready. It would be easier or more convenient
// to change them in the HTML but the document.ready has been used instead in order to try jQuery
// Finally the only file that has been modified is pizza.js

$(document).ready(function() {
	$(".sauce").removeClass("sauce-white");
	$(".crust").removeClass("crust-gluten-free");

  // This belongs to iteration 3
	$(".btn-sauce").removeClass("active");
	$(".btn-crust").removeClass("active");

  // This belongs to iteration 4
	$("li:contains('white sauce')").hide();
	$("li:contains('gluten-free crust')").hide();

  // This belongs to iteration 5
	updateTotal();
});


// Iteration 3: Change the buttons' state: included in Iterations 1 and 2


// Iteration 4: Ingredients and prices: included in Iterations 1 and 2


// Iteration 5: Update price

// This function will be called when the document is ready and everytime a button is clicked
function updateTotal() {
	var total = 10;
	$(".panel.price li:visible").each(function(index, element) {
		console.log(parseInt($(element).html()[1]));
		total += parseInt($(element).html()[1]);
	});
	$(".panel.price strong").html(total);
}

$(".btn").click(function() {
	updateTotal();
});
