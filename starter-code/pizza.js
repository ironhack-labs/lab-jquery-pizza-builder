// // Write your Pizza Builder JavaScript in this file.


$(document).ready(() => {
  // Default settings
  $('.btn-sauce').toggleClass('active')
  $('.sauce').toggleClass("sauce-white")

  $('.btn-crust').toggleClass('active')
  $(".crust").toggleClass("crust-gluten-free");

  let defaultPrice = 13
  $('.totalPizzaPrice').text("$" + defaultPrice)



    $('.btn-pepperonni').click(() => {
    $('.pep').toggle()
    $('.btn-pepperonni').toggleClass('active')
    $('#pepperoniPrice').toggleClass('hidden')
    if ($('.btn-pepperonni').hasClass('active')) {
      defaultPrice++
    } else {
      defaultPrice--
    }
    $('.totalPizzaPrice').text("$" + defaultPrice)

  })

    $('.btn-mushrooms').click(() => {
    $('.mushroom').toggle()
    $('.btn-mushrooms').toggleClass('active')
    $('#mushroomPrice').toggleClass('hidden')
    if ($('.btn-mushrooms').hasClass('active')) {
      defaultPrice++
    } else {
      defaultPrice--
    }
    $('.totalPizzaPrice').text("$" + defaultPrice)

  })

    $('.btn-green-peppers').click(() => {
    $('.green-pepper').toggle()
    $('.btn-green-peppers').toggleClass('active')
    $('#greenPepperPrice').toggleClass('hidden')
    if ($('.btn-green-peppers').hasClass('active')) {
      defaultPrice++
    } else {
      defaultPrice--
    }
    $('.totalPizzaPrice').text("$" + defaultPrice)

  })

    $('.btn-sauce').click(() => {
    $('.btn-sauce').toggleClass('active')
    $('.sauce-white').toggle()
    $('#whiteSaucePrice').toggleClass('hidden')
    if ($('.btn-sauce').hasClass('active')) {
      defaultPrice += 3
    } else {
      defaultPrice -= 3
    }
    $('.totalPizzaPrice').text("$" + defaultPrice)

  })

    $('.btn-crust').click(() => {
    $('.btn-crust').toggleClass('active')
    $(".crust").toggleClass("crust-gluten-free");
    $('#glutenFreeCrustPrice').toggleClass('hidden')
    if ($('.btn-crust').hasClass('active')) {
      defaultPrice += 5
    } else {
      defaultPrice -= 5
    }
    $('.totalPizzaPrice').text("$" + defaultPrice)

  })

})

