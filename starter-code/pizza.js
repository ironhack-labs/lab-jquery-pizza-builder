// Write your Pizza Builder JavaScript in this file.
//Ingredients
const greenPepper = document.querySelectorAll(".green-pepper")
const pep = document.querySelectorAll(".pep")
const mushroom = document.querySelectorAll('.mushroom')
const whiteS = document.querySelector(`.sauce-white`)
const gFCrust = document.querySelector(`.crust-gluten-free`)
//Buttons
const btnPepper = document.querySelector(`.btn-green-peppers`)
const btnMushroom = document.querySelector(`.btn-mushrooms`)
const btnPep = document.querySelector(`.btn-pepperonni`)
const btnWSauce = document.querySelector(`.btn-sauce`)
const btnCrust = document.querySelector(`.btn-crust`)
//precios
const listPep = document.querySelector(`.price li:nth-child(1)`)
const listMushroom = document.querySelector(`.price li:nth-child(2)`)
const listPepper = document.querySelector(`.price li:nth-child(3)`)
const listWsauce = document.querySelector(`.price li:nth-child(4)`)
const listGFcrust = document.querySelector(`.price li:nth-child(5)`)
//price
const priceLocation = document.querySelector(`strong`)
let price = 21;
// Events
btnPep.onclick = e =>{
    //button active
    e.target.classList.toggle('active')
    //ingredient display
    for(i =0; i < pep.length; i++){
    if(pep[i].style.display === "none"){
        pep[i].style.display = `block`
    }
    else{
        pep[i].style.display = `none`
        }
    }
    //list dispay
    if (listPep.style.display === `none`){
        listPep.style.display = `list-item`
        price += 1;
    }else{
        listPep.style.display = `none` 
        price -= 1;
    }
    //price on click
    priceLocation.innerText = `$${price}`
}
btnPepper.onclick = e =>{
    e.target.classList.toggle('active')
    // ingredient display
    for(i =0; i < greenPepper.length; i++){
    if(greenPepper[i].style.display === "none"){
        greenPepper[i].style.display = `block` 
    }
    else{
        greenPepper[i].style.display = `none`
        }
    }
    //list display
    if (listPepper.style.display === `none`){
        listPepper.style.display = `list-item`
        price += 1
    }else{
        listPepper.style.display = `none` 
        price -= 1;
    }
    //price on click
    priceLocation.innerText = `$${price}`
}
btnMushroom.onclick = e =>{
    //button active
    e.target.classList.toggle('active')
    // ingredient display
    for(i =0; i < mushroom.length; i++){
    if(mushroom[i].style.display === "none"){
        mushroom[i].style.display = `block` 
    }
    else{
        mushroom[i].style.display = `none`
        
        }
    }
    //list dispay
    if (listMushroom.style.display === `none`){
        listMushroom.style.display = `list-item`
        price += 1
    }else{
        listMushroom.style.display = `none`
        price -= 1; 
    }
     //price on click
     priceLocation.innerText = `$${price}`
}

btnWSauce.onclick = e =>{
    //button active
    e.target.classList.toggle('active')
    //ingredient display
   whiteS.classList.toggle("sauce-white")
   //list dispay
   if (listWsauce.style.display === `none`){
    listWsauce.style.display = `list-item`
    price += 3
}else{
    listWsauce.style.display = `none` 
    price -= 3
}
 //price on click
 priceLocation.innerText = `$${price}`
}


btnCrust.onclick = e =>{
    //button active
    e.target.classList.toggle('active')
    //ingredient display
 gFCrust.classList.toggle("crust-gluten-free")
 //list dispay
 if (listGFcrust.style.display === `none`){
    listGFcrust.style.display = `list-item`
    price += 5
}else{
    listGFcrust.style.display = `none`
    price -= 5; 
}
 //price on click
 priceLocation.innerText = `$${price}`
}
