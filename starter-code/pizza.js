const prices = {
  pepperonnis: 1,
  mushrooms: 1,
  greenPepper: 1,
  whiteSauce: 3,
  glutenFreeCrust: 5
}

/*******************************/
/********* PEPPERONNI *********/
/*******************************/
const pepperonniButton = document.querySelector('.btn-pepperonni')
const pepperonnis = document.querySelectorAll('.pep')

pepperonniButton.onclick = () => {
  // Recorre el array de pepperonnis y "togglea" la clase hide
  pepperonnis.forEach(pepperonni => {
    pepperonni.classList.toggle('hide')
  })

  // Togglea la clase active del botón, si incluye o no el ingrediente
  pepperonniButton.classList.toggle('active')

  // Muestra u oculta el precio si el botón tiene la clase active
  showPrice(pepperonniPrice, pepperonniButton, pepperonnis)

  updatePrices()
}

/*******************************/
/********* GREEN PEPPER *********/
/*******************************/
const greenPepperButton = document.querySelector('.btn-green-peppers')
const greenPeppers = document.querySelectorAll('.green-pepper')

greenPepperButton.onclick = () => {
  // Recorre el array de green peppers y "togglea" la clase hide
  greenPeppers.forEach(greenPepper => {
    greenPepper.classList.toggle('hide')
  })

  // Togglea la clase active del botón, si incluye o no el ingrediente
  greenPepperButton.classList.toggle('active')

  // Muestra u oculta el precio si el botón tiene la clase active
  showPrice(greenPepperPrice, greenPepperButton, greenPepper)

  updatePrices()
}

/*******************************/
/********* MUSHROOMS *********/
/*******************************/
const mushroomButton = document.querySelector('.btn-mushrooms')
const mushrooms = document.querySelectorAll('.mushroom')

mushroomButton.onclick = () => {
  // Recorre el array de mushrooms y "togglea" la clase hide
  mushrooms.forEach(mushroom => {
    mushroom.classList.toggle('hide')
  })

  // Togglea la clase active del botón, si incluye o no el ingrediente
  mushroomButton.classList.toggle('active')

  // Muestra u oculta el precio si el botón tiene la clase active
  showPrice(mushroomPrice, mushroomButton, mushrooms)

  updatePrices()
}

/*******************************/
/*********** SAUCE ***********/
/*******************************/
const sauceElement = document.querySelector('.sauce')
const sauceButton = document.querySelector('.btn-sauce')

sauceElement.classList.remove('sauce-white') // Removes sauce when document loads
sauceButton.classList.remove('active') // Since the sauce white option is not selected by default, the button is also not active

sauceButton.onclick = () => {
  // Togglea la clase sauce-white
  sauceElement.classList.toggle('sauce-white')

  // Togglea la clase active del botón, si incluye o no el ingrediente
  sauceButton.classList.toggle('active')

  // Muestra u oculta el precio si el botón tiene la clase active
  showPrice(whiteSaucePrice, sauceButton, whiteSauce)

  updatePrices()
}

/*******************************/
/*********** GLUTEN ***********/
/*******************************/
const glutenElement = document.querySelector('.crust-gluten-free')
const glutenButton = document.querySelector('.btn-crust')

glutenElement.classList.remove('crust-gluten-free') // Removes gluten when document loads
glutenButton.classList.remove('active') // Since the gluten-free option is not selected by default, the button is also not active

glutenButton.onclick = () => {
  // Togglea la clase crust-gluten-free
  glutenElement.classList.toggle('crust-gluten-free')
  // Togglea la clase active del botón, si incluye o no el ingrediente
  glutenButton.classList.toggle('active')
  // Muestra u oculta el precio si el botón tiene la clase active
  showPrice(glutenFreePrice, glutenButton, glutenFreeCrust)

  updatePrices()
}

/*******************************/
/************ PRICE ************/
/*******************************/

// Getting all the prices
const pepperonniPrice = document.querySelector('#pepperoni-price')
const mushroomPrice = document.querySelector('#mushroom-price')
const greenPepperPrice = document.querySelector('#pepper-price')
const whiteSaucePrice = document.querySelector('#white-sauce-price')
const glutenFreePrice = document.querySelector('#gluten-free-price')

// If the ingredient button is active, the pizza includes the ingredient
// If the pizza includes the ingredient, it must show the price for that ingredient
const showPrice = (ingredientPrice, ingredientButton, ingredient) => {
  if (ingredientButton.classList.contains('active')) {
    ingredientPrice.classList.remove('hide')
  } else {
    ingredientPrice.classList.add('hide')
    prices.ingredient = 0
  }
}

showPrice(pepperonniPrice, pepperonniButton)
showPrice(mushroomPrice, mushroomButton)
showPrice(greenPepperPrice, greenPepperButton)
showPrice(whiteSaucePrice, sauceButton)
showPrice(glutenFreePrice, glutenButton)

/*********************************/
/******* UPDATING THE PRICE *******/
/*********************************/
const totalPrice = document.querySelector('#total-price')

totalPrice.innerHTML = 'Aprende algo dinero'
