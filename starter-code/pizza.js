// Write your Pizza Builder JavaScript in this file.

var butpep = $('.btn-pepperonni')
butpep.on('click', function(){
  // console.log("carajo")
  var allPepperonni = $('.pep')
  allPepperonni.toggle()
  $(this).toggleClass('active')
  if($('.price li:nth-child(1)').is(":visible")){
    $('.price li:nth-child(1)').hide()
  }else if($('.price li:nth-child(1)').is(":hidden")) {
    $('.price li:nth-child(1)').show()
  }


})

var butgreen = $('.btn-green-peppers')
butgreen.on('click', function(){
  var allGreenPepper = $('.green-pepper')
  allGreenPepper.toggle()
  $(this).toggleClass('active')

  if($('.price li:nth-child(3)').is(":visible")){
    $('.price li:nth-child(3)').hide()
  }else if($('.price li:nth-child(3)').is(":hidden")) {
    $('.price li:nth-child(3)').show()
  }
})

var butmush = $('.btn-mushrooms')
butmush.on('click', function(){
  var allMushrooms = $('.mushroom')
  allMushrooms.toggle()
  $(this).toggleClass('active')

  if($('.price li:nth-child(2)').is(":visible")){
    $('.price li:nth-child(2)').hide()
  }else if($('.price li:nth-child(2)').is(":hidden")) {
    $('.price li:nth-child(2)').show()
  }
})

    $('.price li:nth-child(4)').hide()
var buttSauce = $('.btn-sauce')
buttSauce.on('click', function(){
  // console.log('asda')
  var theSauce = $('.sauce')
  theSauce.toggleClass('sauce-white')
  $(this).toggleClass('active')

  if($('.price li:nth-child(4)').is(":visible")){
    $('.price li:nth-child(4)').hide()
    $('.panel strong').text("$13")
  }else if($('.price li:nth-child(4)').is(":hidden")) {
    $('.price li:nth-child(4)').show()
    $('.panel strong').text("$16")
  }
})


  $('.price li:nth-child(5)').hide()
var buttCrust = $('.btn-crust')
buttCrust.on('click', function(){
  // console.log('asda')
  var theCrust = $('.crust')
  theCrust.toggleClass('crust-gluten-free')
  $(this).toggleClass('active')

  if($('.price li:nth-child(5)').is(":visible")){
    $('.price li:nth-child(5)').hide()
  }else if($('.price li:nth-child(5)').is(":hidden")) {
    $('.price li:nth-child(5)').show()
  }
})

$('.panel strong').text("$13")


// var list = $(".price ul li")
// list.hide()

// if($(".pep").is( ":visible" )){
// 	console.log('visible')
//   $('.btn-pepperonni').addClass('active')
// }else if($(".pep").is(":hidden")){
//   // $('.btn-pepperonni').removeClass('active')
// }

// //
// $('.pep').each(function() {
//   if($('.pep.active')){
//     $('.btn-pepperonni').addClass('active')
//   }else {
//     $('.btn-pepperonni').removeClass('active')
//   }
// })
//
// $('.item').each(function() {
//   $(this).removeClass('hover');
//   $('.item.active').addClass('hover');
// });
