//usar toggle
// Write your Pizza Builder JavaScript in this file.
let total = 13
function calculatePrecio() {
  $('.price strong').text('$' + total)
}
//pizza peperoni
$('.btn-pepperonni').click(function(event) {
  $('* .pep').toggle()
  $('.btn-pepperonni').toggleClass('active')
  $('.price ul li:nth-child(1)').toggle()
  //toggle
  if ($('.btn-pepperonni').hasClass('active')) {
    total += 1
  } else {
    total -= 1
  }
  calculatePrecio()
})

$('.btn-mushrooms').click(function(event) {
  $('* .mushroom').toggle()
  $('.btn-mushrooms').toggleClass('active')
  $('.price ul li:nth-child(2)').toggle()
  if ($('.btn-mushrooms').hasClass('active')) {
    total += 1
  } else {
    total -= 1
  }
  calculatePrecio()
})

$('.btn-green-peppers').click(function(event) {
  $('* .green-pepper').toggle()
  $('.btn-green-peppers').toggleClass('active')
  $('.price ul li:nth-child(3)').toggle()
  if ($('.btn-green-peppers').hasClass('active')) {
    total += 1
  } else {
    total -= 1
  }
  calculatePrecio()
})

$('.sauce').toggleClass('sauce-white')
$('.btn-sauce').toggleClass('active')
$('.price ul li:nth-child(4)').toggle()
$('.btn-sauce').click(function(event) {
  $('.sauce').toggleClass('sauce-white')
  $('.btn-sauce').toggleClass('active')
  $('.price ul li:nth-child(4)').toggle()
  if ($('.btn-sauce').hasClass('active')) {
    total += 3
  } else {
    total -= 3
  }
  calculatePrecio()
})
//gluten free
$('.crust').toggleClass('crust-gluten-free')
$('.btn-crust').toggleClass('active')
$('.price ul li:nth-child(5)').toggle()
$('.btn-crust').click(function(event) {
  $('.crust').toggleClass('crust-gluten-free')
  $('.btn-crust').toggleClass('active')
  $('.price ul li:nth-child(5)').toggle()
  if ($('.btn-crust').hasClass('active')) {
    total += 5
  } else {
    total -= 5
  }
  calculatePrecio()
})
