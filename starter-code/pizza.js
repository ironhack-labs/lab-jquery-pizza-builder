// Write your Pizza Builder JavaScript in this file.

// CALCULATE PRICE

var myPizza = {
    base: {
        price: 10,
        active: true
    },
    pepperonni: {
        price: 1,
        active: false
    },
    mushrooms: {
        price: 1,
        active: false
    },
    peppers: {
        price: 1,
        active: false
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

function printPrice() {
    // convert toppings (pizza) object into an array
    var toppingsArray = Object.values(myPizza);

    // filter out all inactive (active === false) toppings
    var activeToppings = toppingsArray.filter(function(el) {
        return el.active;
    });

    // just get the prices
    var priceArray = activeToppings.map(function(el) {
        return el.price;
    });

    console.log(priceArray);

    // sum up the prices
    var totalPrice = priceArray.reduce(function(acc, el) {
        return acc + el;
    }, 0);

    // finally set the price to the span
    $(".price-amount").text("$ " + totalPrice);
}

// ADD AND REMOVE TOPPINGS

$(".btn-pepperonni").click(function() {
    $("#pizza").toggleClass("has-pepperonni");
    $(".pep").toggleClass("peppi");
    $(".price-item-pep").toggleClass("price-item-hidden");

    myPizza.pepperonni.active = !myPizza.pepperonni.active;
    printPrice();
});

$(".btn-mushrooms").click(function() {
    $("#pizza").toggleClass("has-mushrooms");
    $(".mushroom").toggleClass("mush");
    $(".price-item-mushroom").toggleClass("price-item-hidden");

    myPizza.mushrooms.active = !myPizza.mushrooms.active;
    printPrice();
});

$(".btn-green-peppers").click(function() {
    $("#pizza").toggleClass("has-peppers");
    $(".green-pepper").toggleClass("grePep");
    $(".price-item-pepper").toggleClass("price-item-hidden");

    myPizza.peppers.active = !myPizza.peppers.active;
    printPrice();
});

// SAUCE AND CRUST
$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".price-item-sauce").toggleClass("price-item-hidden");

    myPizza.sauce.active = !myPizza.sauce.active;
    printPrice();
});

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".price-item-crust").toggleClass("price-item-hidden");

    myPizza.crust.active = !myPizza.crust.active;
    printPrice();
});

// ACTIVE STATE BTN

$(".btn").removeClass("active");

$(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
});

$(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
});

$(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
});

$(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
});
$(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
});
