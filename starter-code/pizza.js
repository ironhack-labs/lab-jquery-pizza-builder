// Write your Pizza Builder JavaScript in this file.

const pepperonniButton = document.querySelector('.btn-pepperonni');
const mushroomsButton = document.querySelector('.btn-mushrooms');
const greenButton = document.querySelector('.btn-green-peppers');
const sauceButton = document.querySelector('.btn-sauce');
const crustButton = document.querySelector('.btn-crust');
const pizzaPriceList = document.querySelector('.panel.price > ul');
const pizzaPriceTotal = document.querySelector('.panel.price > strong');

function pizzaPrice() {
  const pizzaPriceDetails = {
    'btn-pepperonni': { name: 'pepperonni', price: 1 },
    'btn-mushrooms': { name: 'mushrooms', price: 1 },
    'btn-green-peppers': { name: 'green peppers', price: 1 },
    'btn-sauce': { name: 'white sauce', price: 3 },
    'btn-crust': { name: 'gluten-free crust', price: 5 }
  };
  let pizzaPriceItems = '';

  const basePrice = 10;
  const extrasDOM = [...document.querySelectorAll('.btn.active')];

  const price = extrasDOM.reduce((acc, extra) => {
    const extraName = extra.classList[1];

    pizzaPriceItems += `<li>$${pizzaPriceDetails[extraName].price} ${
      pizzaPriceDetails[extraName].name
    }</li>`;

    return acc + pizzaPriceDetails[extraName].price;
  }, basePrice);

  pizzaPriceList.innerHTML = pizzaPriceItems;
  pizzaPriceTotal.innerHTML = `$${price}`;
}

function toggleButtonState(element) {
  let className = element.classList[1];
  className = `.${className}`;

  toggleClassName(className, 'active');
  pizzaPrice();
}

function toggleDisplay(className, display) {
  const toppings = [...document.querySelectorAll(className)];

  toppings.forEach(topping => {
    topping.style.display = display;
  });
}

function toggleClassName(className, classNameToggle) {
  const element = document.querySelector(className);

  element.classList.toggle(classNameToggle);
}

const toppingEvent = event => {
  const element = event.target;
  const type = [...element.classList][1].replace('btn-', '');
  let className, elements, display;

  switch (type) {
    case 'pepperonni':
      className = `.${type.substring(0, 3)}`;
      break;
    case 'mushrooms':
      className = `.${type.substring(0, type.length - 1)}`;
      break;
    case 'green-peppers':
      className = `.${type.substring(0, type.length - 1)}`;
      break;
  }

  elements = document.querySelectorAll(className);
  display =
    elements[0].style.display === '' || elements[0].style.display === 'block'
      ? 'none'
      : 'block';
  toggleDisplay(className, display);
  toggleButtonState(element);
};

const baseEvent = event => {
  const element = event.target;
  const type = [...element.classList][1].replace('btn-', '');
  let className, classNameToggle;

  switch (type) {
    case 'sauce':
      className = `.sauce`;
      classNameToggle = `sauce-white`;
      break;
    case 'crust':
      className = `.crust`;
      classNameToggle = `crust-gluten-free`;
      break;
  }

  toggleClassName(className, classNameToggle);
  toggleButtonState(element);
};

pepperonniButton.onclick = toppingEvent;
mushroomsButton.onclick = toppingEvent;
greenButton.onclick = toppingEvent;
sauceButton.onclick = baseEvent;
crustButton.onclick = baseEvent;

window.onload = function() {
  toggleClassName('.crust', 'crust-gluten-free');
  toggleButtonState(crustButton);
  toggleClassName('.sauce', 'sauce-white');
  toggleButtonState(sauceButton);
};
