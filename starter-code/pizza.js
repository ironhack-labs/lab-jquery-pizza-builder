// Write your Pizza Builder JavaScript in this file.

//: Container
const pizza = document.querySelector('#pizza')

//: Buttons
const buttonPepperonni = document.querySelector('.btn-pepperonni')
const buttonMushrooms = document.querySelector('.btn-mushrooms')
const buttonPeppers = document.querySelector('.btn-green-peppers')
const buttonSauce = document.querySelector('.btn-sauce')
const buttonCrust = document.querySelector('.btn-crust')

//: Elements
let pepperonnis = document.querySelectorAll('.pep')
let mushrooms = document.querySelectorAll('.mushroom')
let peppers = document.querySelectorAll('.green-pepper')
let sauce = document.querySelector('.sauce-white')
let crust = document.querySelector('.crust-gluten-free')

//: Prices and ingredients
let pepe = document.querySelectorAll('.price ul li')

//: Iteration 1
const fade = (button, elements) => {
  button.classList.remove('active')
  button.onclick = () => {

    switch (button) {
      case buttonPepperonni:
        pepe[0].classList.toggle("visible")
        pepe[0].classList == 'visible' ? totalPrice -= 1 : totalPrice += 1
        ul.innerHTML = `$${totalPrice}`
      break;
      case buttonMushrooms:
        pepe[1].classList.toggle("visible")
        pepe[1].classList == 'visible' ? totalPrice -= 1 : totalPrice += 1
        ul.innerHTML = `$${totalPrice}`
      break;
      case buttonPeppers:
        pepe[2].classList.toggle("visible")
        pepe[2].classList == 'visible' ? totalPrice -= 1 : totalPrice += 1
        ul.innerHTML = `$${totalPrice}`
      break;
      default: 
        console.log('NADA');
        break;
    }

    button.classList.toggle('active')
    elements.forEach(e => {
      e.classList.toggle("visible");
    });
  }
}

fade(buttonPepperonni, pepperonnis)
fade(buttonMushrooms, mushrooms)
fade(buttonPeppers, peppers)

//: Iteration 2
const fadeBackground = (button, element) => {
  let className = element.classList[1]
  button.classList.remove('active')
  element.classList.remove(className)
  
  button.onclick = () => {
    if (button == buttonSauce) {
      pepe[3].classList.toggle('visible')
    } else {
      pepe[4].classList.toggle('visible')
    }
    button.classList.toggle('active')

    // Add prices

    if (button.classList[2] == 'active' && button == buttonSauce) {
       totalPrice += 3
       ul.innerHTML = `$${totalPrice}`
    } else if (buttonSauce.classList[2] == null && button == buttonSauce) {
       totalPrice -= 3
       ul.innerHTML = `$${totalPrice}`
    } else if(button.classList[2] == 'active' && button == buttonCrust) {
      totalPrice += 5
      ul.innerHTML = `$${totalPrice}`
    } else if (button.classList[2] == null && button == buttonCrust) {
      totalPrice -= 5
      ul.innerHTML = `$${totalPrice}`
    } else if (button.classList[2] == 'active') {
      totalPrice = 8
      ul.innerHTML = `$${totalPrice}`
    }

    element.classList.toggle(className)
  }
}

fadeBackground(buttonSauce, sauce)
fadeBackground(buttonCrust, crust)

//: Price
let ul = document.querySelector('strong')
let totalPrice = 13
ul.innerHTML = `$${totalPrice}`
