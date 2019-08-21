//SEGUNDA ITERACIÓN: QUE SE PONGAN Y QUITEN LOS INGREDIENTES
const btnRonni = document.querySelector('.btn-pepperonni')
const allRonni = document.querySelectorAll('.pep')

btnRonni.onclick = () => {

    if (allRonni[0].style.display === 'none'){
        allRonni.forEach(pepperonni => {
            pepperonni.classList.toggle('active')
            pepperonni.style.display = '';
        })
    
        btnRonni.classList.toggle('none')
    } else {
        allRonni.forEach(pepperonni => {
            pepperonni.classList.toggle('none')
            pepperonni.style.display = 'none';
        })
    
        btnRonni.classList.toggle('active')
    }
}

const btnMush = document.querySelector('.btn-mushrooms')
const allMush = document.querySelectorAll('.mushroom')

btnMush.onclick = () => {

    if (allMush[0].style.display === 'none'){
        allMush.forEach(mushroom => {
            mushroom.classList.toggle('active')
            mushroom.style.display = '';
        })
    
        btnMush.classList.toggle('none')
    } else {
        allMush.forEach(mushroom => {
            mushroom.classList.toggle('none')
            mushroom.style.display = 'none';
        })
    
        btnMush.classList.toggle('active')
    }
}


const btnPepprs = document.querySelector('.btn-green-peppers')
const allPepprs = document.querySelectorAll('.green-pepper')


btnPepprs.onclick = () => {

    if (allPepprs[0].style.display === 'none'){
        allPepprs.forEach(peppers => {
            peppers.classList.toggle('active')
            peppers.style.display = '';
        })
    
        btnPepprs.classList.toggle('none')
    } else {
        allPepprs.forEach(peppers => {
            peppers.classList.toggle('none')
            peppers.style.display = 'none';
        })
    
        btnPepprs.classList.toggle('active')
    }
}

//FIN DE LA PRIMERA ITERACIÓN
//SEGUNDA ITERACIÓN: HACER QUE EL CRUST NORMAL Y LA SALSA ROJA SEAN LA OPCIÓN POR DEFECTO
const btnSau = document.querySelector('.btn-sauce')
const allSau = document.querySelectorAll('.sauce')

btnSau.onclick = () => {

    if(allSau.className === 'sauce sauce-white'){
        allSau.className -= 'sauce-white'
    } else {
        allSau.className += 'sauce-white'
    }
}

const btnCrust = document.querySelector('.btn-crust')
const allCrust = document.querySelectorAll('.crust')



// JUST IN CASE THIS BECOMES HANDY
// btnRonni.onclick = () => {
//     allRonni.forEach(pepperonni => {
//         pepperonni.classList.toggle('hide')
//         pepperonni.style.display = 'none';
//     })

//     btnRonni.classList.toggle('active')
// }