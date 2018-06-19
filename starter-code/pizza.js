// Write your Pizza Builder JavaScript in this file.


$(".btn-pepperonni").addClass("active");
$(".btn-mushrooms").addClass("active");
$(".btn-green-peppers").addClass("active");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");

$(".crust").removeClass("crust-gluten-free");
$(".crust").addClass("crust");

$(".sauce").removeClass("sauce-white");
$(".sauce").addClass("sauce");


$(".btn-pepperonni").click(function(){
	$(".pep").toggle();
	$(".btn-pepperonni").toggleClass("active");
	$(".price ul li:nth-child(1)").toggle()
	});

$(".btn-mushrooms").click(function(){
	$(".mushroom").toggle();
	$(".btn-mushrooms").toggleClass("active");
	$(".price ul li:nth-child(2)").toggle()
	});

$(".btn-green-peppers").click(function(){
	$(".green-pepper").toggle();
	$(".btn-green-peppers").toggleClass("active");
	$(".price ul li:nth-child(3)").toggle()
	});

$(".btn-crust").click(function(){
	$(".crust").toggleClass("crust-gluten-free");
	$(".btn-crust").toggleClass("active");
	$(".price ul li:nth-child(5)").toggle()
	});

$(".btn-sauce").click(function(){
	$(".sauce").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active");
	$(".price ul li:nth-child(4)").toggle()
	});
