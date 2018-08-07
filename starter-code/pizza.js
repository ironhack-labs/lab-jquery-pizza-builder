// Write your Pizza Builder JavaScript in this file.
var pepperonni = $(".btn-pepperonni");
var mushrooms = $(".btn-mushrooms");
var greenPeppers = $(".btn-green-peppers");
var crust = $(".btn-crust");
var sauce = $(".btn-sauce");

crust.toggleClass("active");
sauce.toggleClass("active");

$(".pep").toggle();
$(".mushroom").toggle();
$(".green-pepper").toggle();
$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");
$(".price ul li:nth-child(1)").toggle();
$(".price ul li:nth-child(2)").toggle();
$(".price ul li:nth-child(3)").toggle();
$(".price ul li:nth-child(4)").toggle();
$(".price ul li:nth-child(5)").toggle();

$(".price strong").text(10);

pepperonni.click(function() {
    pepperonni.toggleClass("active");
    $(".pep").toggle();
    $(".price ul li:nth-child(1)").toggle();
});

mushrooms.click(function() {
    mushrooms.toggleClass("active");
    $(".mushroom").toggle();
    $(".price ul li:nth-child(2)").toggle();
});

greenPeppers.click(function() {
    greenPeppers.toggleClass("active");
    $(".green-pepper").toggle();
    $(".price ul li:nth-child(3)").toggle();
});

// make regular sauce and crust default

crust.click(function() {
    crust.toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:nth-child(4)").toggle();
});

sauce.click(function() {
    sauce.toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(5)").toggle();
});

// Price Calculation in class solution

// var myPizza = {
//     base: {
//         price: 10,
//         active: true,
//     },
//     pepperonni: {
//         price: 1,
//         active: true,
//     },
//     mushrooms: {
//         price: 1,
//         active: true,
//     },
//     peppers: {
//         price: 1,
//         active: true,
//     },
//     sauce: {
//         price: 3,
//         active: false,
//     },
//     crust: {
//         price: 5,
//         active: false,
//     },
// };

// $('.btn-crust').click(function() {
//     // below should remove / add crust topping on the pizza
//     $('#pizza').toggleClass('.has-crust');

//     // change my current state in the toppings object above
//     myPizza.crust.active = !myPizza.crust.active;

//     // print the price on the screen
//     printPrice();
// });

// function printPrice() {
//     // convert toppings (pizza) object into an array
//     var toppingsArray = Object.values(myPizza);

//     // filter out all inactive (active === false) toppings
//     var activeToppings = toppingsArray.filter(function(el) {
//         return el.active;
//     });

//     // just get the prices
//     var priceArray = activeToppings.map(function(el) {
//         return el.price;
//     });

//     // sum up the prices
//     var totalPrice = priceArray.reduce(function(acc, el) {
//         return acc + el;
//     }, 0);

//     // finally set the price to the span
//     $('.price-amount').text('$ ' + totalPrice);
// }
