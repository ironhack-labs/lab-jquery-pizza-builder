// Write your Pizza Builder JavaScript in this file.
body = document.querySelector('body')


const buttonGreenpeppers = document.querySelector('.btn-green-peppers')
const buttonPepperonni = document.querySelector('.btn-pepperonni')
const buttonMushroom = document.querySelector('.btn-mushrooms')
const buttonSauce = document.querySelector('.btn-sauce')
const buttonCrust = document.querySelector('.btn-crust')

const prices = document.querySelector('aside ul')
const greenpepper = document.querySelectorAll('.green-pepper')
const mushroom = document.querySelectorAll('.mushroom')
const pepperonni = document.querySelectorAll('.pep')
const crust = document.querySelector('.crust')
const cheese = document.querySelector('.cheese')
const sauce = document.querySelector('.sauce')

buttonGreenpeppers.onclick = e => {
  greenpepper.forEach(e => {
    if (e.style.display === 'none') {
      e.style.display = ''
    } else {
      e.style.display = 'none'
    }
  })
  if(buttonGreenpeppers.getAttribute('class') === 'btn btn-green-peppers active') {
    buttonGreenpeppers.removeAttribute('class')
    buttonGreenpeppers.setAttribute('class', 'btn btn-green-peppers')
  } else {
    buttonGreenpeppers.removeAttribute('class')
    buttonGreenpeppers.setAttribute('class', 'btn btn-green-peppers active')
  }
}

buttonPepperonni.onclick = e => {
  pepperonni.forEach(e => {
    if (e.style.display === 'none') {
      e.style.display = ''
    } else {
      e.style.display = 'none'
    }
  })
  if(buttonPepperonni.getAttribute('class') === 'btn btn-pepperonni active') {
    buttonPepperonni.removeAttribute('class')
    buttonPepperonni.setAttribute('class', 'btn btn-pepperonni')
  } else {
    buttonPepperonni.removeAttribute('class')
    buttonPepperonni.setAttribute('class', 'btn btn-pepperonni active')
  }
}

buttonMushroom.onclick = e => {
  mushroom.forEach(e => {
    if (e.style.display === 'none') {
      e.style.display = ''
    } else {
      e.style.display = 'none'
    }
  })
  if(buttonMushroom.getAttribute('class') === 'btn btn-mushrooms active') {
    buttonMushroom.removeAttribute('class')
    buttonMushroom.setAttribute('class', 'btn btn-mushrooms')
  } else {
    buttonMushroom.removeAttribute('class')
    buttonMushroom.setAttribute('class', 'btn btn-mushrooms active')
  }
}

buttonSauce.onclick = e => {
  if(sauce.getAttribute('class') === 'sauce sauce-white') {
    buttonSauce.removeAttribute('class')
    buttonSauce.setAttribute('class', 'btn btn-sauce')
    sauce.removeAttribute('class')
    sauce.setAttribute('class', 'sauce')
  } else {
    buttonSauce.removeAttribute('class')
    buttonSauce.setAttribute('class', 'btn btn-sauce active')
    sauce.removeAttribute('class')
    sauce.setAttribute('class', 'sauce sauce-white')
  }
}

buttonCrust.onclick = e => {
  if(crust.getAttribute('class') === 'crust crust-gluten-free') {
    buttonCrust.removeAttribute('class')
    buttonCrust.setAttribute('class', 'btn btn-crust')
    crust.removeAttribute('class')
    crust.setAttribute('class', 'crust')
  } else {
    buttonCrust.removeAttribute('class')
    buttonCrust.setAttribute('class', 'btn btn-crust active')
    crust.removeAttribute('class')
   crust.setAttribute('class', 'crust crust-gluten-free')
  }
}

