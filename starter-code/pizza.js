// Write your Pizza Builder JavaScript in this file.
// Botones
let btnpepperoni = $('.btn-pepperonni')
let btngreenpeppers = $('.btn-green-peppers')
let btnmushrooms = $('.btn-mushrooms')
let btnsauce = $('.btn-sauce')
let btncrust = $('.btn-crust')
// Ingredients
let pepperoni = $('.pep')
let greenpepper = $('.green-pepper')
let mushroom = $('.mushroom')
let sauce = $('.sauce-white')
let crust = $('.crust-gluten-free')
// Price panel
let price = $('.price li')
let pricepepperoni = $(".price li:contains('pepperonni')")
let pricegreenpepper = $(".price li:contains('green peppers')")
let pricemushroom = $(".price li:contains('mushrooms')")
let pricesauce = $(".price li:contains('white sauce')")
let pricecrust = $(".price li:contains('gluten-free')")

// Price
let totalprice = 13
let priceplace = $(".price strong")
priceplace.text('$' + totalprice)
//Button click

btnpepperoni.on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    pepperoni.hide()
    pricepepperoni.hide();
    totalprice -= 1
    priceplace.text('$' + totalprice)
  } else {
    $(this).addClass('active')
    pepperoni.show()
    pricepepperoni.show();
    totalprice += 1
    priceplace.text('$' + totalprice)
  }
})
btngreenpeppers.on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    greenpepper.hide()
    pricegreenpepper.hide()
    totalprice -= 1
    priceplace.text('$' + totalprice)
  } else {
    $(this).addClass('active')
    greenpepper.show()
    pricegreenpepper.show()
    totalprice += 1
    priceplace.text('$' + totalprice)
  }
})
btnmushrooms.on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    mushroom.hide()
    pricemushroom.hide()
    totalprice -= 1
    priceplace.text('$' + totalprice)
  } else {
    $(this).addClass('active')
    mushroom.show()
    pricemushroom.show()
    totalprice += 1
    priceplace.text('$' + totalprice)
  }
})
btnsauce.removeClass('active')
sauce.removeClass('sauce-white')
pricesauce.hide()
btnsauce.on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    sauce.removeClass('sauce-white')
    pricesauce.hide()
    totalprice -= 3
    priceplace.text('$' + totalprice)
  } else {
    $(this).addClass('active')
    sauce.addClass('sauce-white')
    pricesauce.show()
    totalprice += 3
    priceplace.text('$' + totalprice)
  }
})
btncrust.removeClass('active')
crust.removeClass('crust-gluten-free')
pricecrust.hide()
btncrust.on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    crust.removeClass('crust-gluten-free')
    pricecrust.hide()
    totalprice -= 5
    priceplace.text('$' + totalprice)
  } else {
    $(this).addClass('active')
    crust.addClass('crust-gluten-free')
    pricecrust.show()
    totalprice += 5
    priceplace.text('$' + totalprice)
  }
})