// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

	// Default Pizza
	  $('.btn').toggleClass('active'); // Makes all buttons inactive by default.
	  $('.mushroom').hide();
	  $('.green-pepper').hide();
	  $('.pep').hide();
	  $('.sauce').toggleClass("sauce-white");
	  $('.crust').toggleClass("crust-gluten-free");
	  $("strong").text("$10");
	
	  $("aside > ul > li:contains(white sauce)").hide();
	  $("aside > ul > li:contains(crust)").hide();
	  
	  // Allows for button to toggle pepperoni.
	  $('.btn-pepperonni').click(function() {
		$('.pep').toggle();
		$('.btn-pepperonni').toggleClass('active');
		if($(".btn-pepperonni").hasClass("active")) {
		  totalPrice += 1
		}
		else {
		  totalPrice -= 1
		}
		$("strong").html("$" + totalPrice);
	  }) 
	
	  // Allows for button to toggle mushrooms.
	  $('.btn-mushrooms').click(function() {
		$('.mushroom').toggle();
		$('.btn-mushrooms').toggleClass('active');
		if($(".btn-mushrooms").hasClass("active")) {
		  totalPrice += 1;
		}
		else {
		  totalPrice -= 1;
		}
		$("strong").html("$" + totalPrice);
	  }) 
	
	  // Allows for button to toggle green-peppers.
	  $('.btn-green-peppers').click(function() {
		$('.green-pepper').toggle();
		$('.btn-green-peppers').toggleClass('active');
		if($(".btn-green-peppers").hasClass("active")) {
		  totalPrice += 1;
		}
		else {
		  totalPrice -= 1;
		}
		$("strong").html("$" + totalPrice);
	  }) 
	
	  // Allows for button to toggle sauce.
	  $('.btn-sauce').click(function() {
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');
		$("aside > ul > li:contains(white sauce)").toggle();
		if($(".btn-sauce").hasClass("active")) {
		  totalPrice += 3;
		}
		else {
		  totalPrice -= 3;
		}
		$("strong").html("$" + totalPrice);
	  }) 
	
	  // Allows for button to toggle crust.
	  $('.btn-crust').click(function() {
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');
		$("aside > ul > li:contains(crust)").toggle();
		if($(".btn-crust").hasClass("active")) {
		  totalPrice += 5;
		}
		else {
		  totalPrice -= 5;
		}
		$("strong").html("$" + totalPrice);
	  }) 
	  var totalPrice = 10;
	});