const prices = {
    "sauce-white": "$3 white sauce",
    "crust-gf": "$5 gluten-free crust",
    "pepperoni": "$1 pepperoni",
    "mushroom": "$1 mushrooms",
    "green-pepper": "$1 green peppers",
};

function toggle(name) {

    $(`.btn-${name}`).toggleClass('active');

    updateTopping(name);
    updatePrice();
}

function updateTopping(name) {

    const topping = $(`.${name}`);
    const price = $(`.price-${name}`);
    const button = $(`.btn-${name}`);
    const active = button.hasClass('active');

    if (active) {
        $('.price ul').append(`<li class="price-${name}">${prices[name]}</li>`);
    } else {
        price.detach()
    }

    switch (name) {
        case 'crust-gf':
        case 'sauce-white':
            active
                ? $('#' + name).addClass(name)
                : $('#' + name).removeClass(name);         
            break;
        default:
            active
                ? topping.show()
                : topping.hide();
            break;
    }
}

function updatePrice() {

    const toppings = $('.price ul li');
    
    let total = 10;

    for (let i = 0; i < toppings.length; i++) {
        let cost = parseInt(toppings[i].innerText.match(/[0-9]./)[0]);
        total += cost;
    }

    $('.price strong').text('$' + total);
}


window.onload = function () {

    Object.keys(prices).forEach(name => {
        updateTopping(name);
    });
 
    updatePrice();
}
