// Write your Pizza Builder JavaScript in this file.

//Fetches pepperoni, mushrooms and green peppers' subtotalelement
let pepSubTotal = $(".price li")[0];
let mushSubTotal = $(".price li")[1];
let greSubTotal = $(".price li")[2];

//Adds and removes toppings from pizza image && Toggles Active feature && Toggles respective list item in price list
$('.btn-pepperoni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperoni').toggleClass('active');
    $('.price li:contains(pepperoni)').toggle();
})

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price li:contains(mush)').toggle();
})

$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price li:contains(green)').toggle();
}) 

//Adds and removes Gluten free crust and white sauce && Toggles active feature
$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price li:contains(white)').toggle();
})

$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price li:contains(gluten)').toggle();
})

//Hides White Sauce and Gluten Free Crust from the price list
$('.price li:contains(sauce)').hide()
$('.price li:contains(crust)').hide()

//Updates Total Price according to active ingredients


$('button').click(function(){
    //Creates an array for each itemPrice
    var firPrice = []
    var secPrice = []
    var thirPrice = []

//Pushes number of items displayed to their respective price array
for (var i = 0; i < $('.price li:visible').length; i++){
	if ( $('.price li:visible:contains(1)')[i] != undefined){	
	firPrice.push($('.price li:visible:contains(1)')[i])}

	if ( $('.price li:visible:contains(3)')[i] != undefined){
	secPrice.push($('.price li:visible:contains(3)')[i])}

	if ( $('.price li:visible:contains(5)')[i] != undefined){
	thirPrice.push($('.price li:visible:contains(5)')[i])}
	addPrice = []
// 	if (subPrice[0] = $('li:contains(1)')){
// 		addPrice.push(subPrice[0])}
// 	if (itemPrice = $('.price li[style*=list]')){
// 			console.log(itemPrice[4]);
// 			if (itemPrice = $('price li:contains(1)')){
// 				subPrice.push(itemPrice.length);
//             }
//     }
// 	if (itemPrice = $('.price li:contains(3)') && $('.price li[style*=list]')){
// 		subPrice.push(itemPrice.length)}
// 	console.log($('.price li:visible:contains(1)')[i].innerHTML)
}
	console.log(firPrice.length)
	console.log(secPrice.length *3)
	console.log(thirPrice.length*5)

//Adds up each array's length multiplied by how much each item should be worth
//Really messy and unintuitive way to make this work, but it works. I would like to
//improve upon this last bit of code as I'm sure there's a better, more sophisticated way to complete this task
var sum = firPrice.length + secPrice.length*3 + thirPrice.length*5


$('.price span')[0].innerText = sum+10
})