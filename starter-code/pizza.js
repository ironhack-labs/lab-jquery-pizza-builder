// Write your Pizza Builder JavaScript in this file.

$('.pep').fadeToggle(100);
$('.mushroom').fadeToggle(100);
$('.green-pepper').fadeToggle(100);


var totalPrice = 10;
var pepperoniPrice = 1;
var mushroomsPrice = 1;
var greenPeppersPrice = 1;
var saucePrice = 3;
var crustPrice = 5;


$('.btn-pepperonni').on('click', function(event) {
event.preventDefault();
$('.btn-pepperonni').toggleClass('active');
$('.pep').fadeToggle(100);
$('strong').empty();
if ($('.btn-pepperonni').hasClass('active')){
totalPrice -= pepPrice;
$('#pepperoni').remove();
}

else{
totalPrice += pepPrice;
$('#price-list').append('<li id="pepperoni"> Pepperoni ' + pepPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});

$('.btn-green-peppers').on('click', function(event) {
event.preventDefault();
$('.btn-green-peppers').toggleClass('active');
$('.green-pepper').fadeToggle(100);
$('strong').empty();
if ($('.btn-green-peppers').hasClass('active')){
totalPrice -= greenPrice;
$('#green-pepper').remove();
}
else{
totalPrice += greenPrice;
$('#price-list').append('<li id="green-pepper"> Green Pepper ' + greenPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});
$('.btn-mushrooms').on('click', function(event) {
event.preventDefault();
$('.btn-mushrooms').toggleClass('active');
$('.mushroom').fadeToggle(100);
$('strong').empty();
if ($('.btn-mushrooms').hasClass('active')){
totalPrice -= mushPrice;
$('#mushroom').remove();
}
else{
totalPrice += mushPrice;
$('#price-list').append('<li id="mushroom"> Mushroom ' + mushPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});
$('.btn-crust').on('click', function(event) {
event.preventDefault();
$('.btn-crust').toggleClass('active');
$('.crust').toggleClass('crust-gluten-free');
$('strong').empty();
if ($('.btn-crust').hasClass('active')){
totalPrice -= crustPrice;
$('#crust').remove();
}
else{
totalPrice += crustPrice;
$('#price-list').append('<li id="crust"> Crust ' + crustPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});
$('.btn-sauce').on('click', function(event) {
event.preventDefault();
$('.btn-sauce').toggleClass('active');
$('.sauce').toggleClass('sauce-white');
$('strong').empty();
if ($('.btn-sauce').hasClass('active')){
totalPrice -= saucePrice;
$('#sauce').remove();
}
else{
totalPrice += saucePrice;
$('#price-list').append('<li id="sauce"> Sauce ' + mushPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});
  
$('.btn-sauce').on('click', function(event) {
event.preventDefault();
$('.btn-sauce').toggleClass('active');
$('.sauce').toggleClass('sauce-white');
$('strong').empty();
if ($('.btn-sauce').hasClass('active')){
totalPrice -= saucePrice;
$('#sauce').remove();
}
else{
totalPrice += saucePrice;
$('#price-list').append('<li id="sauce"> Sauce ' + mushPrice + '$' + '</li>');
}
$('strong').append(totalPrice);
$('strong').append("$");
});