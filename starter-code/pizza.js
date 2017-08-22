// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
	

	
	// Iteration One - Left Buttons
	$('.btn-pepperonni').on('click', function () {		
		$('.pep').toggle()
	})
	
	$('.btn-mushrooms').on('click', function () {
		$('.mushroom').toggle()
	})
	
	$('.btn-green-peppers').on('click', function () {
		$('.green-pepper').toggle()
	})
	// Iteration Two - Left Buttons
	$('.btn-sauce').on('click', function () {
		$('.sauce-white').toggle()
	})
	$("section.crust").attr("class","crust")
	$("section.sauce").attr("class","sauce")
	
	// Iteration Three
	// $(".btn-pepperonni").on(click,)

		
})