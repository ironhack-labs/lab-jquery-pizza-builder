// Write your Pizza Builder JavaScript in this file.
const pepperoni = document.querySelector(".btn-pepperonni");
const peps = document.querySelectorAll(".pep");
const mushrooms = document.querySelector(".btn-mushrooms");
const mush = document.querySelectorAll(".mushroom");
const btn_peppers = document.querySelector(".btn-green-peppers");
const allPeppers = document.querySelectorAll(".green-pepper");
const btn_whiteSauce = document.querySelector(".btn-sauce");
const btn_crust = document.querySelector(".btn-crust");
const crust = document.querySelector(".crust");
const sauce = crust.childNodes[3];

//price list items
const pepPrice = document.querySelector(".price");
console.log(pepPrice);

pepperoni.onclick = e => {
  for (i = 0; i < peps.length; i++) {
    if (peps[i].style.backgroundColor === "transparent") {
      peps[i].style.backgroundColor = "#b3241c";
      peps[i].style.boxShadow = "inset 0 0 85px #711712";
      peps[i].style.border = "2px solid #871b15";
      pepperoni.classList.add("active");
    } else {
      peps[i].style.backgroundColor = "transparent";
      peps[i].style.boxShadow = "none";
      peps[i].style.border = "none";
      pepperoni.classList.remove("active");
    }
  }
};
let isThere = true;

mushrooms.onclick = e => {
  for (i = 0; i < mush.length; i++) {
    if (mush[i].childNodes[1].classList[0] === "cap") {
      mush[i].childNodes[1].classList.remove("cap");
      mush[i].childNodes[3].classList.remove("stem");
      mushrooms.classList.remove("active");
    } else {
      mush[i].childNodes[1].classList.add("cap");
      mush[i].childNodes[3].classList.add("stem");
      mushrooms.classList.add("active");
    }
  }
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
};

btn_whiteSauce.onclick = e => {
  if (sauce.classList.contains("sauce-white")) {
    sauce.classList.remove("sauce-white");
    btn_whiteSauce.classList.remove("active");
  } else {
    sauce.classList.add("sauce-white");
    btn_whiteSauce.classList.add("active");
  }
};

btn_crust.onclick = e => {
  if (crust.classList.contains("crust-gluten-free")) {
    crust.classList.remove("crust-gluten-free");
    btn_crust.classList.remove("active");
  } else {
    crust.classList.add("crust-gluten-free");
    btn_crust.classList.add("active");
  }
};
