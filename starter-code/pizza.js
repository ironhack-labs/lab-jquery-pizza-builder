// Write your Pizza Builder JavaScript in this file.
const btnPepperonniElement = document.querySelector('btn-pepperonni')
const btnMushroomsElement = document.querySelector('btn-mushrooms')
const btnGreenPeppersElement = document.querySelector('btn-green-peppers')
const btnWhiteSauceElement = document.querySelector('btn-white-sauce')
const btnGlutenFreeCrustElement = document.querySelector('btn-gluten-free-crust')

btnPepperonniElement.addEventListener = () => {
  const pepperonnies = document.getElementByClassName('pep')
  if (btnPepperonniElement).className.contains('active') {
    [...pepperonnies].forEach(current => {
      current.style.display = 'none'
    })
    btnPepperonniElement.className = 'btn btn-pepperonni'
  }
  else
    [...pepperonnies].forEach(current => {
      current.style.display = ''
    })
  btnPepperonniElement.className = 'btn btn-pepperonni active'
}

btnMushroomsElement.addEventListener = () => {
    <
    const mushrooms = document.getElementByClassName('mushroom')
    if (btnMushroomsElement).className.contains('active') {
      [...mushrooms].forEach(current => {
        current.style.display = 'none'
      })
      btnMushroomsElement.className = 'btn btn-mushrooms'
    }
    else {
      [...mushrooms].forEach(current => {
        current.style.display = ''
      })
      btnMushroomsElement.className = 'btn btn-mushrooms active'
    }

    btnGreenPeppersElement.addEventListener = () => {
      const greenPeppers = document.getElementByClassName('green-pepper')
      if (btnGreenPeppersElement).className.contains('active') {
        [...greenPeppers].forEach(current => {
          current.style.display = 'none'
        })
        btnGreenPeppersElement.className = 'btn btn-green-peppers'
      }
      else
        [...greenPeppers].forEach(current => {
          current.style.display = ''
        })
      btnGreenPeppersElement.className = 'btn btn-pepperonni active'
    }