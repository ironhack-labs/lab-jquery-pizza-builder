// Write your Pizza Builder JavaScript in this file.
var peperonniButton = $('.btn-pepperonni')
var mushroomsButton = $('.btn-mushrooms')
var greenPeppersButton= $('.btn-green-peppers')
var sauceButton = $('.btn-sauce')
var crustButton = $('.btn-crust')

var greenPepper = $('.green-pepper')
var mushroom = $('.mushroom')
var peperonni = $('.pep')
var crust = $('.crust')
var cheese = $('.cheese')
var sauce = $('.sauce')

var pricePep = $('.pricePep')
var priceMush = $('.priceMush')
var priceGreen =$('.priceGreen')
var priceSauce = $('.priceSauce')
var priceGluten = $('.priceGluten')

var totalPrice = 21

peperonniButton.on('click', function(){
  peperonniButton.toggleClass("active")
  $('.pricePep').toggleClass('noEsta')
  if(peperonni.is(':visible')){
    peperonni.hide()
    totalPrice-= 1
    $('#total').text("$" + totalPrice)
  }else{
    peperonni.show()
    totalPrice+= 1
    $('#total').text("$" + totalPrice)
    
  }
})

mushroomsButton.on('click', function(){
  mushroomsButton.toggleClass("active")
  $('.priceMush').toggleClass('noEsta')
  if(mushroom.is(':visible')){
    mushroom.hide()
    totalPrice-= 1
    $('#total').text("$" + totalPrice)
  }else{
    mushroom.show()
    totalPrice+= 1
    $('#total').text("$" + totalPrice)
  }
})

greenPeppersButton.on('click', function(){
  greenPeppersButton.toggleClass("active")
  $('.priceGreen').toggleClass('noEsta')
  if(greenPepper.is(':visible')){
    greenPepper.hide()
    totalPrice-= 1
    $('#total').text("$" + totalPrice)
  }else{
    greenPepper.show()
    totalPrice+= 1
    $('#total').text("$" + totalPrice)
  }
})

sauceButton.on('click', function(){
  sauceButton.toggleClass("active")
  $('.priceSauce').toggleClass('noEsta')
  if(sauce.is(':visible')){
    sauce.hide()
    totalPrice-= 3
    $('#total').text("$" + totalPrice)
  }else{
    sauce.show()
    totalPrice+= 3
    $('#total').text("$" + totalPrice)
  }
})
//Falta regresar el crust gluten free
crustButton.on('click', function(){
  crustButton.toggleClass("active")
  crust.toggleClass('crust-gluten-free')
  $('.priceGluten').toggleClass('noEsta')
  if(crust.is(':visible')){
    
    totalPrice-= 5
    $('#total').text("$" + totalPrice)
  }else{ 
    totalPrice+= 5
    $('#total').text("$" + totalPrice)
  }
})