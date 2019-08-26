// BOTONES
const btnPepperonniElement = document.querySelector('.btn-pepperonni')
const btnMushroomsElement = document.querySelector('.btn-mushrooms')
const btnGreenPeppersElement = document.querySelector('.btn-green-peppers')
const btnWhiteSauceElement = document.querySelector('.btn-sauce')
const btnGlutenFreeCrustElement = document.querySelector('.btn-crust')
//INGREDIENTES
const pepperonnies = document.getElementsByClassName('pep');
const mushrooms = document.getElementsByClassName('mushroom')
const greenPeppers = document.getElementsByClassName('green-pepper')
const whiteSauce = document.querySelector('.sauce')
const glutenFreeCrust = document.querySelector('.crust')

btnPepperonniElement.onclick = () => {

  if (pepperonnies[0].style.display === 'none') {
    [...pepperonnies].forEach(current => {
      current.style.display = ''
    })
    btnPepperonniElement.className = 'btn btn-pepperonni active'
  } else {
    [...pepperonnies].forEach(current => {
      current.style.display = 'none'
    })
    pepperonnies.className = 'btn btn-pepperonni'
  }
}

btnMushroomsElement.onclick = () => {

  if (mushrooms[0].style.display === 'none') {
    [...mushrooms].forEach(current => {
      current.style.display = ''
    })
    mushrooms.className = 'btn btn-mushrooms active'
  } else {
    [...mushrooms].forEach(current => {
      current.style.display = 'none'
    })
    mushrooms.className = 'btn btn-mushrooms'
  }
}

btnGreenPeppersElement.onclick = () => {

  if (greenPeppers[0].style.display === 'none') {
    [...greenPeppers].forEach(current => {
      current.style.display = ''
    })
    greenPeppers.className = 'btn btn-green-peppers active'
  } else {
    [...greenPeppers].forEach(current => {
      current.style.display = 'none'
    })
    greenPeppers.className = 'btn btn-pepperonni'
  }
}

btnWhiteSauceElement.onclick = () => {

  if (whiteSauce.className === 'sauce') {
    btnWhiteSauceElement.className = 'btn btn-sauce active'
    whiteSauce.className = 'sauce sauce-white'
  } else {
    btnWhiteSauceElement.className = 'btn btn-sauce'
    whiteSauce.className = 'sauce'
  }
}

btnGlutenFreeCrustElement.onClick = () => {

  if (glutenFreeCrust.className === 'crust') {
    btnWhiteSauceElement.className = 'btn btn-crust active'
    glutenFreeCrust.className = 'crust crust-gluten-free'
  } else {
    btnGlutenFreeCrustElement.className = 'btn btn-crust'
    glutenFreeCrust.className = 'crust'
  }


}