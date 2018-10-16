// Write your Pizza Builder JavaScript in this file.
$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.priceList').hide();



$('.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.price-pep').toggle();
  $('.btn-pepperonni').toggleClass("active");
  updatePrice();


})
$('.btn-mushrooms').click(function() {
  $('.mushroom').toggle();
  $('.price-mushroom').toggle();
  $('.btn-mushrooms').toggleClass("active");
  updatePrice();


})
$('.btn-green-peppers').click(function() {
  $('.green-pepper').toggle();
  $('.price-green-peppers').toggle();
  $('.btn-green-peppers').toggleClass("active");
  updatePrice();


})

$('.btn-crust').click(function() {
  $('.crust').toggleClass("crust-gluten-free");
  $('.price-crust').toggle();
  $('.btn-crust').toggleClass("active");
  updatePrice();


})

$('.btn-sauce').click(function() {
  $('.price-sauce').toggle();
  $('.sauce').toggleClass("sauce-white");
  $('.btn-sauce').toggleClass("active");
  updatePrice();

})

function updatePrice() {
  var price = 10;
  if ($('.btn-pepperonni').hasClass("active")) {
    price++;  
  }
  if ($('.btn-mushrooms').hasClass("active")) {
    price++;
  }
  if ($('.btn-green-peppers').hasClass("active")) {
    price++;
  }
  if ($('.btn-crust').hasClass("active")) {
    price += 5;
  }
  if ($('.btn-sauce').hasClass("active")) {
    price += 3;
  }
  console.log(price);
  $('strong').text("$" + price);

}
