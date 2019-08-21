// Write your Pizza Builder JavaScript in this file.

document.getElementById("total-price").innerHTML = `$ 13`
const priceCheck = () => {
  let total = 10;
  if ($("#pep-price").is(":visible")) {
    total += 1
  }
  if ($("#mush-price").is(":visible")) {
    total += 1
  }
  if ($("#green-price").is(":visible")) {
    total += 1
  }
  if ($("#white-price").is(":visible")) {
    total += 3
  }
  if ($("#gluten-price").is(":visible")) {
    total += 5
  }
  document.getElementById("total-price").innerHTML = `$ ${total}`
}



$(document).ready(function () {
  $("#white-price").hide()
})

$(document).ready(function () {
  $("#gluten-price").hide()
})

$(document).ready(function () {
  $(".btn-pepperonni.active").click(function () {
    $(".pep*").toggle()
    $(this).toggleClass("active")
    $("#pep-price").toggle()
    priceCheck()
  })
})

$(document).ready(function () {
  $(".btn-mushrooms.active").click(function () {
    $(".mushroom*").toggle()
    $(this).toggleClass("active")
    $("#mush-price").toggle()
    priceCheck()
  })
})

$(document).ready(function () {
  $(".btn-green-peppers.active").click(function () {
    $(".green-pepper*").toggle()
    $(this).toggleClass("active")
    $("#green-price").toggle()
    priceCheck()
  })
})

$(document).ready(function () {
  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free")
    $(this).toggleClass("active")
    $("#gluten-price").toggle()
    priceCheck()
  })
})

$(document).ready(function () {
  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white")
    $(this).toggleClass("active")
    $("#white-price").toggle()
    priceCheck()
  })
})