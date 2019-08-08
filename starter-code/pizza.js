// Write your Pizza Builder JavaScript in this file.
let pepperonis = $(".pep");
let greenPeppers = $(".green-pepper");
let mushrooms = $(".mushroom");
let sauce = $(".sauce");
let crust = $(".crust");
let buttons = $(".btn");

console.log(pepperonis, greenPeppers, mushrooms, sauce, crust, buttons);

function toggleIngredients(e) {
  let btnClasses = this.classList;
  let ingredientType = btnClasses[1];
  console.log(ingredientType);

  switch (ingredientType) {
    case "btn-pepperonni":
      ingredientType = "pep";
      break;
    case "btn-mushrooms":
      ingredientType = "mushroom";
      break;
    case "btn-green-peppers":
      ingredientType = "green-pepper";
      break;
    case "btn-sauce":
      ingredientType = "sauce-white";
      break;
    case "btn-crust":
      ingredientType = "crust-gluten-free";
      break;
  }

  if (ingredientType === "crust-gluten-free") {
    $("#pizza")
      .children(`.crust`)
      .toggleClass(`${ingredientType}`);
  } else if (ingredientType === "sauce-white") {
    $("#pizza")
      .children(`.crust`)
      .children(`.sauce`)
      .toggleClass(`${ingredientType}`);
  } else {
    $("#pizza")
      .children(`.${ingredientType}`)
      .toggle();
  }
}

function toggleActiveClass(e) {
  let btnClasses = this.classList;
  $(`.${btnClasses[1]}`).toggleClass(`active`);
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleIngredients);
  buttons[i].addEventListener("click", toggleActiveClass);
}

/*let peps = document.getElementsByClassName("pep");
let grenPeppers = document.getElementsByClassName("green-pepper");
let shrooms = document.getElementsByClassName("mushroom");
let sauces = document.getElementsByClassName("sauce");
let crusts = document.getElementsByClassName("crust");
let buttons = document.getElementsByClassName("btn");

console.log(peps, grenPeppers, shrooms, sauces, crusts, buttons);

function toggleActiveClass() {
  
}

for ( i = 0 ; i < buttons.length ; i++ ) {
  buttons[i].addEventListener(onclick, toggleActiveClass);
}
*/
