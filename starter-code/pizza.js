// Write your Pizza Builder JavaScript in this file.


//*****   BUTTONS PIZZA  *****


//PEPERONI 
let pepButton = document.querySelector(".btn-pepperonni")
let pepperoni = document.getElementsByClassName('pep')
const arrayPepperonis = [...pepperoni] 

pepButton.onclick = function() {
  if (pepButton.getAttribute('class').includes('active')){
    arrayPepperonis.forEach(pepperoni => pepperoni.style.opacity =0)
    pepButton.setAttribute('class', 'btn btn-pepperonni')
    pricePepperoni.style.display = "none" 
    finalPrice -= 1

    console.log(finalPrice)
  } else {
    arrayPepperonis.forEach(pepperoni => pepperoni.style.opacity =1)
    pepButton.setAttribute('class', 'btn btn-pepperonni active')
    pricePepperoni.style.display = "block" 
    finalPrice += 1
    console.log(finalPrice)
  }
  totalPrice.innerHTML = `$${finalPrice}`
}

//MUSHROOM

let musButton = document.querySelector(".btn-mushrooms")
let mushrooms = document.getElementsByClassName('mushroom')
const arraysMushrooms = [...mushrooms]

musButton.onclick = function (){
  if ( musButton.getAttribute('class').includes('active')){
    arraysMushrooms.forEach(mushrooms => mushrooms.style.opacity = 0)
    musButton.setAttribute('class', 'btn btn-mushrooms')
    priceMushroom.style.display ="none"  //price 
    finalPrice -= 1
  } else {
    arraysMushrooms.forEach(mushrooms => mushrooms.style.opacity = 1)
    musButton.setAttribute('class', 'btn btn-mushrooms active' )
    priceMushroom.style.display ="block"
    finalPrice += 1
  }
  totalPrice.innerHTML = `$${finalPrice}`
}


//GREENPEPERONI 


let GreenppButton = document.querySelector(".btn-green-peppers")
let GreenPapper = document.getElementsByClassName('green-pepper')
const arrayGreenPapper = [...GreenPapper]

GreenppButton.onclick = function() {
  if (GreenppButton.getAttribute('class').includes('active')){
  arrayGreenPapper.forEach(GreenPapper => GreenPapper.style.opacity = 0)
  GreenppButton.setAttribute('class', 'btn btn-green-peppers' )
  pricePepper.style.display = "none"
  finalPrice -=1 
  } else {
    arrayGreenPapper.forEach(GreenPapper => GreenPapper.style.opacity = 1)
    GreenppButton.setAttribute('class', 'btn btn-green-peppers active')
    pricePepper.style.display = "block"
  finalPrice +=1 
  }
  totalPrice.innerHTML = `$${finalPrice}`
}



//WHITE SAUCE 
let buttonSauce = document.querySelector(".btn-sauce")
let sauce = document.querySelector(".sauce")

buttonSauce.onclick  = function (){
if(sauce.getAttribute("class").includes("sauce-white")) {
    sauce.setAttribute("class", "sauce")
    priceSauce.style.display ="none"
    finalPrice -=3
  } else {
    sauce.setAttribute("class", "sauce sauce-white")
    priceSauce.style.display ="block"
    finalPrice +=3
  }
  totalPrice.innerHTML = `$${finalPrice}`
}

 //GLUTEN FREE  

let CrustButton = document.querySelector(".btn-crust")
let crust = document.querySelector('.crust')

CrustButton.onclick = function() {
  if (crust.getAttribute("class").includes("crust-gluten-free")){
    crust.setAttribute ("class", "crust")
    priceCrust.style.display = "none"
    finalPrice -= 5
  } else {
    crust.setAttribute("class",  "crust-gluten-free active")
    priceCrust.style.display = "block"
    finalPrice += 5
  }
  totalPrice.innerHTML = `$${finalPrice}`
}




// *****  PRICES ***** 

let aside = document.querySelector(".price")
let liPrice = aside.getElementsByTagName('li')

let pricePepperoni = liPrice[0]
let priceMushroom = liPrice [1]
let pricePepper = liPrice [2]
let priceSauce = liPrice [3]
let priceCrust = liPrice [4]



let finalPrice = 21

let totalPrice = aside.getElementsByTagName("strong")[0] 

let pizza = document.getElementById("pizza")