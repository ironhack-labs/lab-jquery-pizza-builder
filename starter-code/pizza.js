$(document).ready(function() {
	$(".btn-pepperonni").on("click", function() {
		$(".pep").toggle();
		if ($(".btn-pepperonni").toggleClass("active")) {
			$(".pep-price").toggle();
		}
		total();
	});
	$(".btn-mushrooms").on("click", function() {
		$(".mushroom").toggle();
		if ($(".btn-mushrooms").toggleClass("active")) {
			$(".mushrooms-price").toggle();
		}
		total();
	});
	$(".btn-green-peppers").on("click", function() {
		$(".green-pepper").toggle();
		if ($(".btn-green-peppers").toggleClass("active")) {
			$(".green-pep-price").toggle();
		}
		total();
	});
	$(".btn-sauce").on("click", function() {
		$(".sauce").toggleClass("regular-sauce").toggleClass("sauce-white");
		if ($(".btn-sauce").toggleClass("active")) {
			$(".sauce-price").toggle();
		}
		total();
	});
	$(".btn-crust").on("click", function() {
		$(".crust").toggleClass("crust-gluten-free");
		if ($(".btn-crust").toggleClass("active")) {
			$(".gluten-free-price").toggle();
		}
		total();
	});

	function total() {
		var sum = 10;
		$(".price>ul>li:visible>span").each(function(index) {
			sum += Number($(this).text());
		});

		$(".price>strong").html("$" + sum);
	}
	total();
});
