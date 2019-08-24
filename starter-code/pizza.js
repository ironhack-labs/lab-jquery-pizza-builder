// Write your Pizza Builder JavaScript in this file.


//VARIABLES DECLARATION

//1.-Buttons
const pepperoniButton = document.querySelector('.btn-pepperonni')
const mushroomsButton = document.querySelector('.btn-mushrooms')
const grPepButton = document.querySelector('.btn-green-peppers')
const sauceButton = document.querySelector('.btn-sauce')
const crustButton = document.querySelector('.btn-crust')
const allButons = [pepperoniButton, mushroomsButton, grPepButton, sauceButton, crustButton]

//2.- Pizza and pizza objects
const pizza = document.querySelector('#pizza')

const peps = document.querySelectorAll('.pep')
const mushrooms = document.querySelectorAll('.mushroom')
const grPeppers = document.querySelectorAll('.green-pepper')
const sauce = document.querySelector('.sauce')
const crust = document.querySelector('.crust')
let elements = {
  "pepperonni": [1, "$1 pepperonni"],
  "mushrooms": [1, "$1 mushrooms"],
  "greenPeppers": [1, "$1 green peppers"],
  "whiteSauce": [3, "$3 white sauce"],
  "glutenFree": [5, "$5 gluten-free crust"]
}
//3.- Prices 
const pepPrice = document.querySelector('.pep-price')
const mushroomPrice = document.querySelector('.mushroom-price')
const grPepPrice = document.querySelector('.grPep-price')
const whiteSaucePrice = document.querySelector('.whiteSauce-price')
const glutenFreeCrustPrice = document.querySelector('.glutenFreeCrust-price')



//HELPER FUNCTIONS



//ITERATION 1,PART OF 3 AND PART OF 4
const clearPizza = () => {
  window.onload = () => {
    peps.forEach((pep) => {
      pep.style.display = 'initial'
      pepperoniButton.classList.add('active')
    })
    mushrooms.forEach((mushroom) => {
      mushroom.style.display = 'initial'
      mushroomsButton.classList.add('active')
    })
    grPeppers.forEach((pepper) => {
      pepper.style.display = 'initial'
      grPepButton.classList.add('active')
    })
  }
  }

const pepsOnOff = () => {
  pepperoniButton.onclick = () => {
  if (peps[0].style.display === 'none') {
    peps.forEach( pep => pep.style.display = 'initial')
    pepperoniButton.classList.add('active')
    pepPrice.style.display = 'initial'

  } else if (peps[0].style.display === 'initial') {
    peps.forEach( pep => pep.style.display = 'none')
    pepperoniButton.classList.remove('active')
    pepPrice.style.display = 'none'
  }
}
}

 const mushroomsOnOff = () => {
  mushroomsButton.onclick = () => {
    mushroomsButton.classList.toggle('active')
      if (mushrooms[0].style.display === 'initial') {
        mushrooms.forEach( pep => pep.style.display = 'none')
      }
      else if  (mushrooms[0].style.display === 'none') {
      mushrooms.forEach( pep => pep.style.display = 'initial')
    }
  }
 }

 const grnPeppersOnOff = () => {
  grPepButton.onclick = () => {
  if (grPeppers[0].style.display === 'none') {
    grPeppers.forEach( pep => pep.style.display = 'initial')
    grPepButton.classList.add('active')
    grPepPrice.style.display = 'initial'
  } else if (grPeppers[0].style.display === 'initial') {
    grPeppers.forEach( pep => pep.style.display = 'none')
    grPepButton.classList.remove('active')
    grPepPrice.style.display = 'none'
  }
}
}

//ITERATIOON 2 AND PART OF 3

const crustChange = () => {
  crustButton.onclick = () => {
    crust.classList.toggle('crust-gluten-free')
    crustButton.classList.toggle('active')
    glutenFreeCrustPrice.classList.toggle('glutenFreeCrust-price')
      
  }
}
const sauceChange = () => {
  sauceButton.onclick = () => {
    sauce.classList.toggle('sauce-white')
    sauceButton.classList.toggle('active')
    whiteSaucePrice.classList.toggle('whiteSauce-price')
      
  }
}

const updateIngsAndPrices = () => {
  
}

//ACTIVATION FUNCTION

const startFunction = () => {
  clearPizza()
  pepsOnOff()
  mushroomsOnOff()
  grnPeppersOnOff()
  crustChange()
  sauceChange()
}
startFunction()
               