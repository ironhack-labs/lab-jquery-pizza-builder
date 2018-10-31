// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');
    $('.panel.price li:contains(sauce)').hide();
    $('.panel.price li:contains(crust)').hide();
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');

    let prices = [
        {name: 'pep', price: 1},
        {name: 'mushroom', price: 1},
        {name: 'green-pepper', price: 1},
        {name: 'sauce-white', price: 3},
        {name: 'crust-gluten-free', price: 5},
    ];

    var totalPrice = 10;

        for (let i = 0; i < prices.length; i++) {
            let ingName = prices[i].name;

            if ($(`.${ingName}`).is(':visible')) {
                totalPrice += prices[i].price;
                console.log(totalPrice);
            }
        }

    $('strong').text(`$${totalPrice}`);

    $('.btn-pepperonni').click(() => {
        if ($('.btn-pepperonni').hasClass('active')) {
            totalPrice -= prices[0].price;
            $('.panel.price li:contains(pepperonni)').hide();
        } else {
            $('.panel.price li:contains(pepperonni)').show();
            totalPrice += prices[0].price;
        }
        $('strong').text(`$${totalPrice}`);
        $('.btn-pepperonni').toggleClass('active');
        $('.pep').toggle();

    });

    $('.btn-mushrooms').click(() => {
        if ($('.btn-mushrooms').hasClass('active')) {
            totalPrice -= prices[1].price;
            $('.panel.price li:contains(mushrooms)').hide();
        } else {
            $('.panel.price li:contains(mushrooms)').show();
            totalPrice += prices[1].price;
        }
        $('strong').text(`$${totalPrice}`);
        $('.btn-mushrooms').toggleClass('active');
        $('.mushroom').toggle();

    });

    $('.btn-green-peppers').click(() => {
        if ($('.btn-green-peppers').hasClass('active')) {
            totalPrice -= prices[2].price;
            $('.panel.price li:contains(peppers)').hide();
        } else {
            $('.panel.price li:contains(peppers)').show();
            totalPrice += prices[2].price;
        }
        $('strong').text(`$${totalPrice}`);
        $('.btn-green-peppers').toggleClass('active');
        $('.green-pepper').toggle();

    });


    $('.btn-sauce').click(() => {
        if ($('.btn-sauce').hasClass('active')) {
            totalPrice -= prices[3].price;
            $('.panel.price li:contains(white)').hide();
        } else {
            $('.panel.price li:contains(white)').show();
            totalPrice += prices[3].price;
        }
        $('strong').text(`$${totalPrice}`);
        $('.btn-sauce').toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
    });

    $('.btn-crust').click(() => {
        if ($('.btn-crust').hasClass('active')) {
            totalPrice -= prices[4].price;
            $('.panel.price li:contains(gluten)').hide();
        } else {
            $('.panel.price li:contains(gluten)').show();
            totalPrice += prices[4].price;
        }
        $('strong').text(`$${totalPrice}`);
        $('.btn-crust').toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
    });
    
    
})