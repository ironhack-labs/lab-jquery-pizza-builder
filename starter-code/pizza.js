// Write your Pizza Builder JavaScript in this file.
// PP MEX Felipe Regina

// Buttons
let btnPepperonni   = document.getElementsByClassName("btn-pepperonni")
let btnMushrooms    = document.getElementsByClassName("btn-mushrooms")
let btnPeppers      = document.getElementsByClassName("btn-green-peppers")
let btnSauce        = document.getElementsByClassName("btn-sauce")
let btnCrust        = document.getElementsByClassName("btn-crust")

// Ingredients
let ingPeperoni     = document.getElementsByClassName("pep")
let ingMushroom     = document.getElementsByClassName("mushroom")
let ingPeppers      = document.getElementsByClassName("green-pepper")
let ingSauce        = document.getElementsByClassName("sauce ")
let ingCrust        = document.getElementsByClassName("crust")

// Prices
let aside = document.getElementsByTagName('aside')

let pricesAll = (arr) => {
  let price = [...arr]
  
}

// pricesAll(prices)

const removingClass = (arr,removeClass) => {
  if (arr[0].classList.contains(removeClass)) {
    arr[0].classList.remove(removeClass)
  }else{
    arr[0].classList.add(removeClass)
  }
}

removingClass(ingCrust,'crust-gluten-free')
removingClass(ingSauce,'sauce-white')
removingClass(btnPepperonni,'active')
removingClass(btnMushrooms,'active')
removingClass(btnPeppers,'active')
removingClass(btnSauce,'active')
removingClass(btnCrust,'active')

const toggleds = arr =>{
  let array = [...arr]
  array.forEach( (e) => {
    
    if(e.style.opacity == 1 || e.style.opacity == ''){
      e.style.opacity = 0
    }else{
      e.style.opacity = 1
    }
  })
}


// Events click
btnPepperonni[0].onclick = () =>{
  toggleds(ingPeperoni)
  removingClass(btnPepperonni,'active')
}
btnMushrooms[0].onclick = () =>{
  toggleds(ingMushroom)
  removingClass(btnMushrooms,'active')
}
btnPeppers[0].onclick = () => {
  toggleds(ingPeppers)
  removingClass(btnPeppers,'active')
}
btnSauce[0].onclick = () => {
  removingClass(ingSauce,'sauce-white')
  removingClass(btnSauce,'active')
}
btnCrust[0].onclick = () => {
  removingClass(ingCrust,'crust-gluten-free')
  removingClass(btnCrust,'active')
}