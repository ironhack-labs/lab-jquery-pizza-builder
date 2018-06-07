// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

$('.panel strong').text("$"+13)

var greenPepper = $(".green-pepper");
var btnGP = $(".btn-green-peppers");

var pep = $('.pep');
var btnPep = $(".btn-pepperonni");

var mushroom = $('.mushroom');
var btnMush = $('.btn-mushrooms');

var whiteSauce = $('.white-sauce');
var sauce = $('.sauce');
var btnSauce = $(".btn-sauce");

var glutenFreeCrust = $('.crust-gluten-free');
var crust = $('.crust');
var btnCrust = $('.btn-crust')

var priceList = $('.price ul li');

$('*').click(function() {
  var total = 10;
  for(var i=0; i < priceList.length; i++){
    var oneItem = priceList.get(i);
    if ($(oneItem).is(":visible")) {
    resultStr = oneItem.innerHTML;
    resultStr = parseFloat(resultStr.slice(1));
    total += resultStr;
    }
    $('strong').text("$" + total)
  }
});

var removeToppings = function(btn, top, str) {
  btn.click(function() {
  top.toggle();
  btn.toggleClass('active')
  $('.price li:contains("'+str+'")').toggle()
  })
};

removeToppings(btnPep, pep, "pepperonni");
removeToppings(btnMush, mushroom, "mushrooms");
removeToppings(btnGP, greenPepper, "green peppers");

$('.sauce').toggleClass('sauce-white');
$('.btn-sauce').removeClass('active');
$('li:contains("$3 white")').toggle()

$('.btn-sauce').click(function(){
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price li:contains("white sauce")').toggle()
})

$('.crust').toggleClass('crust-gluten-free');
$('.btn-crust').removeClass('active');
$('.price li:contains("gluten-free")').toggle()

$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('li:contains("$5 gluten")').toggle()
})

// addToppings(btnCrust, crust, glutenFreeCrust, "gluten-free");
// addToppings(btnSauce, sauce, whiteSauce, "white sauce");

// var addToppings = function(btn, topOpt1, topOpt2, str) {
//   btn.click(function() {
//   topOpt1.toggleClass(topOpt2);
//   btn.toggleClass('active')
//   $('.price li:contains("'+str+'")').toggle()
//   })
// };

});