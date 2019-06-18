// Write your Pizza Builder JavaScript in this file.

$('.panel.price>ul>li:contains(gluten-free)').toggle();
$('.panel.price>ul>li:contains(white sauce)').toggle();

$('.btn.btn-sauce').toggleClass('active');
$('.btn.btn-crust').toggleClass('active');
$('.sauce').toggleClass('sauce-white');
$('.crust').toggleClass('crust-gluten-free');
priceUpdate();

$('.btn.btn-pepperonni')
	.eq(0)
	.click(function() {
		$(this).toggleClass('active');
		$('.pep').toggle();
		$('.panel.price>ul>li:contains(pepperonni)').toggle();
		priceUpdate();
	});

$('.btn.btn-mushrooms')
	.eq(0)
	.click(function() {
		$(this).toggleClass('active');
		$('.mushroom').toggle();
		$('.panel.price>ul>li:contains(mushrooms)').toggle();
		priceUpdate();
	});

$('.btn.btn-green-peppers')
	.eq(0)
	.click(function() {
		$(this).toggleClass('active');
		$('.green-pepper').toggle();
		$('.panel.price>ul>li:contains(green peppers)').toggle();
		priceUpdate();
	});

$('.btn.btn-sauce')
	.eq(0)
	.click(function() {
		$(this).toggleClass('active');
		$('.sauce').toggleClass('sauce-white');
		$('.panel.price>ul>li:contains(white sauce)').toggle();
		priceUpdate();
	});

$('.btn.btn-crust')
	.eq(0)
	.click(function() {
		$(this).toggleClass('active');
		$('.crust').toggleClass('crust-gluten-free');
		$('.panel.price>ul>li:contains(gluten-free)').toggle();
		priceUpdate();
	});

function priceUpdate() {
	let ingredients = $('.panel.price>ul>li:visible');
	let price = 10;
	for (let i = 0; i < ingredients.length; i++) {
		price += Number(
			ingredients
				.eq(i)
				.html()
				.split(' ')[0]
				.split('$')[1],
		);
	}
	$('.panel.price>strong')
		.eq(0)
		.text('$' + price);
}
