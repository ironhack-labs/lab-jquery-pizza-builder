// Write your Pizza Builder JavaScript in this file.
body = document.querySelector('body')


const buttonGreenpeppers = document.querySelector('.btn-green-peppers')
const buttonPepperonni = document.querySelector('.btn-pepperonni')
const buttonMushroom = document.querySelector('.btn-mushrooms')
const buttonSauce = document.querySelector('.btn-sauce')
const buttonCrust = document.querySelector('.btn-crust')

const prices = document.querySelectorAll('aside li')
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
  prices.forEach(e => {
    if(buttonGreenpeppers.getAttribute('class') === 'btn btn-green-peppers') {
      if(e.innerText.includes('green pepper')) e.style.display = 'none'
    } else {
      e.style.display = ''
    }
  })
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

  prices.forEach(e => {
    if(buttonPepperonni.getAttribute('class') === 'btn btn-pepperonni') {
      if(e.innerText.includes('pepperonni')) e.style.display = 'none'
    } else {
      e.style.display = ''
    }
  })

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

  prices.forEach(e => {
    if(buttonMushroom.getAttribute('class') === 'btn btn-mushrooms') {
      if(e.innerText.includes('mushrooms')) e.style.display = 'none'
    } else {
      e.style.display = ''
    }
  })

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

  prices.forEach(e => {
    if(buttonSauce.getAttribute('class') === 'btn btn-sauce') {
      if(e.innerText.includes('sauce')) e.style.display = 'none'
    } else {
      e.style.display = ''
    }
  })

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

  prices.forEach(e => {
    if(buttonCrust.getAttribute('class') === 'btn btn-crust') {
      if(e.innerText.includes('crust')) e.style.display = 'none'
    } else {
      e.style.display = ''
    }
  })
}

window.onload = function() {
  crust.removeAttribute('class')
  crust.setAttribute('class', 'crust')
  buttonCrust.removeAttribute('class')
  buttonCrust.setAttribute('class', 'btn btn-crust')

  sauce.removeAttribute('class')
  sauce.setAttribute('class', 'sauce')
  buttonSauce.removeAttribute('class')
  buttonSauce.setAttribute('class', 'btn btn-sauce')
}


