// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $('.btn-pepperonni').click(function() {
    $('.pep').toggle()
    $(this).toggleClass('active')
    $('.panel.price ul li:first').toggle()
    updatePrice()
  })

  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle()
    $(this).toggleClass('active')
    $('.panel.price ul li:nth-child(2)').toggle()
    updatePrice()
  })
  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle()
    $(this).toggleClass('active')
    $('.panel.price ul li:nth-child(3)').toggle()
    updatePrice()
  })
  // Iteration 2: Sauce and crust options
  $('.sauce-white').removeClass('sauce-white')
  $('.crust-gluten-free').removeClass('crust-gluten-free')
  $('.btn-sauce').removeClass('active')
  $('.btn-crust').removeClass('active')

  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white')
    //Iteration 3: Change the buttons' state
    $(this).toggleClass('active')
    $(".panel.price li:contains('white sauce')").toggle()
    updatePrice()
  })
  $('.btn-crust').click(function() {
    $('.crust').toggleClass('crust-gluten-free')
    $(this).toggleClass('active')
    $('.panel.price li:last').toggle()
    updatePrice()
  })

  $('.price li:nth-child(4)').hide()
  $('.price li:nth-child(5)').hide()
  $('.price strong').text(['$' + '13'])
})

function updatePrice() {
  let total = 10
  if ($('.btn-pepperonni').hasClass('active')) {
    total += 1
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    total += 1
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    total += 1
  }
  if ($('.btn-sauce').hasClass('active')) {
    total += 3
  }
  if ($('.btn-crust').hasClass('active')) {
    total += 5
  }
  $('.price strong').text('$' + total)
}
