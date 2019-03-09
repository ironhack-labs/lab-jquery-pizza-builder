// Write your Pizza Builder JavaScript in this file.
// var btnPepperoni = document.getElementsByClassName('btn-pepperonni');
// var btnMushrooms = document.getElementsByClassName('btn-mushrooms');
// var btnGreenPeppers = document.getElementsByClassName('btn-green-peppers');

var btnPepperonni = document.querySelector('.btn-pepperonni');
var btnMushrooms = document.querySelector('.btn-mushrooms');
var btnGreenPeppers = document.querySelector('.btn-green-peppers');
var btnSauce = document.querySelector('.btn-sauce');
var btnCrust = document.querySelector('.btn-crust');


btnPepperonni.addEventListener('click', function() {
    var pepperonnis = document.querySelectorAll('.pep');
    pepperonnis.forEach(function(element) {
        if (element.getAttribute('style')) {
            element.removeAttribute('style');
            btnPepperonni.classList.add('active');
            document.getElementById('price-pepperonni').removeAttribute('style');
        } else {
            element.setAttribute('style', 'visibility: hidden');
            btnPepperonni.classList.remove('active');
            document.getElementById('price-pepperonni').setAttribute('style', 'display: none');
        }
    });
    updatePrice();
});

btnMushrooms.addEventListener('click', function() {
    var mushrooms = document.querySelectorAll('.green-pepper');
    mushrooms.forEach(function(element) {
        if (element.getAttribute('style')) {
            element.removeAttribute('style');
            btnMushrooms.classList.add('active');
            document.getElementById('price-mushroom').removeAttribute('style');
        } else {
            element.setAttribute('style', 'visibility: hidden');
            btnMushrooms.classList.remove('active');
            document.getElementById('price-mushroom').setAttribute('style', 'display: none');
        }
    });
    updatePrice();
});

btnGreenPeppers.addEventListener('click', function() {
    var greenPeppers = document.querySelectorAll('.mushroom');
    greenPeppers.forEach(function(element) {
        if (element.getAttribute('style')) {
            element.removeAttribute('style');
            btnGreenPeppers.classList.add('active');
            document.getElementById('price-green-peppers').removeAttribute('style');
        } else {
            element.setAttribute('style', 'visibility: hidden');
            btnGreenPeppers.classList.remove('active');
            document.getElementById('price-green-peppers').setAttribute('style', 'display: none');
        }
    });
    updatePrice();
});

btnSauce.addEventListener('click', function() {
    var sauce = document.querySelectorAll('.sauce');
    sauce.forEach(function(element) {
        if (element.classList.contains('white-sauce')) {
            element.classList.remove('white-sauce');
            btnSauce.classList.remove('active');
            document.getElementById('white-sauce').setAttribute('style', 'display: none');
        } else {
            element.classList.add('white-sauce');
            btnSauce.classList.add('active');
            document.getElementById('white-sauce').removeAttribute('style');
        }
    });
    updatePrice();
});

btnCrust.addEventListener('click', function() {
    var crust = document.querySelectorAll('.crust');
    crust.forEach(function(element) {
        if (element.classList.contains('crust-gluten-free')) {
            element.classList.remove('crust-gluten-free');
            btnCrust.classList.remove('active');
            document.getElementById('gluten-free-crust').setAttribute('style', 'display: none');
        } else {
            element.classList.add('crust-gluten-free');
            btnCrust.classList.add('active');
            document.getElementById('gluten-free-crust').removeAttribute('style');
        }
    });
    updatePrice();
});

function updatePrice() {
    var priceClass = document.querySelector('.price');
    var priceArray = priceClass.querySelectorAll('li');
    var innerText = '';
    var price = 10;

    priceArray.forEach(function(element) {
        if (element.getAttribute('style')) {
            return;
        } else {
            innerText = element.innerText;
            innerText = innerText.split(' ');
            innerText = innerText[0].split('');
            price += parseInt(innerText[1]);
        }
    });

    document.getElementById('final-price').innerText = '$' + price;
}