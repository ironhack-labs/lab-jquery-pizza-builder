// Write your Pizza Builder JavaScript in this file.

var btnPep = $(".btn-pepperonni");
var btnMush = $(".btn-mushrooms");
var btnGrePep = $(".btn-green-peppers");
var btnSauc = $(".btn-sauce");
var btnCru = $(".btn-crust");

var totalPrice = $(".total-price");

var supplements = 0;

btnPep.click(function () {

	if ($(".pep").hasClass("hidden") === false) {
		$(".pep").addClass("hidden");
	}

	else if ($(".pep").hasClass("hidden")) {
		$(".pep").removeClass("hidden");
	};

	activeState();
});

btnMush.click(function () {

	if ($(".mushroom").hasClass("hidden") === false) {
		$(".mushroom").addClass("hidden");
	}

	else if ($(".mushroom").hasClass("hidden")) {
		$(".mushroom").removeClass("hidden");
	};

	activeState();
});

btnGrePep.click(function () {

	if ($(".green-pepper").hasClass("hidden") === false) {
		$(".green-pepper").addClass("hidden");
	}

	else if ($(".green-pepper").hasClass("hidden")) {
		$(".green-pepper").removeClass("hidden");
	};

	activeState();
});

btnSauc.click(function () {

	if ($(".sauce").hasClass("sauce-white") === false) {
		$(".sauce").addClass("sauce-white");
	}

	else if ($(".sauce").hasClass("sauce-white")) {
		$(".sauce").removeClass("sauce-white");
	};

	activeState();
});

btnCru.click(function () {

	if ($(".crust").hasClass("crust-gluten-free") === false) {
		$(".crust").addClass("crust-gluten-free");
	}

	else if ($(".crust").hasClass("crust-gluten-free")) {
		$(".crust").removeClass("crust-gluten-free");
	};

	activeState();
});

// active state

function activeState () {
	//pepperonni
	if ($(".pep").hasClass("hidden")) {
		btnPep.removeClass("active");
		$(".pep-price").addClass("hidden");

	}

	else if ($(".pep").hasClass("hidden") === false) {
		btnPep.addClass("active");
		$(".pep-price").removeClass("hidden");
		supplements += 1;
	};

	//mushrooms
	if ($(".mushroom").hasClass("hidden")) {
		btnMush.removeClass("active");
		$(".mush-price").addClass("hidden");
	}

	else if ($(".mushroom").hasClass("hidden") === false) {
		btnMush.addClass("active");
		$(".mush-price").removeClass("hidden");
		supplements += 1;
	};

	//green peppers
	if ($(".green-pepper").hasClass("hidden")) {
		btnGrePep.removeClass("active");
		$(".gre-pep-price").addClass("hidden");
	}

	else if ($(".green-pepper").hasClass("hidden") === false) {
		btnGrePep.addClass("active");
		$(".gre-pep-price").removeClass("hidden");
		supplements += 1;
	};

	//white sauce
	if ($(".sauce").hasClass("sauce-white")) {
		btnSauc.addClass("active");
		$(".white-sauce-price").removeClass("hidden");
		supplements += 3;
	}

	else if ($(".sauce").hasClass("sauce-white") === false) {
		btnSauc.removeClass("active");
		$(".white-sauce-price").addClass("hidden");
		
	};

	//gluten free crust
	if ($(".crust").hasClass("crust-gluten-free")) {
		btnCru.addClass("active");
		$(".gluten-price").removeClass("hidden");
		supplements += 5;

	}

	else if ($(".crust").hasClass("crust-gluten-free") === false) {
		btnCru.removeClass("active");
		$(".gluten-price").addClass("hidden");
		
	};

	totalPrice.html(10 + supplements);

	supplements = 0;
};




















window.onload =function() {
	
	$(".sauce").removeClass("sauce-white");
	$(".crust").removeClass("crust-gluten-free");

	activeState();
};