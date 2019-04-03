// botones
let buttonPepperoni= document.querySelector(".btn-pepperonni")
let buttonMushroom= document.querySelector(".btn-mushrooms") 
let buttonPepper = document.querySelector(".btn-green-peppers")
let buttonSauce = document.querySelector(".btn-sauce")
let buttonCrust = document.querySelector(".btn-crust") 

// numero de ingredientes
const pepperonis = document.getElementsByClassName("pep")
const mushrooms = document.getElementsByClassName("mushroom")
const peppers = document.getElementsByClassName ("green-pepper")

//corteza y salsa
let crust = document.querySelector(".crust")
let sauce = document.querySelector(".sauce")

//precio ingredientes
let aside = document.querySelector(".price")
let liPrice = aside.getElementsByTagName('li')

let pricePepperoni = liPrice[0]
let priceMushroom = liPrice [1]
let pricePepper = liPrice [2]
let priceSauce = liPrice [3]
let priceCrust = liPrice [4]


const arrayPepperonis = [...pepperonis] 
const arrayMushrooms = [...mushrooms]
const arrayPeppers = [...peppers]

//total precio
let totalPrice = aside.getElementsByTagName("strong")[0] //Cuando englobamos elementos ponemos indice cero 
let finalPrice = 21

let pizza = document.getElementById("pizza")


buttonPepperoni.onclick = () =>  {
  /* los peperonis estan en la pizza el boton tiene una propiedd active */
  if(buttonPepperoni.getAttribute('class').includes('active')){
    arrayPepperonis.forEach(pepperoni => pepperoni.style.opacity = 0)
    buttonPepperoni.setAttribute('class', 'btn btn-pepperonni')
    pricePepperoni.style.display = "none" 
    finalPrice -= 1
   
  }else{
    arrayPepperonis.forEach(pepperoni => pepperoni.style.opacity = 1)
    buttonPepperoni.setAttribute('class', 'btn btn-pepperonni active')
    pricePepperoni.style.display = "block"
    finalPrice += 1
  }
  totalPrice.innerHTML = `$${finalPrice}`
}

buttonMushroom.onclick = ()  => {
  if(buttonMushroom.getAttribute("class").includes("active")){
    arrayMushrooms.forEach(mushroom => mushroom.style.opacity = 0)
    buttonMushroom.setAttribute("class", "btn btn-mushrooms")
    priceMushroom.style.display ="none"
    finalPrice -= 1
  } else{
    arrayMushrooms.forEach(mushroom => mushroom.style.opacity = 1)
    buttonMushroom.setAttribute("class", "btn btn-mushrooms active")
    priceMushroom.style.display ="block"
    finalPrice += 1
  }

  totalPrice.innerHTML = `$${finalPrice}`
}

buttonPepper.onclick = () =>  {
  if(buttonPepper.getAttribute("class").includes("active")){
    arrayPeppers.forEach(pepper => pepper.style.opacity = 0)
    buttonPepper.setAttribute("class","btn btn-green-peppers")
    pricePepper.style.display ="none"
    finalPrice -= 1
  } else{
    arrayPeppers.forEach(pepper => pepper.style.opacity = 1)
    buttonPepper.setAttribute("class","btn btn-green-peppers active")
    pricePepper.style.display ="block"
    finalPrice += 1

  }
  totalPrice.innerHTML = `$${finalPrice}`
}

buttonCrust.onclick = () => {
  if(crust.getAttribute("class").includes("crust-gluten-free")) { 
     crust.setAttribute("class", "crust")
     priceCrust.style.display ="none"
     finalPrice -= 5
  } else{
    crust.setAttribute("class", "crust crust-gluten-free")
    priceCrust.style.display ="block"
    finalPrice += 5
  }
  totalPrice.innerHTML = `$${finalPrice}`
}
buttonSauce.onclick=  () => {
  if(sauce.getAttribute("class").includes("sauce-white")) {
    sauce.setAttribute("class", "sauce")
    priceSauce.style.display ="none"
    finalPrice -= 3
  } else {
    sauce.setAttribute("class", "sauce sauce-white")
    priceSauce.style.display ="block"
    finalPrice += 3
  }
  totalPrice.innerHTML = `$${finalPrice}`
}

