
priceText = document.getElementsByClassName("price")[0].childNodes[7].childNodes[0];
let finalPrice = parseInt(priceText.data.slice(1));

let btnPepperoni = document.getElementsByClassName('btn-pepperonni')[0]
let pepperonni = document.getElementsByClassName('pep')
let pepperonniArr = [...pepperonni]
btnPepperoni.onclick = function () {
    showPrice(btnPepperoni,1,1)
    changeStatus(btnPepperoni)
    showToppings(pepperonniArr)
   document.getElementsByClassName("price")[0].childNodes[7].innerHTML = `$ ${finalPrice}`;
}

let btnMushroom = document.getElementsByClassName('btn-mushrooms')[0]
let mushroom = document.getElementsByClassName('mushroom')
let mushroomArr = [...mushroom]
btnMushroom.onclick = function () {
    showPrice(btnMushroom,3,1)
    changeStatus(btnMushroom)
    showToppings(mushroomArr)
    document.getElementsByClassName("price")[0].childNodes[7].innerHTML = `$ ${finalPrice}`;
}

let btnGreenPepper = document.getElementsByClassName('btn-green-peppers')[0]
let greenPepper = document.getElementsByClassName('green-pepper')
let greenPepperArr = [...greenPepper]
btnGreenPepper.onclick = function () {
    showPrice(btnGreenPepper,5,1)
    changeStatus(btnGreenPepper)
    showToppings(greenPepperArr)
    document.getElementsByClassName("price")[0].childNodes[7].innerHTML = `$ ${finalPrice}`;
}

let btnSauce = document.getElementsByClassName('btn-sauce')[0]
let sauce = document.getElementsByClassName('sauce')

document.getElementsByClassName("sauce")[0].classList.toggle('sauce-white');
document.getElementsByClassName("btn-sauce")[0].classList.toggle('active');
btnSauce.onclick = function () {
    showPrice(btnSauce,7,-3)
    changeStatus(btnSauce)
    document.getElementsByClassName("sauce")[0].classList.toggle('sauce-white');
    document.getElementsByClassName("price")[0].childNodes[7].innerHTML = `$ ${finalPrice}`;
}

let btnCrust = document.getElementsByClassName('btn-crust')[0];
document.getElementsByClassName("crust")[0].classList.toggle('crust-gluten-free');
document.getElementsByClassName("btn-crust")[0].classList.toggle('active');
btnCrust.onclick = function () {
    showPrice(btnCrust,9,-5)
    changeStatus(btnCrust);
    document.getElementsByClassName("crust")[0].classList.toggle('crust-gluten-free');
    document.getElementsByClassName("price")[0].childNodes[7].innerHTML = `$ ${finalPrice}`;
}

function changeStatus(btn) {
    if (btn.classList === "active") {
        btn.classList.toggle("inactive");
        
    } else {
        btn.classList.toggle("active");
        
    }
}

function showPrice(btn,x, price) {
    if (btn.className.includes('active')) {
        document.getElementsByClassName("price")[0].childNodes[5].childNodes[x].style.display='none'
        finalPrice -=price
    } else {
        document.getElementsByClassName("price")[0].childNodes[5].childNodes[x].style.display='inherit'
        finalPrice +=price
    }
}

function showToppings(toppingsArr){
    toppingsArr.forEach(function (topping) {
        if (topping.style.display === 'none') {
            topping.style.display = 'inherit'
        } else {
            topping.style.display = 'none'
        }
    })
}