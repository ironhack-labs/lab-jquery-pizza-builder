// Write your Pizza Builder JavaScript in this file.
const pepBtn = document.querySelector('.btn-pepperonni')
const pepperoni = document.querySelectorAll('.pep')
const mushBtn = document.querySelector ('.btn-mushrooms')
const mushroom = document.querySelectorAll ('.mushroom')
const greenBtn = document.querySelector ('.btn-green-peppers')
const greenPeppers = document.querySelectorAll('.green-pepper')
const crustBtn = document.querySelector('.btn-crust')
const glutenFree = document.querySelector('.crust')
const btns = document.querySelectorAll('.btn')
const sauceBtn = document.querySelector ('.btn-sauce')
const regularSauce = document.querySelector('.sauce')
const saucePrice = document.querySelector('.saucePrice')
const crustPrice = document.querySelector('.crustPrice')
const pepPrice = document.querySelector('.pepPrice')
const mushPrice = document.querySelector('.mushPrice')
const greenPrice = document.querySelector('.greenPrice')
let total = document.querySelector('.total')
let totalPrice =  13
let chargeCrust = 'no'
let chargeSauce = 'no'

total.innerText = '$' + totalPrice


pepBtn.onclick = (e) => {
  for(let i = 0; i<pepperoni.length; i++){
    if(pepperoni[i].style.display === ""){
    pepperoni[i].style.display = 'none'
    pepBtn.classList.remove ('active')
    
    } else {
      pepperoni[i].style.display = ''
      pepBtn.classList.add('active')
     
    }
  }
  if (pepperoni[0].style.display === ""){
    totalPrice += 1
  } else {
    totalPrice -=1
  }
  total.innerText = '$' + totalPrice
  pepPrice.classList.toggle('display')
}


mushBtn.onclick = (e) => {
  for (let i = 0; i < mushroom.length; i++){
    if(mushroom[i].style.display === ""){
      mushroom[i].style.display = 'none'
      mushBtn.classList.remove ('active')
    } else {
      mushroom[i].style.display = ''
      mushBtn.classList.add ('active')
    }
  }
  if (mushroom[0].style.display === ""){
    totalPrice += 1
  } else {
    totalPrice -=1
  }
  total.innerText = '$' + totalPrice
  mushPrice.classList.toggle('display')
}


greenBtn.onclick = (e) => {
  for (let i = 0; i < greenPeppers.length; i++){
    if(greenPeppers[i].style.display === ""){
      greenPeppers[i].style.display = 'none'
      greenBtn.classList.remove ('active')
    } else {
      greenPeppers[i].style.display = ''
      greenBtn.classList.add ('active')
    }
  }
  if (greenPeppers[0].style.display === ""){
    totalPrice += 1
  } else {
    totalPrice -=1
  }
  total.innerText = '$' + totalPrice
  greenPrice.classList.toggle('display')
}

glutenFree.classList.remove ('crust-gluten-free')
crustBtn.classList.remove('active')

  crustBtn.onclick = () => {
    glutenFree.classList.toggle('crust-gluten-free')
    crustBtn.classList.toggle('active')
    crustPrice.classList.toggle('display')
    if(chargeCrust === 'no') {
      chargeCrust = 'yes'
      totalPrice += 5
    } else if (chargeCrust === 'yes') {
      chargeCrust = 'no'
      totalPrice -= 5
    }
    total.innerText = '$' + totalPrice
  }

regularSauce.classList.remove ('sauce-white')
sauceBtn.classList.remove('active')

sauceBtn.onclick = () => {
  regularSauce.classList.toggle ('sauce-white')
  sauceBtn.classList.toggle ('active')
  saucePrice.classList.toggle('display')
  if(chargeSauce === 'no') {
    chargeSauce = 'yes'
    totalPrice += 3
  } else if (chargeSauce === 'yes') {
    chargeSauce = 'no'
    totalPrice -= 3
  }
  total.innerText = '$' + totalPrice
}



