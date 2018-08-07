// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
    $(this).toggleClass('active');
    $('.bill-item-pepperonni').toggleClass('bill-item-hidden');
});
$('.btn-mushrooms').on('click', function() {
    $('.mushroom').toggle('true');
    $(this).toggleClass('active');
    $('.bill-item-mushrooms').toggleClass('bill-item-hidden');
});
$('.btn-green-peppers').on('click', function() {
    $('.green-pepper').toggle();
    $(this).toggleClass('active');
    $('.bill-item-peppers').toggleClass('bill-item-hidden');
});
$('.btn-crust').on('click', function() {
    $('.crust').toggleClass('crust-gluten-free');
    $(this).toggleClass('active');
    $('.bill-item-crust').toggleClass('bill-item-hidden');
});
$('.btn-sauce').on('click', function() {
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass('active');
    $('.bill-item-sauce').toggleClass('bill-item-hidden');
});

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

$('.btn-crust').click(function() {
    // below should remove / add crust topping on the pizza
    $('#pizza').toggleClass('.has-crust');

    // change my current state in the toppings object above
    myPizza.crust.active = !myPizza.crust.active;

    // print the price on the screen
    printPrice();
});

$('.btn-sauce').click(function() {
    $('#pizza').toggleClass('.has-crust');
    myPizza.sauce.active = !myPizza.sauce.active;
    printPrice();
});

$('.btn-mushrooms').click(function() {
    $('#pizza').toggleClass('.has-crust');
    myPizza.mushrooms.active = !myPizza.mushrooms.active;
    printPrice();
});

$('.btn-green-peppers').click(function() {
    $('#pizza').toggleClass('.has-crust');
    myPizza.peppers.active = !myPizza.peppers.active;
    printPrice();
});

$('.btn-pepperonni').click(function() {
    $('#pizza').toggleClass('.has-crust');
    myPizza.pepperonni.active = !myPizza.pepperonni.active;
    printPrice();
});

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

    // sum up the prices
    var totalPrice = priceArray.reduce(function(acc, el) {
        return acc + el;
    }, 0);

    // finally set the price to the span
    $('.price-amount').text('$' + totalPrice);
}
