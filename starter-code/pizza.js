// Write your Pizza Builder JavaScript in this file.

// Iteration 1: Add and remove toppings
$ (".btn-pepperonni").click(function () {
    $(".pep").toggle();
});

$ (".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
});

$ (".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
});

//Iteration 2: Sauce and crust options

$ (".btn-sauce").click(function () {
    $(".sauce").toggle();
});

$ (".btn-crust").click(function () {
    $(".crust").toggle();
});


//Iteration 3: Change the buttons' state

$ (".btn-pepperonni").click(function () {
    $(".btn-pepperonni").toggleClass("active");
});

$ (".btn-green-peppers").click(function () {
    $(".btn-green-peppers").toggleClass("active");
});

$ (".btn-mushrooms").click(function () {
    $(".btn-mushrooms").toggleClass("active");
});


//$(document).ready(function())