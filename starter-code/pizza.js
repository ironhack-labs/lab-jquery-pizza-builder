//Working on the pizza

// **** Add and remove Pepperonni when click on the button****

const pepperonniButton = document.querySelector('.btn-pepperonni') //  Solo llama a uno (query Selector)

const pepperonnis = document.querySelectorAll('.pep') //  Llama a varios (query Selector)

pepperonniButton.onclick = () => {
  pepperonnis.forEach(pepperoni => {
    pepperoni.classList.toggle('hide')
  })
  pepperonniButton.classList.toggle('active')
  pepPrice.classList.toggle('hide')
}

// **** Add and remove Mushrooms when click on the button****
const mushroomButton = document.querySelector('.btn-mushrooms') //  Solo llama a uno (query Selector)

const mushroomS = document.querySelectorAll('.mushroom') //  Llama a varios (query Selector)

mushroomButton.onclick = () => {
  mushroomS.forEach(mushroom => {
    mushroom.classList.toggle('hide')
  })
  mushroomButton.classList.toggle('active')
  mushPrice.classList.toggle('hide')
}

// // **** Add and remove Green-peppers when click on the button****
const greenpepperButton = document.querySelector('.btn-green-peppers') //  Solo llama a uno, el boton (query Selector)

const greenpepperS = document.querySelectorAll('.green-pepper') //  Llama a varios (query Selector)

greenpepperButton.onclick = () => {
  greenpepperS.forEach(greenpepper => {
    greenpepper.classList.toggle('hide')
  })
  greenpepperButton.classList.toggle('active')
  greenpPrice.classList.toggle('hide')
}

// **** White sauce will appear only when selected by the person****
const sauceButton = document.querySelector('.btn-sauce') //  Solo llama a uno, el boton (query Selector)

const sauceS = document.querySelectorAll('.sauce') //  Llama a varios (query Selector)

sauceButton.onclick = () => {
  sauceS.forEach(sauce => {
    sauce.classList.toggle('sauce-white')
  })
  sauceButton.classList.toggle('active')
  whitePrice.classList.toggle('hide')
}

// **** Gluten-free crust will appear only when selected by the person****
const crustButton = document.querySelector('.btn-crust') //  Solo llama a uno, el boton (query Selector)

const crustS = document.querySelectorAll('.crust') //  Llama a varios (query Selector)

crustButton.onclick = () => {
  crustS.forEach(crust => {
    crust.classList.toggle('crust-gluten-free')
  })
  crustButton.classList.toggle('active')
  crustPrice.classList.toggle('hide')
}

// *** Prices ***

const pepPrice = document.querySelector('#pepPrice')
const mushPrice = document.querySelector('#mushPrice')
const greenpPrice = document.querySelector('#greenpPrice')
const whitePrice = document.querySelector('#whitePrice')
const crustPrice = document.querySelector('#crustPrice')
