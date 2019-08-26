// Write your Pizza Builder JavaScript in this file.

// Ingredients
const pepper = document.getElementsByClassName('green-pepper');
const mushroom = document.getElementsByClassName('mushroom');
const pepperonni = document.getElementsByClassName('pep');

// Buttons
const btnPeppers = document.getElementsByClassName('btn-green-peppers');
const btnMushrooms = document.getElementsByClassName('btn-mushrooms');
const btnPepperonni = document.getElementsByClassName('btn-pepperonni');
const btnWhiteSauce = document.getElementsByClassName('btn-sauce');
const btnCrust = document.getElementsByClassName('btn-crust');

// Prices
const pricePepperonni = document.getElementById('pepperonni');
const priceMushrooms = document.getElementById('mushrooms');
const priceGreenPepper = document.getElementById('green-pepper');
const priceWhite = document.getElementById('white');
const priceGlutenFree = document.getElementById('gluten-free');
const totalPrice = document.getElementById('totalPrice');
let totalAmount = 0;

// Disable Sauce & Crust options by default
window.onload = function() {
  document.getElementById('pizza-don-cangrejo').autoplay();
  btnCrust[0].classList.remove('active');
  btnWhiteSauce[0].classList.remove('active');
  priceWhite.style.display = 'none';
  priceGlutenFree.style.display = 'none';
  totalPrice.innerText = '$13';
  totalAmount = 13;
};

// Actions for buttons
btnPepperonni[0].addEventListener('click', function() {
  if (btnPepperonni[0].classList.contains('active')) {
    btnPepperonni[0].classList.remove('active');
    for (let i = 0; i < pepperonni.length; i++) {
      pepperonni[i].style.visibility = 'collapse';
    }
    pricePepperonni.style.display = 'none';
    totalAmount--;
    totalPrice.innerText = `$${totalAmount}`;
  } else {
    btnPepperonni[0].classList.add('active');
    for (let i = 0; i < pepperonni.length; i++) {
      pepperonni[i].style.visibility = 'visible';
    }
    pricePepperonni.style.display = 'list-item';
    totalAmount++;
    totalPrice.innerText = `$${totalAmount}`;
  }
});

btnPeppers[0].addEventListener('click', function() {
  if (btnPeppers[0].classList.contains('active')) {
    btnPeppers[0].classList.remove('active');
    for (let i = 0; i < pepper.length; i++) {
      pepper[i].style.visibility = 'collapse';
    }
    priceGreenPepper.style.display = 'none';
    totalAmount--;
    totalPrice.innerText = `$${totalAmount}`;
  } else {
    btnPeppers[0].classList.add('active');
    for (let i = 0; i < pepper.length; i++) {
      pepper[i].style.visibility = 'visible';
    }
    priceGreenPepper.style.display = 'list-item';
    totalAmount++;
    totalPrice.innerText = `$${totalAmount}`;
  }
});

btnMushrooms[0].addEventListener('click', function() {
  if (btnMushrooms[0].classList.contains('active')) {
    btnMushrooms[0].classList.remove('active');
    for (let i = 0; i < mushroom.length; i++) {
      mushroom[i].style.visibility = 'collapse';
    }
    priceMushrooms.style.display = 'none';
    totalAmount--;
    totalPrice.innerText = `$${totalAmount}`;
  } else {
    btnMushrooms[0].classList.add('active');
    for (let i = 0; i < mushroom.length; i++) {
      mushroom[i].style.visibility = 'visible';
    }
    priceMushrooms.style.display = 'list-item';
    totalAmount++;
    totalPrice.innerText = `$${totalAmount}`;
  }
});

btnWhiteSauce[0].addEventListener('click', function() {
  if (btnWhiteSauce[0].classList.contains('active')) {
    btnWhiteSauce[0].classList.remove('active');
    priceWhite.style.display = 'none';
    totalAmount -= 3;
    totalPrice.innerText = `$${totalAmount}`;
  } else {
    btnWhiteSauce[0].classList.add('active');
    priceWhite.style.display = 'list-item';

    totalAmount += 3;
    totalPrice.innerText = `$${totalAmount}`;
  }
});

btnCrust[0].addEventListener('click', function() {
  if (btnCrust[0].classList.contains('active')) {
    btnCrust[0].classList.remove('active');
    priceGlutenFree.style.display = 'none';
    totalAmount -= 5;
    totalPrice.innerText = `$${totalAmount}`;
  } else {
    btnCrust[0].classList.add('active');
    priceGlutenFree.style.display = 'list-item';
    totalAmount += 5;
    totalPrice.innerText = `$${totalAmount}`;
  }
});
