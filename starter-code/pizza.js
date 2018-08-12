var basePrice = 13;
var totalPrice = '$' + basePrice;
// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').on('click', function(){
  $('.pep').toggle()
  $(this).toggleClass('active')
})

$('.btn-mushrooms').on('click', function(){
  $('.mushroom').toggle('true')
  $(this).toggleClass('active')
})

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle()
  $(this).toggleClass('active')
})

$('.btn-crust').on('click', function(){
  $('.crust').toggleClass('crust-gluten-free')
  $(this).toggleClass('active')
  $('.bill-item-crust').toggleClass('bill-item-hidden')

})

$('.btn-sauce').on('click', function(){
  $('.sauce').toggleClass('sauce-white')
  $(this).toggleClass('active')
  $('.bill-item-sauce').toggleClass('bill-item-hidden')
  if($(this).hasClass('active')) basePrice += 3;
  printPrice()
})

function printPrice(){
  $('.price-amount').text('$25')
}
// var totalPrice = Array.from($('.price li'));
// console.log(totalPrice)
// console.log(totalPrice)
$('.price strong').html(totalPrice);