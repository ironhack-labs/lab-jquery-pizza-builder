// Write your Pizza Builder JavaScript in this file.
// PP MEX Felipe Regina

// Buttons
let btnPepperonni   = document.getElementsByClassName("btn-pepperonni")
let btnMushrooms  = document.getElementsByClassName("btn-mushrooms")
let btnPeppers     = document.getElementsByClassName("btn-peppers")
let btnSauce      = document.getElementsByClassName("btn-sauce")
let btnCrust      = document.getElementsByClassName("btn-crust")

// Ingredients
let ingPeperoni = document.getElementsByClassName("pep")
let ingMushroom = document.getElementsByClassName("mushroom")
let ingPeppers = document.getElementsByClassName("green-pepper")
let ingSauce = document.getElementsByClassName("sauce")
let ingCrust = document.getElementsByClassName("crust")



const selected = (arr) =>{
  return arr
}

const toggle = (arr) =>{
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.style.display = 'none'
  }
}
// Adding Event

// Events click
btnPepperonni.onclick = ()=>{
  toggle(ingPeperoni)
}
toggle(ingMushroom)
toggle(ingPeppers)
toggle(ingSauce)
// toggle(ingCrust)