// Write your Pizza Builder JavaScript in this file.
let peperoni = document.querySelector('.btn-pepperonni')
let mushroom = document.querySelector('.btn-mushrooms')
let greenpepper = document.querySelector('.btn-green-peppers')
let addpep = document.querySelectorAll('.pep')
let addgreenpep = document.querySelectorAll('.green-pepper')
let addmushroom = document.querySelectorAll('.mushroom')
let sauce = document.querySelector('.btn-sauce')
let crust = document.querySelector('.btn-crust')
let addwhite = document.querySelector('.sauce-white')
let addcrust = document.querySelector('.crust-gluten-free')
let preciopep = document.querySelector('.price li:nth-child(1)')
let preciomush = document.querySelector('.price li:nth-child(2)')
let preciopeper = document.querySelector('.price li:nth-child(3)')
let preciosauce = document.querySelector('.price li:nth-child(4)')
let preciocrust = document.querySelector('.price li:nth-child(5)')
let total = document.getElementsByTagName("strong")[0]
let costo = 21


peperoni.onclick = e => {
  peperoni.classList.toggle("active")
  addpep.forEach(el=>{
    if(el.style.display === 'none'){
      el.style.display = ''
    }
    else {
      el.style.display = 'none'
    }
  })
    if (preciopep.style.display === 'none'){
    preciopep.style.display = 'list-item'
    costo += 1
    }
    else{
    preciopep.style.display = 'none' 
    costo = costo - 1
    }
    total.innerHTML =  `$${costo}`
} 

mushroom.onclick = e2 => {
  mushroom.classList.toggle("active")
  addmushroom.forEach(el2=>{
    if(el2.style.display === 'none'){
      el2.style.display = ''
    } 
    else {
      el2.style.display = 'none'
    }
  })
    if (preciomush.style.display === 'none'){
    preciomush.style.display = 'list-item'
    costo = costo + 1
    }
    else{
    preciomush.style.display = 'none' 
    costo = costo - 1
    }
    total.innerHTML =  `$${costo}`
}

greenpepper.onclick = e => {
  greenpepper.classList.toggle("active")
  addgreenpep.forEach(el=>{
    if(el.style.display === 'none'){
      el.style.display = ''
    } 
    else {
      el.style.display = 'none'
    }
  })
    if(preciopeper.style.display === 'none'){
    preciopeper.style.display = 'list-item'
    costo = costo + 1
    }
    else{
    preciopeper.style.display = 'none' 
    costo = costo - 1
    }
    total.innerHTML =  `$${costo}`
}

sauce.onclick = e => {
  sauce.classList.toggle("active")
  addwhite.classList.toggle("sauce-white")
  if(preciosauce.style.display === 'none'){
    preciosauce.style.display = 'list-item'
    costo = costo + 3
    }
  else{
    preciosauce.style.display = 'none' 
    costo = costo - 3
    }
    total.innerHTML =  `$${costo}`
}

crust.onclick = e => {
  crust.classList.toggle("active")
  addcrust.classList.toggle("crust-gluten-free")
  if(preciocrust.style.display === 'none'){
    preciocrust.style.display = 'list-item'
    costo = costo + 5
    }
  else{
    preciocrust.style.display = 'none' 
    costo = costo - 5
    }
    total.innerHTML =  `$${costo}`
}






 


