// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('.crust').removeClass('crust-gluten-free');
    $('.panel.price li:contains(crust)').hide();
    $('.btn-crust').removeClass('active');
    $('.sauce').removeClass('sauce-white');
    $('.panel.price li:contains(sauce)').hide();
    $('.btn-sauce').removeClass('active');

    let ingredients = [
        {
            className: 'pepperonni', 
            price: 1, name:'pepperonni', 
            type:'topping'
        },
        {
            className: 'mushroom', 
            price: 1, 
            name:'mushrooms', 
            type:'topping'
        },
        {
            className: 'green-pepper', 
            price: 1, 
            name: 'green peppers', 
            type:'topping'
        },
        {
            className: 'sauce-white', 
            price: 3, 
            name:'white sauce', 
            type:'main', 
            og:'sauce'
        },
        {
            className: 'crust-gluten-free', 
            price: 5, 
            name:'gluten-free crust', 
            type:'main', 
            og:'crust'
        },
    ];

    var totalPrice = 10;

        for (let i = 0; i < ingredients.length; i++) {
            let ingName = ingredients[i].className;

            if ($(`.${ingName}`).is(':visible')) {
                totalPrice += ingredients[i].price;
                console.log(totalPrice);
            }
        }

    $('strong').text(`$${totalPrice}`);

    let toppingClicker = function (ingridient) {
        let b = $(`.btn-${ingridient.className}`).click(() => {
            if ($(`.btn-${ingridient.className}`).hasClass('active')) {
                totalPrice -= ingridient.price;
                $(`.panel.price li:contains(${ingridient.name})`).hide();
            } else {
                $(`.panel.price li:contains(${ingridient.name})`).show();
                totalPrice += ingridient.price;
            }
            $('strong').text(`$${totalPrice}`);
            $(`.btn-${ingridient.className}`).toggleClass('active');
            $(`.${ingridient.className}`).toggle();
        });

        return b;
    }

    let mainClicker = function (ingridient) {
        let b = $(`.btn-${ingridient.og}`).click(() => {
            if ($(`.btn-${ingridient.og}`).hasClass("active")) {
                totalPrice -= ingridient.price;
                $(`.panel.price li:contains(${ingridient.name})`).hide();
            } else {
                $(`.panel.price li:contains(${ingridient.name})`).show();
                totalPrice += ingridient.price;
            }
            $("strong").text(`$${totalPrice}`);
            $(`.btn-${ingridient.og}`).toggleClass("active");
            $(`.${ingridient.og}`).toggleClass(`${ingridient.className}`);
        });

        return b;
    }

    let clickers = ingredients.map(ing => {
        if(ing.type == 'topping'){
            return toppingClicker(ing)
        } else if(ing.type == 'main') {
            return mainClicker(ing);
        }
    });
    
})