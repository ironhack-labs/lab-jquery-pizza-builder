// Write your Pizza Builder JavaScript in this file.
const btnPep = document.querySelector('.btn-pepperonni')
const btnMush = document.querySelector('.btn-mushrooms')
const btnGreen = document.querySelector('.btn-green-peppers')
const btnSauce = document.querySelector('.btn-sauce')
const btnCrust = document.querySelector('.btn-crust')



const listElements = document.querySelector('.price>ul').children;

const crust = document.querySelector('.crust');
const sauce = document.querySelector('.sauce');
crust.className = 'crust';
sauce.className = 'sauce';

btnPep.onclick = () =>{ 
const pepElem = document.getElementsByClassName('pep')
if(pepElem[0].style.display === 'none'){
btnPep.className = 'btn btn-pepperonni active';
[...pepElem].forEach(pepperonni => {
    pepperonni.style.display = '';
});
}
else {
btnPep.className = 'btn btn-pepperonni';
[...pepElem].forEach(pepperonni=>{
    pepperonni.style.display = 'none'
    elementsCount()
})
}
}

btnMush.onclick = () =>{ 
    const mushElem = document.getElementsByClassName('mushroom')
    if(mushElem[0].style.display === 'none'){
    btnMush.className = 'btn btn-mushrooms active';
    [...mushElem].forEach(mushroom => {
        mushroom.style.display = '';
    });
    }
    else {
    btnMush.className = 'btn btn-mushrooms';
    [...mushElem].forEach(mushroom=>{
        mushroom.style.display = 'none'
    })
    }
    }

    btnGreen.onclick = () =>{ 
        const greenElem = document.getElementsByClassName('green-pepper')
        if(greenElem[0].style.display === 'none'){
        btnGreen.className = 'btn btn-green-peppers active';
        [...greenElem].forEach(greenpepper => {
            greenpepper.style.display = '';
        });
        }
        else {
        greenElem.className = 'btn btn-green-peppers';
        [...greenElem].forEach(greenpepper=>{
            greenpepper.style.display = 'none'
        })
        }
        }

    btnCrust.onclick =()=>{
        if(crust.className === 'crust'){
            btnCrust.className = 'btn btn-crust active'
            crust.className = 'crust crust-gluten-free'
            crust.style.display = ''

        }
        else{
            btnCrust.className = 'btn btn-crust'
            crust.className = 'crust'
            crust.style.display = ''
        }
    }

    btnSauce.onclick =()=>{
        if(sauce.className === 'sauce'){
            btnSauce.className = 'btn btn-sauce active'
            sauce.className = 'sauce sauce-white'
            sauce.style.display = ''
        }
        else{
            btnSauce.className = 'btn btn-sauce'
            sauce.className = 'sauce'
            sauce.style.display = ''
        }
    }

    totalPrice = () => {

    }
    elementsCount = () => {
        if (btnPep.className = 'btn btn-pepperonni'){
            listElements[0].innerHTML = ' '
        }

        if (btnMush.className = 'btn btn-mushrooms'){
            listElements[1].innerHTML = ' '
        }

        if (btnGreen.className = 'btn btn-green-pepper'){
            listElements[2].innerHTML = ' '
        }
    }

