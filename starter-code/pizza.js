// Write your Pizza Builder JavaScript in this file.

var myPizza = {
  base: {
    price: 10,
    active: true,
  },
  pepperonni: {
    price: 1,
    active: true,
  },
  mushrooms: {
    price: 1,
    active: true,
  },
  peppers: {
    price: 1,
    active: true,
  },
  sauce: {
    price: 3,
    active: false,
  },
  crust: {
    price: 5,
    active: false,
  },
};

$(document).ready(function () {


  //ITERATION ONE

  var greenPeppersIcons = $(".green-pepper");
  var greenPepperButton = $(".btn-green-peppers")
  greenPepperButton.click(function () {
    greenPeppersIcons.toggle("true");
    greenPepperButton.toggleClass("active");
    $("body > aside > ul > li:nth-child(3)").toggle("false");

    myPizza.peppers.active = !myPizza.peppers.active;

    // print the price on the screen
    printPrice();
  })


  var mushroomIcons = $(".mushroom")
  var mushRoomButton = $(".btn-mushrooms")
  mushRoomButton.click(function () {
    mushroomIcons.toggle("true")
    mushRoomButton.toggleClass("active");
    $("body > aside > ul > li:nth-child(2)").toggle("false");
    myPizza.mushrooms.active = !myPizza.mushrooms.active;

    // print the price on the screen
    printPrice();
  })

  var pepperoniIcons = $(".pep")
  var pepperoniButton = $(".btn-pepperonni")
  pepperoniButton.click(function () {
    pepperoniIcons.toggle("true")
    pepperoniButton.toggleClass("active")
    $("body > aside > ul > li:nth-child(1)").toggle("false");
    myPizza.pepperonni.active = !myPizza.pepperonni.active;

    // print the price on the screen
    printPrice();
  })
  //console.log(pepperoni)


  //ITERATION TWO


  $("body > aside > ul > li:nth-child(5)").hide();

  var crustButton = $(".btn-crust")
  var glutenFreeCrust = $(".crust-gluten-free");
  $(".crust").removeClass('crust-gluten-free');
  crustButton.removeClass('active');  //iteration three


  crustButton.click(function () {
    glutenFreeCrust.toggleClass("crust-gluten-free")
    crustButton.toggleClass("active")
    $("body > aside > ul > li:nth-child(5)").toggle("false")
    myPizza.crust.active = !myPizza.crust.active;

    // print the price on the screen
    printPrice();

  })

  var whiteSauceButton = $(".btn-sauce")
  var whiteSauceIcon = $(".sauce-white");
  $(".sauce").removeClass('sauce-white');
  whiteSauceButton.removeClass('active'); //iteration three

  $("body > aside > ul > li:nth-child(4)").hide();

  whiteSauceButton.click(function () {
    whiteSauceIcon.toggleClass("sauce-white")
    whiteSauceButton.toggleClass("active");
    $("body > aside > ul > li:nth-child(4)").toggle("false"); //iteration 4
    myPizza.sauce.active = !myPizza.sauce.active;

    // print the price on the screen
    printPrice();
  })





  //ITERATION FIVE


  // $('.btn-crust').click(function () {
  //   // below should remove / add crust topping on the pizza
  //   $('.crust').toggleClass('crust-gluten-free');

  //   // change my current state in the toppings object above
  //   myPizza.crust.active = !myPizza.crust.active;

  //   // print the price on the screen
  //   printPrice();
  // });


  function printPrice() {
    // convert toppings (pizza) object into an array
    var toppingsArray = Object.values(myPizza);

    // filter out all inactive (active === false) toppings
    var activeToppings = toppingsArray.filter(function (el) {
      return el.active;
    });

    // just get the prices
    var priceArray = activeToppings.map(function (el) {
      return el.price;
    });

    // sum up the prices
    var totalPrice = priceArray.reduce(function (acc, el) {
      return acc + el;
    }, 0);

    console.log(activeToppings, priceArray, totalPrice)
    // finally set the price to the span
    $('body > aside > strong').text('$ ' + totalPrice);
  }

})




