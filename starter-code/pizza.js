// Write your Pizza Builder JavaScript in this file.
$(".sauce").removeClass("sauce-white")
$(".crust").removeClass("crust-gluten-free")
$(".btn").removeClass("active")

$(".price > ul > li:nth-child(1)").hide();
$(".price > ul > li:nth-child(2)").hide();
$(".price > ul > li:nth-child(3)").hide();
$(".price > ul > li:nth-child(4)").hide();
$(".price > ul > li:nth-child(5)").hide();

$(".pep").hide();
$(".mushroom").hide();
$(".green-pepper").hide();

let pep = 0;
let mush = 0;
let green = 0;
let white = 0;
let glutenFree = 0;

$(".price > strong").text("$10")


$(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price > ul > li:nth-child(1)").toggle();
    if (pep === 0) {
        pep = 1;
    } else {
        pep = 0;
    }
})

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price > ul > li:nth-child(2)").toggle();
    if (mush === 0) {
        mush = 1;
    } else {
        mush = 0;
    }
})
$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price > ul > li:nth-child(3)").toggle();
    if (green === 0) {
        green = 1;
    } else {
        green = 0;
    }
})
$(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price > ul > li:nth-child(4)").toggle();
    if (white === 0) {
        white = 3;
    } else {
        white = 0;
    }
})
$(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price > ul > li:nth-child(5)").toggle();
    if (glutenFree === 0) {
        glutenFree = 5;
    } else {
        glutenFree = 0;
    }
})

setInterval(function () {
    let sum = 10 + pep + mush + green + white + glutenFree;
    $(".price > strong").text("$" + sum);
}, 100)


