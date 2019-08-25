// Write your Pizza Builder JavaScript in this file.
let pepperonniBtn = document.querySelector('.btn-pepperonni')
let mushroomsBtn = document.querySelector('.btn-mushrooms')
let peppers = document.querySelector('.btn-green-peppers')
let buttonSauce = document.querySelector(".btn-sauce")
let sauce = document.querySelector(".sauce")
let crustButton = document.querySelector(".btn-crust")
let crust = document.querySelector('.crust')



let pepperoni = document.getElementsByClassName('pep')
const arrayPepperoni = [...pepperoni]

pepperonniBtn.onclick = function () {
    if (pepperonniBtn.getAttribute('class').includes('active')) {
        arrayPepperoni.forEach(pepperoni => pepperoni.style.opacity = 0)
        pepperonniBtn.setAttribute('class', 'btn btn-pepperonni')
        pricePepperoni.style.display = "none"
        finalPrice -= 1
    } else {
        arrayPepperoni.forEach(pepperoni => pepperoni.style.opacity = 1)
        pepperonniBtn.setAttribute('class', 'btn btn-pepperonni active')
        pricePepperoni.style.display = "block"
        finalPrice += 1
    }
    totalPrice.innerHTML = `$${finalPrice}`
}


let mushrooms = document.getElementsByClassName('mushroom')
const arrayMush = [...mushrooms]

mushroomsBtn.onclick = function () {
    if (mushroomsBtn.getAttribute('class').includes('active')) {
        arrayMush.forEach(mushrooms => mushrooms.style.opacity = 0)
        mushroomsBtn.setAttribute('class', 'btn btn-mushrooms')
        priceMushroom.style.display = "none" //price 
        finalPrice -= 1
    } else {
        arrayMush.forEach(mushrooms => mushrooms.style.opacity = 1)
        mushroomsBtn.setAttribute('class', 'btn btn-mushrooms active')
        priceMushroom.style.display = "block"
        finalPrice += 1
    }
    totalPrice.innerHTML = `$${finalPrice}`
}


let gP = document.getElementsByClassName('green-pepper')
const arrayGP = [...gP]
peppers.onclick = function () {
    if (peppers.getAttribute('class').includes('active')) {
        arrayGP.forEach(gP => gP.style.opacity = 0)
        peppers.setAttribute('class', 'btn btn-green-peppers')
        pepperPrice.style.display = "none"
        finalPrice -= 1
    } else {
        arrayGP.forEach(gP => gP.style.opacity = 1)
        peppers.setAttribute('class', 'btn btn-green-peppers active')
        pepperPrice.style.display = "block"
        finalPrice += 1
    }
    totalPrice.innerHTML = `$${finalPrice}`
}




document.getElementsByClassName("sauce")[0].classList.toggle('sauce-white');
document.getElementsByClassName("btn-sauce")[0].classList.toggle('active');


buttonSauce.onclick = function () {
    if (sauce.getAttribute("class").includes("sauce-white")) {
        sauce.setAttribute("class", "sauce")
        priceSauce.style.display = "none"
        finalPrice -= 3
    } else {
        sauce.setAttribute("class", "sauce sauce-white")
        priceSauce.style.display = "block"
        finalPrice += 3
    }
    totalPrice.innerHTML = `$${finalPrice}`
}


document.getElementsByClassName("crust")[0].classList.toggle('crust-gluten-free');
document.getElementsByClassName("btn-crust")[0].classList.toggle('active');
crustButton.onclick = function () {
    if (crust.getAttribute("class").includes("crust-gluten-free")) {
        crust.setAttribute("class", "crust")
        priceCrust.style.display = "none"
        finalPrice -= 5
    } else {
        crust.setAttribute("class", "crust-gluten-free active")
        priceCrust.style.display = "block"
        finalPrice += 5
    }
    totalPrice.innerHTML = `$${finalPrice}`
}







let priceOne = document.querySelector(".price")
let listaP = priceOne.getElementsByTagName('li')

let pricePepperoni = listaP[0]
let priceMushroom = listaP[1]
let pepperPrice = listaP[2]
let priceSauce = listaP[3]
let priceCrust = listaP[4]



let finalPrice = 21

let totalPrice = priceOne.getElementsByTagName("strong")[0]