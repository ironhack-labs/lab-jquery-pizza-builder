// Write your Pizza Builder JavaScript in this file.
function calTotalPrice() {
  var htmlColecIngredients = $('.selected > .value');
  var arrayIngredients = [].slice.call(htmlColecIngredients)   
  var finalPrice = 10;
  arrayIngredients.forEach(element => {
    finalPrice += parseInt(element.textContent);
    return finalPrice
  });
  console.log("The finale price is: " + parseInt(finalPrice));
  $('.finalPrice').html(finalPrice);
}

//Initialization
$('.price-pepperonni').addClass('selected');
$('.price-mushrooms').addClass('selected');
$('.price-green-peppers').addClass('selected');
calTotalPrice();
$('.sauce').toggleClass('sauce-white');
$('.crust').toggleClass('crust-gluten-free');
$('.price-sauce').toggle();
$('.price-crust').toggle();
// Btn settings
$('.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.price-pepperonni').toggle();
  $('.price-pepperonni').toggleClass('selected');
  calTotalPrice();
});
$('.btn-mushrooms').click(function() {
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.price-mushrooms').toggle();
  $('.price-mushrooms').toggleClass('selected');
  calTotalPrice();
});
$('.btn-green-peppers').click(function() {
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price-green-peppers').toggle();
  $('.price-green-peppers').toggleClass('selected');
  calTotalPrice();
});
$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price-sauce').toggle();
  $('.price-sauce').toggleClass('selected');
  calTotalPrice();
});
$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price-crust').toggle();
  $('.price-crust').toggleClass('selected');
  calTotalPrice();
});





