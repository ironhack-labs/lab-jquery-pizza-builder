// Write your Pizza Builder JavaScript in this file.
//button variables
const btn_pepperoni = document.querySelector(".btn-pepperonni");
const btn_mushrooms = document.querySelector(".btn-mushrooms");
const btn_peppers = document.querySelector(".btn-green-peppers");
const btn_whiteSauce = document.querySelector(".btn-sauce");
const btn_crust = document.querySelector(".btn-crust");

//list of elements
const peps = document.querySelectorAll(".pep");
const mush = document.querySelectorAll(".mushroom");
const allPeppers = document.querySelectorAll(".green-pepper");
const crust = document.querySelector(".crust");
const sauce = crust.childNodes[3];

//price list items
let totalPrice = 21;
const prices = document.querySelector(".price ul");
const pepPrice = prices.childNodes[1];
const mushPrice = prices.childNodes[3];
const pepperPrice = prices.childNodes[5];
const saucePrice = prices.childNodes[7];
const crustPrice = prices.childNodes[9];
const priceLocation = document.querySelector(`strong`);

console.log(crustPrice);

let pressed = true;
btn_pepperoni.onclick = e => {
  //ocultar y mostrar los pepperoni
  for (i = 0; i < peps.length; i++) {
    if (peps[i].style.backgroundColor === "transparent") {
      peps[i].style.backgroundColor = "#b3241c";
      peps[i].style.boxShadow = "inset 0 0 85px #711712";
      peps[i].style.border = "2px solid #871b15";
      btn_pepperoni.classList.add("active");
    } else {
      peps[i].style.backgroundColor = "transparent";
      peps[i].style.boxShadow = "none";
      peps[i].style.border = "none";
      btn_pepperoni.classList.remove("active");
    }
  }
  //actualizar el precio
  if (pepPrice.style.display === "none") {
    pepPrice.style.display = "list-item";
    totalPrice += 1;
  } else {
    pepPrice.style.display = "none";
    totalPrice -= 1;
  }
  priceLocation.innerText = `$ ${totalPrice}`;
};

btn_mushrooms.onclick = e => {
  for (i = 0; i < mush.length; i++) {
    if (mush[i].childNodes[1].classList[0] === "cap") {
      mush[i].childNodes[1].classList.remove("cap");
      mush[i].childNodes[3].classList.remove("stem");
      btn_mushrooms.classList.remove("active");
    } else {
      mush[i].childNodes[1].classList.add("cap");
      mush[i].childNodes[3].classList.add("stem");
      btn_mushrooms.classList.add("active");
    }
  }

  if (mushPrice.style.display === "none") {
    mushPrice.style.display = "list-item";
    totalPrice += 1;
  } else {
    mushPrice.style.display = "none";
    totalPrice -= 1;
  }
  priceLocation.innerText = `$ ${totalPrice}`;
};

btn_peppers.onclick = e => {
  for (i = 0; i < allPeppers.length; i++) {
    if (allPeppers[i].classList.contains("green-pepper")) {
      allPeppers[i].classList.remove("green-pepper");
      btn_peppers.classList.remove("active");
    } else {
      allPeppers[i].classList.add("green-pepper");
      btn_peppers.classList.add("active");
    }
  }
  if (pepperPrice.style.display === "none") {
    pepperPrice.style.display = "list-item";
    totalPrice += 1;
  } else {
    pepperPrice.style.display = "none";
    totalPrice -= 1;
  }
  priceLocation.innerText = `$ ${totalPrice}`;
};

btn_whiteSauce.onclick = e => {
  if (sauce.classList.contains("sauce-white")) {
    sauce.classList.remove("sauce-white");
    btn_whiteSauce.classList.remove("active");
  } else {
    sauce.classList.add("sauce-white");
    btn_whiteSauce.classList.add("active");
  }
  if (saucePrice.style.display === "none") {
    saucePrice.style.display = "list-item";
    totalPrice += 3;
  } else {
    saucePrice.style.display = "none";
    totalPrice -= 3;
  }
  priceLocation.innerText = `$ ${totalPrice}`;
};

btn_crust.onclick = e => {
  if (crust.classList.contains("crust-gluten-free")) {
    crust.classList.remove("crust-gluten-free");
    btn_crust.classList.remove("active");
  } else {
    crust.classList.add("crust-gluten-free");
    btn_crust.classList.add("active");
  }
  if (crustPrice.style.display === "none") {
    crustPrice.style.display = "list-item";
    totalPrice += 5;
  } else {
    crustPrice.style.display = "none";
    totalPrice -= 5;
  }
  priceLocation.innerText = `$ ${totalPrice}`;
};
