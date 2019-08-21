const btnPepperonni = document.querySelector('.btn-pepperonni')
const btnMushroom = document.querySelector('.btn-mushrooms')
const btnGreenPeppers = document.querySelector('.btn-green-peppers')
const btnSauce = document.querySelector('.btn-sauce')
const btnCrust = document.querySelector('.btn-crust')

const pepperonniElements = document.getElementsByClassName('pep')
const mushroomElements = document.getElementsByClassName('mushroom')
const greenPepperElements = document.getElementsByClassName('green-pepper')

const sauce = document.querySelector('.sauce')
const crust = document.querySelector('.crust')

const price = document.querySelector('.price>strong')

const listElements = document.querySelector('.price>ul').children
listElements[3].style.display = 'none'
listElements[4].style.display = 'none'

crust.className = 'crust'
sauce.className = 'sauce'

btnCrust.className = 'btn btn-crust'
btnSauce.className = 'btn btn-sauce'

btnPepperonni.onclick = () => {
    if (pepperonniElements[0].style.display === 'none') {
        btnPepperonni.className = 'btn btn-pepperonni active';
        listElements[0].style.display = '';
        [...pepperonniElements].forEach(pepperonni => {
            pepperonni.style.display = ''
        })
    } else {
        btnPepperonni.className = 'btn btn-pepperonni';
        listElements[0].style.display = 'none';
        [...pepperonniElements].forEach(pepperonni => {
            pepperonni.style.display = 'none'
        })
    }
    calcPrice()
}

btnMushroom.onclick = () => {
    if (mushroomElements[0].style.display === 'none') {
        btnMushroom.className = 'btn btn-mushrooms active';
        listElements[1].style.display = '';
        [...mushroomElements].forEach(mushroom => {
            mushroom.style.display = ''
        })
    } else {
        btnMushroom.className = 'btn btn-mushrooms';
        listElements[1].style.display = 'none';
        [...mushroomElements].forEach(mushroom => {
            mushroom.style.display = 'none'
        })
    }
    calcPrice()
}

btnGreenPeppers.onclick = () => {
    if (greenPepperElements[0].style.display === 'none') {
        btnGreenPeppers.className = 'btn btn-green-peppers active';
        listElements[2].style.display = '';
        [...greenPepperElements].forEach(greenPepper => {
            greenPepper.style.display = ''
        })
    } else {
        btnGreenPeppers.className = 'btn btn-green-peppers';
        listElements[2].style.display = 'none';
        [...greenPepperElements].forEach(greenPepper => {
            greenPepper.style.display = 'none'
        })
    }
    calcPrice()
}

btnCrust.onclick = () => {
    if (crust.className === 'crust') {
        btnCrust.className = 'btn btn-crust active';
        listElements[4].style.display = ''
        crust.className = 'crust crust-gluten-free'
    } else {
        btnCrust.className = 'btn btn-crust';
        listElements[4].style.display = 'none'
        crust.className = 'crust'
    }
    calcPrice()
}

btnSauce.onclick = () => {
    if (sauce.className === 'sauce') {
        btnSauce.className = 'btn btn-sauce active';
        listElements[3].style.display = ''
        sauce.className = 'sauce sauce-white'
    } else {
        btnSauce.className = 'btn btn-sauce';
        listElements[3].style.display = 'none'
        sauce.className = 'sauce'
    }
    calcPrice()
}

function calcPrice() {
    price.innerHTML = [...listElements]
        .map(li => {
            if (li.style.display === 'none') return 0
            return parseInt(li.innerHTML.match(/[0-9]/g).join(''))
        })
        .reduce((accum, currentPrice) => accum + currentPrice) + 10
}

calcPrice()