// Write your Pizza Builder JavaScript in this file.

var pepperonni = $('.btn-pepperonni')
var mushroom = $('.btn-mushrooms')
var pepper = $('.btn-green-peppers')
var sauce = $('.btn-sauce')
var crust = $('.btn-crust')
var dftCrust = $('.crust')
dftCrust.removeClass('crust-gluten-free')
var itemList = $('.price ul li')
var totalText = $('.price strong')
var sauces = $('.sauce-white')
var sauceItem = $('.price ul li:contains("$3 white sauce")')
sauces.toggle()
sauce.toggleClass('active')
sauceItem.toggle()
var crustItem = $('.price ul li:contains("$5 gluten-free crust")')
crustItem.toggle()
crust.toggleClass('active')



var total = parseInt(totalText.text().substr(1, totalText.text().length))
console.log(total)

//
function updatePrice(ingredient, money) {
    if (!ingredient.hasClass('active')) {
        total -= money
        totalText.text(`$${total}`)
    } else {
        total += money
        totalText.text(`$${total}`)
    }
}

pepperonni.on('click', function () {
    var pepperonnis = $('.pep')
    pepperonni.toggleClass('active')
    pepperonnis.toggle('true')

    var pepperonniItem = $('.price ul li:contains("$1 pepperonni")')
    pepperonniItem.toggle()
    updatePrice(pepperonni, 1)
})

mushroom.on('click', function () {
    var mushrooms = $('.mushroom')
    mushroom.toggleClass('active')
    mushrooms.toggle('true')
    var mushroomItem = $('.price ul li:contains("$1 mushroom")')
    mushroomItem.toggle()
    updatePrice(mushroom, 1)
})

pepper.on('click', function () {
    var peppers = $('.green-pepper')
    pepper.toggleClass('active')
    peppers.toggle('true')
    var pepperItem = $('.price ul li:contains("$1 green peppers")')
    pepperItem.toggle()
    updatePrice(pepper, 1)
})

sauce.on('click', function () {

    sauce.toggleClass('active')
    sauces.toggle('true')


    sauceItem.toggle()
    updatePrice(sauce, 3)
})


crust.on('click', function () {
    crust.toggleClass('active')
    dftCrust.toggleClass('crust-gluten-free')


    crustItem.toggle()
    updatePrice(crust, 5)
})
