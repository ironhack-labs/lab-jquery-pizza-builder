// Write your Pizza Builder JavaScript in this file.

// Initial Setup

let value = 13;
$(".price strong").text(`$${value}`);

$('.sauce').removeClass("sauce-white");
$(".btn-sauce").removeClass("active");

$('.crust').removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");

$("aside li:nth-child(4), aside li:last-child").hide();

function chooseTopping(button, ingredient, cost, list) {
    $(ingredient).toggleClass("invisible");
    if ($(ingredient).hasClass("invisible")) {
        $(button).removeClass("active");
        $(`aside li:nth-child(${list})`).hide();
        value -= cost;
        
    }
    else {
        $(button).addClass("active");
        $(`aside li:nth-child(${list})`).show();
        value += cost;
    }
    $(".price strong").text(`$${value}`);
}

function chooseExtras(type, button, ingredient, cost, list) {
    $(type).toggleClass(ingredient);
    if ($(type).hasClass(ingredient)) {
        $(button).addClass("active");
        $(`aside li:nth-child(${list})`).show();
        value += cost;
    } else {
        $(button).removeClass("active");
        $(`aside li:nth-child(${list})`).hide();
        value -= cost;
    }
    $(".price strong").text(`$${value}`);
}



function showPep() {
    chooseTopping(".btn-pepperonni", ".pep", 1, 1);
}
function showMush() {
    chooseTopping(".btn-mushrooms", ".mushroom", 1, 2);
}
function showGreen() {
    chooseTopping(".btn-green-peppers", ".green-pepper", 1, 3);
}
function showWhite() {
    chooseExtras(".sauce", ".btn-sauce", "sauce-white", 3, 4);
    
}
function showGluten() {
    chooseExtras(".crust", ".btn-crust", "crust-gluten-free", 5, 5);
}

$(".btn-pepperonni").click(function () {
    showPep();
});
$(".btn-mushrooms").click(function () {
    showMush();
});
$(".btn-green-peppers").click(function () {
    showGreen();
});
$(".btn-sauce").click(function () {
    showWhite();
});
$(".btn-crust").click(function () {
    showGluten();
});


