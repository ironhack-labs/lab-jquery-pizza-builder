// Write your Pizza Builder JavaScript in this file.

let parent = document.getElementById('pizza')
console.log('parent' + parent)

//Ingredientes
let peppers = document.getElementsByClassName('green-pepper')
let newPeppers = [...peppers]

let mushrooms = document.getElementsByClassName('mushroom')
let newMushrooms = [...mushrooms]

let pepperonnis = document.getElementsByClassName('pep')
let newPepperonnis = [...pepperonnis]

let crust = document.getElementsByClassName('crust')[0]
let sauce = document.getElementsByClassName('sauce')[0]
let cheese = document.getElementsByClassName('cheese')[0]

//Butones
let btnPepperonni = document.getElementsByClassName('btn-pepperonni')[0]
let btnMushroom = document.getElementsByClassName('btn-mushrooms')[0]
let btnPepper = document.getElementsByClassName('btn-green-peppers')[0]
let btnSauce = document.getElementsByClassName('btn-sauce')[0]
let btnCrust = document.getElementsByClassName('btn-crust')[0]

//Precio Final
let finalPrice = 13
let peppersPrice = 1
let mushroomsPrice = 1
let pepperonnisPrice = 1
let saucePrice = 3
let crustPrice = 5

console.log('original ' + finalPrice)

//Buton Pepper para aparecer o desaparecer
btnPepper.onclick = (e) => {
  if(btnPepper.getAttribute('class').includes('active')) {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[5].style.display = "none"
    newPeppers.forEach(element => {
      element.style.display = 'none' 
    })
    btnPepper.setAttribute('class', 'btn btn-green-peppers')
    finalPrice -=1
    console.log('to inactive ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  } else {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[5].style.display = "block"
    newPeppers.forEach(element => {
      element.style.display = 'block' 
    })
    btnPepper.setAttribute('class', 'btn btn-green-peppers active')
    finalPrice = finalPrice + peppersPrice
    console.log('to active ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  }
}

//Buton Muschrooms para aparecer o desaparecer
btnMushroom.onclick = (e) => {
  if(btnMushroom.getAttribute('class').includes('active')) {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[3].style.display = "none"
    newMushrooms.forEach(element => {
      element.style.display = 'none' 
    })
    btnMushroom.setAttribute('class', 'btn btn-mushrooms')
    finalPrice -= 1
    console.log('to inactive ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  } else {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[3].style.display = "block"
    newMushrooms.forEach(element => {
      element.style.display = 'block' 
    })
    btnMushroom.setAttribute('class', 'btn btn-mushrooms active')
    finalPrice = finalPrice + mushroomsPrice
    console.log('to active ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  }
}

//Buton Pepperonnis para aparecer o desaparecer
btnPepperonni.onclick = (e) => {
  if(btnPepperonni.getAttribute('class').includes('active')) {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[1].style.display = "none"
    newPepperonnis.forEach(element => {
      element.style.display = 'none' 
    })
    btnPepperonni.setAttribute('class', 'btn btn-pepperonni')
    finalPrice -= 1
    console.log('to inactive ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  } else {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[1].style.display = "block"
    newPepperonnis.forEach(element => {
      element.style.display = 'block' 
    })
    btnPepperonni.setAttribute('class', 'btn btn-pepperonni active')
    finalPrice = finalPrice + pepperonnisPrice
    console.log('to active ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  }
}


sauce.setAttribute('class', 'sauce')
btnSauce.setAttribute('class', 'btn btn-sauce')
document.getElementsByClassName("price")[0].childNodes[5].childNodes[7].style.display = "none"
//Boton Sauce para aparecer o desaparecer
btnSauce.onclick = (e) => {
  document.getElementsByClassName("price")[0].childNodes[5].childNodes[7].style.display = "none"
  if(btnSauce.getAttribute('class').includes('active')) {
      sauce.setAttribute('class', 'sauce')
      btnSauce.setAttribute('class', 'btn btn-sauce')
      finalPrice -= 3
      console.log('to inactive ' + finalPrice)
      priceText.innerHTML = `$${finalPrice}`
  } else {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[7].style.display = "block"
    sauce.setAttribute('class', 'sauce sauce-white')
    btnSauce.setAttribute('class', 'btn btn-sauce active')
    finalPrice = finalPrice + saucePrice
    console.log('to active ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  }
}

crust.setAttribute('class', 'crust')
btnCrust.setAttribute('class', 'btn btn-crust')
document.getElementsByClassName("price")[0].childNodes[5].childNodes[9].style.display = "none"
//Boton Crust para aparecer o desaparecer
btnCrust.onclick = (e) => {
  document.getElementsByClassName("price")[0].childNodes[5].childNodes[9].style.display = "none"
  if(btnCrust.getAttribute('class').includes('active')) {
    crust.setAttribute('class', 'crust')
    btnCrust.setAttribute('class', 'btn btn-crust')
    finalPrice -= 5
    console.log('to inactive ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  } else {
    document.getElementsByClassName("price")[0].childNodes[5].childNodes[9].style.display = "block"
    crust.setAttribute('class', 'crust crust-gluten-free')
    btnCrust.setAttribute('class', 'btn btn-crust active')
    finalPrice = finalPrice + crustPrice
    console.log('to active ' + finalPrice)
    priceText.innerHTML = `$${finalPrice}`
  }
}

//Display Price
priceText = document.getElementsByClassName("price")[0].childNodes[7]
priceText.innerHTML = `$${finalPrice}`
console.log(priceText)

