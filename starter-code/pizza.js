// Write your Pizza Builder JavaScript in this file.
function Pizza () {
  this.buttons = {
    pepperonni: $('.btn-pepperonni'),
    mushrooms: $('.btn-mushrooms'),
    greenPepper: $('.btn-green-peppers'),
    crust: $('.btn-crust'),
    sauce: $('.btn-sauce'),
  };
  this.ingredients = {
  pepperonni: $('.pep'),
  mushrooms: $('.mushroom'),
  greenPepper: $('.green-pepper'),
  crust: $('.crust'),
  sauce: $('.sauce'),
  };
}

Pizza.prototype.initialize = function () {
  var me = this;
  var totalPrice = 0;

  this.defaultIngredients();
  this.updatePrice();

  this.buttons.pepperonni.click(function () {
    var pepperonniPrice = $('.price ul li:first-child');

    me.toggleIngredients(me.ingredients.pepperonni, pepperonniPrice);
    me.toggleButton(me.buttons.pepperonni);
  });
  this.buttons.mushrooms.click(function () {
    var mushroomPrice = $('.price ul li:nth-child(2)');

    me.toggleIngredients(me.ingredients.mushrooms, mushroomPrice);
    me.toggleButton(me.buttons.mushrooms);
  });
  this.buttons.greenPepper.click(function () {
    var greenPepperPrice = $('.price ul li:nth-child(3)');

    me.toggleIngredients(me.ingredients.greenPepper, greenPepperPrice);
    me.toggleButton(me.buttons.greenPepper);
  });
  this.buttons.crust.click(function () {
    var crustPrice = $('.price ul li:last-child');

    crustPrice.toggle();
    me.ingredients.crust.toggleClass('crust-gluten-free');
    me.toggleButton(me.buttons.crust);
  });
  this.buttons.sauce.click(function () {
    var saucePrice = $('.price ul li:nth-last-child(2)');

    saucePrice.toggle();
    me.ingredients.sauce.toggleClass('sauce-white');
    me.toggleButton(me.buttons.sauce);
  });
}

Pizza.prototype.defaultIngredients = function () {
  crustAndSauce = $('.price ul li:nth-child(n+4)');
  this.toggleButton(this.buttons.crust);
  this.toggleButton(this.buttons.sauce);
  this.ingredients.crust.toggleClass('crust-gluten-free');
  this.ingredients.sauce.toggleClass('sauce-white');
  crustAndSauce.toggle();
}

Pizza.prototype.toggleButton = function (button) {
  button.toggleClass('active');
  this.updatePrice();
}

Pizza.prototype.toggleIngredients = function (ingredients, price) {
  ingredients.toggle();
  price.toggle();
}

Pizza.prototype.updatePrice = function () {
  var subTotal = 10;

  for (var btn in this.buttons) {
    if (this.buttons[btn].hasClass('active')) {
      switch(this.buttons[btn]) {
        case this.buttons.pepperonni:
        case this.buttons.mushrooms:
        case this.buttons.greenPepper:
          subTotal += 1;
          break;
        case this.buttons.sauce:
          subTotal += 3;
          break;
        case this.buttons.crust:
          subTotal += 5;
          break;
      }
    }
  }
  $('.price strong').text(`$${ subTotal }`);
}

$(function() {
  pizza = new Pizza;
  pizza.initialize();
});
