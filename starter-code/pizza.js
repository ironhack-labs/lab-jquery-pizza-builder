// Write your Pizza Builder JavaScript in this file.

$(".btn-pepperonni").click(function(e){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $("li:contains('pepperonni')").toggle();
  calcPrice();
});

$(".btn-mushrooms").click(function(e){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $("li:contains('mushrooms')").toggle();
  calcPrice();
});

$(".btn-green-peppers").click(function(e){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $("li:contains('green peppers')").toggle();
  calcPrice();
});

$(".btn-sauce").click(function(e){
  $(this).toggleClass('active');
  $('.sauce').toggle();
  $("li:contains('white sauce')").toggle();
  calcPrice();
});

$(".btn-crust").click(function(e){
  $(this).toggleClass('active');
//  $('.crust').toggle();
  $("li:contains('gluten-free crust')").toggle();
  calcPrice();
});

function calcPrice(){
  var totalPrice=10;

  if ($('.btn-pepperonni').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    totalPrice += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    totalPrice += 5;
  }

  $('#totalPrice').html(totalPrice);
}
