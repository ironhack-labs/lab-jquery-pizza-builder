var myPizza = {
  base: {
    price: 10,
    active: true
  },
  pepperonni: {
    price: 1,
    active: true
  },
  mushrooms: {
    price: 1,
    active: true
  },
  peppers: {
    price: 1,
    active: true
  },
  sauce: {
    price: 3,
    active: false
  },
  crust: {
    price: 5,
    active: false
  }
};

// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  //Iteration 1

  var greenPeppers = $('.green-pepper');

  $('.btn-green-peppers').click(function() {
    greenPeppers.toggle('true');
    $('.btn-green-peppers').toggleClass('active');
    $('body > aside > ul > li:nth-child(3)').toggle('false');
    myPizza.peppers.active = !myPizza.peppers.active;
    printPrice();
  });

  var mushrooms = $('.mushroom');
  $('.btn-mushrooms').click(function() {
    mushrooms.toggle('true');
    $('.btn-mushrooms').toggleClass('active');
    $('body > aside > ul > li:nth-child(2)').toggle('false');
    myPizza.mushrooms.active = !myPizza.mushrooms.active;
    printPrice();
  });

  var pepperonni = $('.pep');
  $('.btn-pepperonni').click(function() {
    pepperonni.toggle('true');
    $('.btn-pepperonni').toggleClass('active');
    $('body > aside > ul > li:nth-child(1)').toggle('false');
    myPizza.pepperonni.active = !myPizza.pepperonni.active;
    printPrice();
  });

  //Iteration 2
  var glutenFreeCrust = $('.crust-gluten-free');

  $('.crust').removeClass('crust-gluten-free');
  $('.btn-crust').removeClass('active');
  $('body > aside > ul > li:nth-child(5)').hide();
  printPrice();

  $('.btn-crust').click(function() {
    glutenFreeCrust.toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('body > aside > ul > li:nth-child(5)').toggle('true');
    myPizza.crust.active = !myPizza.crust.active;
    printPrice();
  });

  var whiteSauce = $('.sauce-white');

  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').removeClass('active');
  $('body > aside > ul > li:nth-child(4)').hide();

  $('.btn-sauce').click(function() {
    whiteSauce.toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('body > aside > ul > li:nth-child(4)').toggle('true');
    myPizza.sauce.active = !myPizza.sauce.active;
    printPrice();
  });

  //Iteration 3
  //done in initial function

  //Iteration 4
  //done in initual functions

  //Initial 5

  //var printedPrice = $('body > aside > strong');

  //   function updatePrice() {
  //     $('body > aside > strong').innerHTML = printPrice();
  //   };

  //   function printPrice() {
  //     $('body > aside > strong').text('$25');
  //   };

  //   toppings.filter

  function printPrice() {
    // convert toppings (pizza) object into an array
    var toppingsArray = Object.values(myPizza);

    // filter out all inactive (active === false) toppings
    var activeToppings = toppingsArray.filter(function(element) {
      return element.active;
    });

    // just get the prices
    var priceArray = activeToppings.map(function(element) {
      return element.price;
    });

    // sum up the prices
    var totalPrice = priceArray.reduce(function(acc, element) {
      return acc + element;
    }, 0);

    console.log(totalPrice);
    // finally set the price to the span
    $('.price-amount').text('$ ' + totalPrice);
  }

  //expedition with price adjustment using array
  // var prices = $('.panel.price ul');
  // var priceArray = Array.from(prices.children());
  // console.log(typeof prices.children());
  // var totalPrice = 0;
  // var pricesArray = priceArray.map(function(price) {
  //   return parseInt(price.innerHTML[1]);
  // });
  // console.log(pricesArray);
});
