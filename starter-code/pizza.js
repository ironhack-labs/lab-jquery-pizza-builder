// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

	var total = $(".price strong");
	var newTotal = 10;
	total.replaceWith("$" + newTotal);
	var cheap = 1;
	var specialSauce = 3;
	var specialCrust = 5;

	
	$(".btn-pepperonni").click(function(event) {
		$(".pep").fadeToggle();
		$(".btn-pepperonni").toggleClass("active");
		$(".price ul li:nth-child(1)").fadeToggle();
		if ("active") {
			newTotal += cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		} else {
			newTotal = newTotal - cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		}
	});

	$(".btn-mushrooms").click(function(event) {
		this.event = $(".active");
		$(".mushroom").fadeToggle();
		$(".btn-mushrooms").toggleClass("active");
		$(".price ul li:nth-child(2)").fadeToggle();
		if ("active") {
			newTotal += cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		} else {
			newTotal = newTotal - cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		}
	});

	$(".btn-green-peppers").click(function(event) {
		this.event = $(".active");
		$(".green-pepper").fadeToggle();
		$(".btn-green-peppers").toggleClass("active");
		$(".price ul li:nth-child(3)").fadeToggle();
		if ("active") {
			newTotal += cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		} else {
			newTotal = newTotal - cheap;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		}
	});

	$(".sauce").removeClass("sauce-white");
	$(".btn-sauce").removeClass("active");
	$(".price ul li:nth-child(4)").fadeToggle();

	$(".btn-sauce").click(function(event) {
		this.event = $(".active");
		$(".sauce").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active");
		$(".price ul li:nth-child(4)").fadeToggle();
		if ("active") {
			newTotal += specialSauce;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		} else {
			newTotal = newTotal - specialSauce;
			total.replaceWith("$" + newTotal);
			con
	});

	 $(".crust").removeClass("crust-gluten-free");
	 $(".btn-crust").removeClass("active");
	 $(".price ul li:nth-child(5)").fadeToggle();

	$(".btn-crust").click(function(event) {
		this.event = $(".active");
		$(".crust").toggleClass("crust-gluten-free");
		$(".btn-crust").toggleClass("active");
		$(".price ul li:nth-child(5)").fadeToggle();
		if ("active") {
			newTotal += specialCrust;
			total.replaceWith("$" + newTotal);
			console.log(newTotal);
		} else {
			newTotal = newTotal - specialCrust;
			total.replaceWith("$" + newTotal);
			con
	});

  });