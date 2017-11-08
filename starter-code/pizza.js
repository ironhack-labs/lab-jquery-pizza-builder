// Write your Pizza Builder JavaScript in this file.
$(".crust").toggleClass("crust-gluten-free");

$(".sauce").toggleClass("sauce-white");

$(".btn-sauce").toggleClass("active");

$(".btn-crust").toggleClass("active");

$(".price li:nth-child(4)").toggle();

$(".price li:last").toggle();

var price = 13;
$("strong").text("$" + price);


$(".btn-pepperonni").click(function () {
	$("#pizza .pep").toggle();
	$(".btn-pepperonni").toggleClass("active");
	$(".price li:first").toggle();
	if ($(".btn-pepperonni").hasClass("active")){
		price++;
	}
	else {
		price--;
	}
	$("strong").text("$" + price);
})

$(".btn-green-peppers").click(function (){
	$("#pizza .green-pepper").toggle();
	$(".btn-green-peppers").toggleClass("active");
	$(".price li:nth-child(3)").toggle();
	if ($(".btn-green-peppers").hasClass("active")){
		price++;
	}
	else {
		price--;
	}
	$("strong").text("$" + price);
})

$(".btn-mushrooms").click(function (){
	$("#pizza .mushroom").toggle();
	$(".btn-mushrooms").toggleClass("active");
	$(".price li:nth-child(2)").toggle();
	if ($(".btn-mushrooms").hasClass("active")){
		price++;
	}
	else {
		price--;
	}
	$("strong").text("$" + price);
})

$(".btn-sauce").click(function (){
	$(".sauce").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active");
	$(".price li:nth-child(4)").toggle();
	if ($(".btn-sauce").hasClass("active")){
		price += 3;
	}
	else {
		price -= 3;
	}
	$("strong").text("$" + price);

})

$(".btn-crust").click(function (){
	$(".crust").toggleClass("crust-gluten-free");
	$(".btn-crust").toggleClass("active");
	$(".price li:last").toggle();
	if ($(".btn-crust").hasClass("active")){
		price += 5;
	}
	else {
		price -= 5;
	}
	$("strong").text("$" + price);
})


// var options = [
// 	{
// 		name: "Pepporoni",
// 		price: 1,
// 		isActive: true,
// 		class: 'pep',
// 		buttonClass:'btn-pepperonni',
// 		classToToggleOnClick: "hidden"
// 	},
// 	// {
// 	// 	name: "Pepporoni",
// 	// 	price: 1,
// 	// 	isActive: true
// 	// },
// 	// {
// 	// 	name: "Pepporoni",
// 	// 	price: 1,
// 	// 	isActive: true
// 	// },
// 	{
// 		name: "White sauce",
// 		price: 3,
// 		isActive: false,
// 		class: 'sauce',
// 		buttonClass:'btn-sauce',
// 		classToToggleOnClick: "sauce-white"
// 	},
// ];

// for (var i = 0; i < options.length; i++) {
// 	console.log("." + options[i].buttonClass);
// 	$("." + options[i].buttonClass).click(function () {
// 		console.log('options[i]')
// 		// $("#pizza ." + options[i].class).toggle();
// 		// $(".btn-pepperonni").toggleClass("active");
// 		// $(".price li:first").toggle();
// 		// if ($(".btn-pepperonni").hasClass("active")){
// 		// 	price++;
// 		// }
// 		// else {
// 		// 	price--;
// 		// }
// 		// $("strong").text("$" + price);
// 	})
// }
