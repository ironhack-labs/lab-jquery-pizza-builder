// Write your Pizza Builder JavaScript in this file.
const btnPepperoni = document.querySelector('.btn-pepperonni');
const btnMushrooms = document.querySelector('.btn-mushrooms');
const btnGreenpeppers = document.querySelector('.btn-green-peppers');
const btnSauce = document.querySelector('.btn-sauce');
const btnCrust = document.querySelector('.btn-crust');

const crust = document.querySelector('.crust');
const sauce = document.querySelector('.sauce');
crust.className = 'crust';
sauce.className = 'sauce';
btnCrust.className = 'btn btn-crust';
btnSauce.className = 'btn btn-sauce';

const listElements = document.querySelector('.price>ul').children;
listElements[3].style.display = 'none';
listElements[4].style.display = 'none';

const price = document.querySelector('.price>strong');

btnPepperoni.onclick = () => {
  const pepperoniElements = document.getElementsByClassName('pep');
  if (pepperoniElements[0].style.display === 'none') {
    listElements[0].style.display = '';
    btnPepperoni.className = 'btn btn-pepperonni active';
    [...pepperoniElements].forEach(pepperoni => {
      pepperoni.style.display = '';
    });
  } else {
    listElements[0].style.display = 'none';
    btnPepperoni.className = 'btn btn-pepperonni';
    [...pepperoniElements].forEach(pepperoni => {
      pepperoni.style.display = 'none';
    });
  }
  calculatePrice();
};

btnMushrooms.onclick = () => {
  const mushroomsElements = document.getElementsByClassName('mushroom');
  if (mushroomsElements[0].style.display === 'none') {
    listElements[1].style.display = '';
    btnMushrooms.className = 'btn btn-mushrooms active';
    [...mushroomsElements].forEach(mushroom => {
      mushroom.style.display = '';
    });
  } else {
    btnMushrooms.className = 'btn btn-mushrooms';
    listElements[1].style.display = 'none';
    [...mushroomsElements].forEach(mushroom => {
      mushroom.style.display = 'none';
    });
  }
  calculatePrice();
};

btnGreenpeppers.onclick = () => {
  const greenpeppersElements = document.getElementsByClassName('green-pepper');
  if (greenpeppersElements[0].style.display === 'none') {
    listElements[2].style.display = '';
    btnGreenpeppers.className = 'btn btn-green-peppers active';
    [...greenpeppersElements].forEach(pepper => {
      pepper.style.display = '';
    });
  } else {
    btnGreenpeppers.className = 'btn btn-green-peppers';
    listElements[2].style.display = 'none';
    [...greenpeppersElements].forEach(pepper => {
      pepper.style.display = 'none';
    });
  }
  calculatePrice();
};

btnCrust.onclick = () => {
  if (crust.className === 'crust') {
    btnCrust.className = 'btn btn-crust active';
    listElements[4].style.display = '';
    crust.className = 'crust crust-gluten-free';
  } else {
    listElements[4].style.display = 'none';
    btnCrust.className = 'btn btn-crust';
    crust.className = 'crust';
  }
  calculatePrice();
};

btnSauce.onclick = () => {
  if (sauce.className === 'sauce') {
    btnSauce.className = 'btn btn-sauce active';
    listElements[3].style.display = '';
    sauce.className = 'sauce sauce-white';
  } else {
    listElements[3].style.display = 'none';
    btnSauce.className = 'btn btn-sauce';
    sauce.className = 'sauce';
  }
  calculatePrice();
};

function calculatePrice() {
  price.innerHTML =
    [...listElements]
      .map(li => {
        if (li.style.display === 'none') return 0;
        return parseInt(li.innerHTML.match(/[0-9]/).join(''));
      })
      .reduce((accum, currentPrice) => accum + currentPrice) + 10;
}

calculatePrice();
