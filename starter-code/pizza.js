// Write your Pizza Builder JavaScript in this file.
const pepBtn = document.querySelector('.btn-pepperonni')
const pepperoni = document.querySelectorAll('.pep')
const mushBtn = document.querySelector ('.btn-mushrooms')
const mushroom = document.querySelectorAll ('.mushroom')
const greenBtn = document.querySelector ('.btn-green-peppers')
const greenPeppers = document.querySelectorAll('.green-pepper')
const crustBtn = document.querySelector('.btn-crust')
const glutenFree = document.querySelector('.crust')
const btns = document.querySelectorAll('.btn')
const sauceBtn = document.querySelector ('.btn-sauce')
const regularSauce = document.querySelector('.sauce')
const saucePrice = document.querySelector('.saucePrice')
const crustPrice = document.querySelector('.crustPrice')
const pepPrice = document.querySelector('.pepPrice')


pepBtn.onclick = (e) => {
  for(let i = 0; i<pepperoni.length; i++){
    if(pepperoni[i].style.display === ""){
    pepperoni[i].style.display = 'none'
    pepBtn.classList.remove ('active')
    } else {
      pepperoni[i].style.display = ''
      pepBtn.classList.add('active')
    }
  }
  
}

// if (pepperoni[1].style.display = 'none'){
//   pepBtn.classList.remove ('active')
// }

mushBtn.onclick = (e) => {
  for (let i = 0; i < mushroom.length; i++){
    if(mushroom[i].style.display === ""){
      mushroom[i].style.display = 'none'
      mushBtn.classList.remove ('active')
    } else {
      mushroom[i].style.display = ''
      mushBtn.classList.add ('active')
    }
  }
}


greenBtn.onclick = (e) => {
  for (let i = 0; i < greenPeppers.length; i++){
    if(greenPeppers[i].style.display === ""){
      greenPeppers[i].style.display = 'none'
      greenBtn.classList.remove ('active')
    } else {
      greenPeppers[i].style.display = ''
      greenBtn.classList.add ('active')
    }
  }
}

glutenFree.classList.remove ('crust-gluten-free')
crustBtn.classList.remove('active')
crustPrice.style.display = 'none'
  crustBtn.onclick = () => {
    glutenFree.classList.toggle('crust-gluten-free')
    crustBtn.classList.toggle('active')
    
  }

regularSauce.classList.remove ('sauce-white')
sauceBtn.classList.remove('active')
saucePrice.style.display= 'none'
sauceBtn.onclick = () => {
  regularSauce.classList.toggle ('sauce-white')
  sauceBtn.classList.toggle ('active')
  
}



