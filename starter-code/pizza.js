// Write your Pizza Builder JavaScript in this file.

////CREATING BUTTONS AND FUNCTIONALITIES
const pepperonniButton = document.querySelector('.btn-pepperonni')
const pepperonis = document.querySelectorAll('.pep')


pepperonniButton.onclick = () => {
  pepperonis.forEach(pepperoni=> {
   pepperoni.classList.toggle('hide')
  })
  pepperonniButton.classList.toggle('active')
  peppPrice.classList.toggle('hide')
}

const mushroomsButton = document.querySelector('.btn-mushrooms')
const mushrooms = document.querySelectorAll('.mushroom')

mushroomsButton.onclick = () => {
    mushrooms.forEach(mushroom => {
        mushroom.classList.toggle('hide')
    })
    mushroomsButton.classList.toggle('active')
    mushroomPrice.classList.toggle('hide')
}


const peppersButton = document.querySelector('.btn-green-peppers')
const peppers = document.querySelectorAll('.green-pepper')

peppersButton.onclick = () => {
    peppers.forEach(pepper => {
        pepper.classList.toggle('hide')
    })
    peppersButton.classList.toggle('active')
    peppersPrice.classList.toggle('hide')
}

////WHITE SAUCE AND GLUTEN FREE

const whiteSauceButton = document.querySelector('.btn-sauce')
const whiteSauce = document.querySelector('.sauce')

whiteSauce.classList.remove('sauce-white')
whiteSauceButton.classList.remove('active')
whitePrice.classList.add('hide')


whiteSauceButton.onclick = () => {
    whiteSauce.classList.toggle('sauce-white')
    whiteSauceButton.classList.toggle('active')
    whitePrice.classList.toggle('hide')

}

const glutenFreeButton = document.querySelector('.btn-crust')
const glutenFree = document.querySelector('.crust')

glutenFree.classList.remove('crust-gluten-free')
glutenFreeButton.classList.remove('active')
glufreePrice.classList.add('hide')

glutenFreeButton.onclick = () => {
    glutenFree.classList.toggle('crust-gluten-free')   
    glutenFreeButton.classList.toggle('active')
    glufreePrice.classList.toggle('hide')


}


//INGREDIENTS AND PRICES
// pepperoniPrice
// mushPrice
// greenpepsPrice
// whitePrice
// glufreePrice

const peppPrice = document.querySelector('#pepperoniPrice')
const mushroomPrice = document.querySelector('#mushPrice')
const peppersPrice = document.querySelector('#greenpepsPrice')
const whiteSaucePrice = document.querySelector('#whitePrice')
const glutenFreePrice = document.querySelector('#glufreePrice')




//UPDATE PRICE

