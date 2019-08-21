//usar toggle
// Write your Pizza Builder JavaScript in this file.
//usar toggle
// Write your Pizza Builder JavaScript in this file.
var totalPrecio = 13
$('.price strong').text('$' + totalPrecio)

$(function() {
  $('.crust').toggleClass('crust-gluten-free')
  $('.btn-crust').toggleClass('active')
  $('.sauce').toggleClass('sauce-white')
  $('.btn-sauce').toggleClass('active')
  $($(".price li:contains('$3 white sauce')")).hide()
  $($(".price li:contains('$5 gluten-free crust')")).hide()

  $('.btn-pepperonni').click(function() {
    $('.pep').toggle()
    $(this).toggleClass('active')

    $($(".price li:contains('$1 pepperonni')")).toggle()
    if ($(this).hasClass('active')) {
      totalPrecio += 1
    } else {
      totalPrecio -= 1
    }
    upPrecio()
  })
  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle()
    $(this).toggleClass('active')

    $($(".price li:contains('$1 mushrooms')")).toggle()
    if ($(this).hasClass('active')) {
      totalPrecio += 1
    } else {
      totalPrecio -= 1
    }
    upPrecio()
  })
  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle()
    $(this).toggleClass('active')

    $($(".price li:contains('$1 green peppers')")).toggle()
    if ($(this).hasClass('active')) {
      totalPrecio += 1
    } else {
      totalPrecio -= 1
    }
    upPrecio()
  })
  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white')
    $(this).toggleClass('active')

    $($(".price li:contains('$3 white sauce')")).toggle()
    if ($(this).hasClass('active')) {
      totalPrecio += 3
    } else {
      totalPrecio -= 3
    }
    upPrecio()
  })
  $('.btn-crust').click(function() {
    $('.crust').toggleClass('crust-gluten-free')
    $(this).toggleClass('active')

    $($(".price li:contains('$5 gluten-free crust')")).toggle()
    if ($(this).hasClass('active')) {
      totalPrecio += 5
    } else {
      totalPrecio -= 5
    }
    upPrecio()
  })
})

function upPrecio() {
  $('.price strong').text('')
  $('.price strong').text('$' + totalPrecio)
}
