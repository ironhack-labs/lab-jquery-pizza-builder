var botonPep = $(".btn-pepperonni")
var botonMush = $(".btn-mushrooms")
var botonPeppers = $(".btn-green-peppers")
var botonGluten = $(".btn-crust")
var botonWhite = $(".btn-sauce")
var total = $(".total")

botonPep.click(function(){
  $("section.pep").toggle()
  botonPep.toggleClass("active")
  $(".precio-pep").toggle()
  updatePrice(1, botonPep)
})

botonMush.click(function(){
  $("section.mushroom").toggle()
  botonMush.toggleClass("active")
  $(".precio-mush").toggle()
  updatePrice(1, botonMush)
})

botonPeppers.click(function(){
  $("section.green-pepper").toggle()
  botonPeppers.toggleClass("active")
  $(".precio-peppers").toggle()
  updatePrice(1, botonPeppers)
})

$("section.crust").removeClass("crust-gluten-free")
botonGluten.removeClass("active")
$(".precio-gluten").toggle()

botonGluten.click(function(){
  $("section.crust").toggleClass("crust-gluten-free")
  botonGluten.toggleClass("active")
  $(".precio-gluten").toggle()
  updatePrice(5, botonGluten)
})

$("section.sauce").removeClass("sauce-white")
botonWhite.removeClass("active")
$(".precio-white").toggle()
botonWhite.click(function(){
  $("section.sauce").toggleClass("sauce-white")
  botonWhite.toggleClass("active")
  $(".precio-white").toggle()
  updatePrice(3, botonWhite)
})

var suma = 13;
function updatePrice (price, button){
  if(button.hasClass("active")){
    suma+= price
  }else{
    suma -= price
  }
  total.html(suma)
}