// Write your Pizza Builder JavaScript in this file.
var totalPrice=10;
var sauceList = $("li:contains('white sauce')");
var crustList = $("li:contains('gluten')");
var pepList = $("li:contains('pepperonni')");
var shroomsList = $("li:contains('mushrooms')");
var pepperList = $("li:contains('green peppers')");
var pepperonies = $('.pep');
var peppers = $('.green-pepper');
var srooms = $('.mushroom');

var pepButton = $('.btn-pepperonni')
pepButton.click(function(e){
  $(this).toggleClass("active")
  pepperonies.toggle();
  pepList.toggle();
  var btnStatus = pepButton.attr('class');
  if (btnStatus.includes('active')) {
    totalPrice+= 1;
  } else {totalPrice-=1;}
  updatePrice(totalPrice);
})

var sroomButton = $('.btn-mushrooms')
sroomButton.click(function(e){
  $(this).toggleClass("active")
  srooms.toggle()
  shroomsList.toggle()
  var btnStatus = sroomButton.attr('class');
  if (btnStatus.includes('active')) {
    totalPrice+= 1;
  } else {totalPrice-=1;}
  updatePrice(totalPrice);
})

var pepperButton = $('.btn-green-peppers')
pepperButton.click(function(e){
  $(this).toggleClass("active")
  peppers.toggle()
  pepperList.toggle()
  var btnStatus = pepperButton.attr('class');
  if (btnStatus.includes('active')) {
    totalPrice+= 1;
  } else {totalPrice-=1;}
  updatePrice(totalPrice);
})


var sauceBtn = $('.btn-sauce')
sauceBtn.click(function(e){
  $(this).toggleClass("active")
  $('.sauce').toggleClass("sauce-white" )
  sauceList.toggle()
  var btnStatus = sauceBtn.attr('class');
  if (btnStatus.includes('active')) {
    totalPrice+= 3;
  } else {totalPrice-=3;}
  updatePrice(totalPrice);
})

var crustBtn = $('.btn-crust')
crustBtn.click(function(e){
  $(this).toggleClass("active")
  $('.crust').toggleClass("crust-gluten-free")
  crustList.toggle()
  var btnStatus = crustBtn.attr('class');
  if (btnStatus.includes('active')) {
    totalPrice+= 5;
  } else {totalPrice-=5;}
  updatePrice(totalPrice);
})

function updatePrice(total){
var displayPrice = $('strong');
priceStr= ['$',(total).toFixed(2)].join('')
displayPrice.html(priceStr)
}

$(function() {
  crustList.hide();
  sauceList.hide()
  pepList.hide();
  shroomsList.hide();
  pepperList.hide();
  pepperonies.hide();
  peppers.hide();
  srooms.hide();
  $('.sauce').removeClass('sauce-white');
  $('.crust').removeClass('crust-gluten-free');
  $('.btn').removeClass("active");
  updatePrice(totalPrice);
});