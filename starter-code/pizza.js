// Write your Pizza Builder JavaScript in this file.

//Buttons
const btnPep = document.querySelector('.btn-pepperonni')
const btnGreenPep = document.querySelector('.btn-green-peppers')
const btnMushrooms = document.querySelector('.btn-mushrooms')
const btnSauce = document.querySelector('.btn-sauce')
const btnCrust = document.querySelector('.btn-crust')

//Ingredients
const peperonnis = document.getElementsByClassName('pep')
const greenPeppers = document.getElementsByClassName('green-pepper')
const mushrooms = document.getElementsByClassName('mushroom')
const sauce = document.querySelector('.sauce')
const crust = document.querySelector('.crust')

//Price list 
const ul = document.getElementsByTagName('ul')[1].children
const lista = [...ul]
lista.forEach((e) => {
    e.style.display = 'none'
})
const price = document.querySelector('strong')
let totalPrice = 13
price.innerHTML = `$${totalPrice}`

//Default Pizza
sauce.setAttribute('class','sauce')
btnSauce.classList.toggle('active')
crust.setAttribute('class','crust') 
btnCrust.classList.toggle('active')
lista[0].style.display = 'block'
lista[1].style.display = 'block'
lista[2].style.display = 'block'

//Peperonnis
btnPep.addEventListener('click', function () {
    btnPep.classList.toggle('active')
    const pepArr = [...peperonnis]
    if(btnPep.classList.contains('active')){
        pepArr.forEach((pep) => {
            pep.style.display='block';
        })
        lista[0].style.display = 'block'
        totalPrice += 1
        price.innerHTML = `$${totalPrice}`
    }else{
        pepArr.forEach((pep) => {
            pep.style.display='none';
        })
        lista[0].style.display = 'none'
        totalPrice -= 1
        price.innerHTML = `$${totalPrice}`
    }
})

//Green Peppers
btnGreenPep.addEventListener('click', function () {
    btnGreenPep.classList.toggle('active')
    const greenArr = [...greenPeppers]
    if(btnGreenPep.classList.contains('active')){
        greenArr.forEach((green) => {
            green.style.display='block';
        })
        lista[2].style.display = 'block'
        totalPrice += 1
        price.innerHTML = `$${totalPrice}`
    } else{
        greenArr.forEach((green) => {
            green.style.display='none';
        })
        lista[2].style.display = 'none'
        totalPrice -= 1
        price.innerHTML = `$${totalPrice}`
    }
})

//Mushrooms
btnMushrooms.addEventListener('click', function () {
    btnMushrooms.classList.toggle('active')
    const mushArr = [...mushrooms]
    if(btnMushrooms.classList.contains('active')){
        mushArr.forEach((mushroom) => {
            mushroom.style.display='block';
        })
        lista[1].style.display = 'block'
        totalPrice += 1
        price.innerHTML = `$${totalPrice}`
    }else{
        mushArr.forEach((mushroom) => {
            mushroom.style.display='none';
        }) 
        lista[1].style.display = 'none'
        totalPrice -= 1
        price.innerHTML = `$${totalPrice}`
    }
    
})

//Sauce
btnSauce.addEventListener('click', function(){
    btnSauce.classList.toggle('active')
    if(sauce.className == 'sauce'){
        sauce.className += ' sauce-white'
        lista[3].style.display = 'block'
        totalPrice += 3
        price.innerHTML = `$${totalPrice}`
    } else{
        sauce.setAttribute('class','sauce')
        lista[3].style.display = 'none'
        totalPrice -= 3
        price.innerHTML = `$${totalPrice}`
    }
})

//Crust
btnCrust.addEventListener('click', function(){
    btnCrust.classList.toggle('active')
    if(crust.className == 'crust'){
        crust.className += ' crust-gluten-free'
        lista[4].style.display = 'block'
        totalPrice += 5
        price.innerHTML = `$${totalPrice}`
    } else{
        crust.setAttribute('class','crust')
        lista[4].style.display = 'none'
        totalPrice -= 5
        price.innerHTML = `$${totalPrice}`
    }
})