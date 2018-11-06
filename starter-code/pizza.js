//buttons
var btnPepperonni = $('.btn-pepperonni')
var btnPeppers = $('.btn-green-peppers')
var btnMushroom = $('.btn-mushrooms')
var btnSauce = $('.btn-sauce')
var btnCrust = $('.btn-crust')
var priceItem = $('strong')
var price = parseInt(priceItem.text().substr(1,priceItem.text().length))


//prices
var mushPrice = $('.price li:contains(mushrooms)')
var pepperonniPrice = $('.price li:contains(pepperonni)')
var pepperPrice = $('.price li:contains(pepper)')
var saucePrice = $('.price li:contains(sauce)')
var crustPrice = $('.price li:contains(crust)')


//ingredientes
var peppers = $('.green-pepper')
var pepperonnis = $('.pep')
var mushrooms = $('.mushroom')
var sauce = $('.sauce')
var crust = $('.crust')

//funciones

function updatePrice(ingredient, value){

  if(!ingredient.hasClass('active')){
    price -= value
    priceItem.text('$'+price)
  }else{
    price += value
    priceItem.text('$'+price)
  }

}





btnPepperonni.on('click', function(){
  pepperonnis.toggle()
  btnPepperonni.toggleClass('active')
  pepperonniPrice.toggle()
  updatePrice(btnPepperonni, 1)
  

})

btnMushroom.on('click', function(){
  mushrooms.toggle()
  btnMushroom.toggleClass('active')
  mushPrice.toggle()
  updatePrice(btnMushroom, 1)


})

btnPeppers.on('click', function(){
  peppers.toggle()
  btnPeppers.toggleClass('active')
  pepperPrice.toggle()
  updatePrice(btnPeppers, 1)

})

btnSauce.on('click', function(){
  sauce.toggle("sauce-white")
  btnSauce.toggleClass('active')
  saucePrice.toggle()
  updatePrice(btnSauce, 3)

})

btnCrust.on('click', function(){
  crust.toggleClass("crust-gluten-free")
  btnCrust.toggleClass('active')
  crustPrice.toggle()
  updatePrice(btnCrust, 5)

})