// Write your Pizza Builder JavaScript in this file.
// $('.pep').hide()
$('.btn-pepperonni').click(function() {
  $('.pep').toggle()
  $("li:contains('pepperonni')").toggle()
})



$('.btn-mushrooms').click(function() {
  $('.mushroom').toggle()
  $("li:contains('mushroom')").toggle()
})

// $('.mushroom').hide()
if ($('.mushroom').css('display') === 'block') {
  $('.btn-mushrooms').addClass('active')
  // $('.mushroom').css('display') = 'block';
  // $('.mushroom').toggle()
  // $("li:contains('mushroom')").toggle()
} else {
  $('.btn-mushrooms').removeClass('active')
  $('.mushroom').css('display') = 'none';
}


$('.btn-green-peppers').click(function() {
  $('.green-pepper').toggle()
  $("li:contains('green peppers')").toggle()
})


$('.sauce').removeClass('sauce-white')
$('.btn-sauce').removeClass('active')
$("li:contains('white sauce')").hide()
$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white')
  $("li:contains('white sauce')").toggle()

})

$('.crust').removeClass('crust-gluten-free')
$("li:contains('gluten-free crust')").hide()
$('.btn-crust').removeClass('active')
$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free')
  $("li:contains('gluten-free crust')").toggle()

})

$('.btn').click(function() {
  $(this).toggleClass('active')
})

$('.btn').click(function() {
  var price = 10;
  if($('.btn-pepperonni').hasClass('active')) {
    price += 1
  } else {
    price += 0
  }
  if($('.btn-mushrooms').hasClass('active')) {
    price += 1
  } else {
    price += 0
  }
  if($('.btn-green-peppers').hasClass('active')) {
    price += 1
  } else {
    price += 0
  } 
  if ($('.btn-crust').hasClass('active')) {
    price += 5
  } else {
    price += 0
  }
  if ($('.btn-sauce').hasClass('active')) {
    price += 3
  } else {
    price += 0
  }
  price = '$' + price
  $('strong').text(price)
})

// if($("li:contains('gluten-free crust')")) {
//   price += 5
// }
// if($("li:contains('white sauce')")) {
//   price += 3
// }

$('strong').text('$13')


 





