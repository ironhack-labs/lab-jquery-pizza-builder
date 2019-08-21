// Write your Pizza Builder JavaScript in this file.
const pepperonni = document.querySelector('.btn-pepperonni')
const mushrooms = document.querySelector('.btn-mushrooms')
const peppers = document.querySelector('.btn-green-peppers')
const crust = document.querySelector('.btn-crust')
const sauce = document.querySelector('.btn-sauce')

pepperonni.onclick = function () {
    const pepe = document.getElementsByClassName('pep')

    if (pepe[0].style.display === 'none') {
        pepperonni.className = 'btn btn-pepperonni active';
        [...pepe].forEach(pepperoni => {
            pepperoni.style.display = ''
        })
    } else {
        pepe[0].style.display = 'none';
        pepperonni.className = 'btn btn-pepperonni';
        [...pepe].forEach(pepperoni => {
            pepperoni.style.display = 'none';
        });
    }
}



mushrooms.onclick = function () {
    const mush = document.getElementsByClassName('mushroom')

    if (mush[0].style.display === 'none') {
        mushrooms.className = 'btn btn-mushrooms active';
        [...mush].forEach(mushroom => {
            mushroom.style.display = ''
        })
    } else {
        mush[0].style.display = 'none';
        mushrooms.className = 'btn btn-mushrooms';
        [...mush].forEach(mushroom => {
            mushroom.style.display = 'none';
        });
    }
}

peppers.onclick = function () {
    const pepper = document.getElementsByClassName('green-pepper')

    if (pepper[0].style.display === 'none') {
        mushrooms.className = 'btn btn-green-peppers active';
        [...pepper].forEach(pepper => {
            pepper.style.display = ''
        })
    } else {
        pepper[0].style.display = 'none';
        mushrooms.className = 'btn btn-green-peppers';
        [...pepper].forEach(pepper => {
            pepper.style.display = 'none';
        });
    }
}

crust.onclick = function () {
    if (crust.className === 'crust') {
        crust.className = 'btn btn-crust active'
        crust.className = 'crust crust-gluten-free'
        crust.style.display = ''
    } else {
        crust.className = 'btn btn-crust'
        crust.className = 'crust'
        crust.style.display = ''
    }
}