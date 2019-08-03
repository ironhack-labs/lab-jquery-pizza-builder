let elements = {
    "pepperonni": [1, "$1 pepperonni"],
    "mushrooms": [1, "$1 mushrooms"],
    "greenPeppers": [1, "$1 green peppers"],
    "whiteSauce": [3, "$3 white sauce"],
    "glutenFree": [5, "$5 gluten-free crust"]
};

let addItemAside = (name) => {

    let father = $(".price ul");
    father.append($("<li></li>").text(elements[name][1]));
    updateValue(elements[name][0]);
}

let removeItemAside = (name) => {
    let selector = `li:contains(${elements[name][1]})`;
    let element = $(selector);
    element.remove();
    let param = -Math.abs(elements[name][0]);
    updateValue(param);
}

let updateValue = (value) => {
    let total = $(".price strong")
    let textItem = total.text();
    let numberOfTotal = Number(textItem.split("$")[1]);
    numberOfTotal += value;
    total.empty();
    total.append(`$${numberOfTotal}`);
}

function changeStatus(item, name) {

    if (item.hasClass("active")) {
        item.removeClass('active');
        removeItemAside(name);   
    } else {
        item.addClass('active');
        addItemAside(name);
    }
}



$(document).ready(() => {

    const $btnPepperonni = $('.btn-pepperonni');
    const $pepItems = $('.pep');
    const $btnMushrooms = $('.btn-mushrooms');
    const $mushroomItems = $('.mushroom');
    const $btnGreenPeppers = $('.btn-green-peppers');
    const $greenPepperItems = $('.green-pepper');

    const $btnSauce = $('.btn-sauce');
    const $sauceItems = $('.sauce');
    const $btnCrust = $('.btn-crust');
    const $crustItems = $('.crust');
     
     addItemAside("pepperonni");
     addItemAside("mushrooms");
     addItemAside("greenPeppers");
     $btnSauce.removeClass('active');
     $sauceItems.toggleClass('sauce-white');
     $btnCrust.removeClass('active');
     $crustItems.toggleClass('crust-gluten-free');



    $btnPepperonni.on('click', () => {
        $pepItems.toggle();
        changeStatus($btnPepperonni, "pepperonni");

    });

    $btnMushrooms.on('click', () => {
        $mushroomItems.toggle();
        changeStatus($btnMushrooms, "mushrooms");
    });

    $btnGreenPeppers.on('click', () => {
        $greenPepperItems.toggle();
        changeStatus($btnGreenPeppers, "greenPeppers");
    });


    $btnSauce.on('click', () => {
        $sauceItems.toggleClass('sauce-white');
        changeStatus($btnSauce, "whiteSauce");

    });
    $btnCrust.on('click', () => {
        $crustItems.toggleClass('crust-gluten-free');
        changeStatus($btnCrust, "glutenFree");
    });


});