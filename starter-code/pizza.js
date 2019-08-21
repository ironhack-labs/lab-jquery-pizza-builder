// Write your Pizza Builder JavaScript in this file.
//Button functions

let totalPrice = []

const pepperButton = document.querySelector('.btn-green-peppers')
const peppers = document.querySelectorAll('.green-pepper')
pepperButton.onclick = () => {
    peppers.forEach(pepper => {
        pepper.classList.toggle('hide')
    })
    pepperButton.classList.toggle('active')
    greenPepperPrice.classList.toggle('hide')
    totalPrice.push(1)
    
}
console.log(totalPrice)
const pepperonniButton = document.querySelector('.btn-pepperonni')  //Button
const pepperonnis = document.querySelectorAll('.pep')
pepperonniButton.onclick = () => {
    pepperonnis.forEach(pepperonni => {
        pepperonni.classList.toggle('hide')
    })
    pepperonniButton.classList.toggle('active')
    pepperoniPrice.classList.toggle('hide')
}


//
const mushroomButton = document.querySelector('.btn-mushrooms')  //Button
const mushrooms = document.querySelectorAll('.mushroom')
mushroomButton.onclick = () => {
    mushrooms.forEach(mushroom => {
        mushroom.classList.toggle('hide')
    })
    mushroomButton.classList.toggle('active')
    mushroomsPrice.classList.toggle('hide')
}


//Crust
const crustButton = document.querySelector('.btn-crust')  //Button
const crusts = document.querySelectorAll('.crust')
crustButton.onclick = () => {
    crusts.forEach(crust => {
        crust.classList.toggle('crust-gluten-free')
    })
    crustButton.classList.toggle('active')
    glutenFreePrice.classList.toggle('hide')
}


//Sauce
const sauceButton = document.querySelector('.btn-sauce')  //Button
const sauces = document.querySelectorAll('.sauce')
sauceButton.onclick = () => {
    sauces.forEach(sauce => {
        sauce.classList.toggle('sauce-white')
    })
    sauceButton.classList.toggle('active')
    whitePrice.classList.toggle('hide')
}


//Getting the pricefs
const greenPepperPrice = document.querySelector('#greenPepperPrice')
const pepperoniPrice = document.querySelector('#pepperoniPrice')
const mushroomsPrice = document.querySelector('#mushroomsPrice')
const whitePrice = document.querySelector('#whitePrice')
const glutenFreePrice = document.querySelector('#glutenFreePrice')


let sum = 10

if (sauceButton.classList.contains('active')) {
    sum= sum + 1
}

console.log(sum)
//Price

// var toppings = {[
//     {

//     }
// ]
//     mushPrice: 1,
//     gpepPrice: 1,
//     pepPrice: 3,
//     wsPrice: 3,
//     gFPrice: 5
// }

// const base = 10
// var ret = [];
// for (var key in state) {
//   if (state[key] === true) {
//     ret.push(ingredients[key]); // push element itself
//   }
// }
// // console.log(ret);
// let sum = 10;
// for (let i = 0; i < ret.length; i++) {
//   sum += ret[i].price; // add ret element price
// }
// document.querySelector(".panel strong").innerText = "$" + sum;

// console.log(sum);
