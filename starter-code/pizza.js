// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    var price
    $('.btn-green-peppers').on('click', function() {
        $('.green-pepper').toggle();
        $('.btn-green-peppers').toggleClass('active')
        $('aside li:contains("green peppers")').toggle()

        if ($('.btn-green-peppers').hasClass('active') === false) {
            price = Number($('aside strong').text().substr(1)) - Number($('aside li:contains("green peppers")').text().substr(1).split(' ')[0])
        } else {
            price = Number($('aside strong').text().substr(1)) + Number($('aside li:contains("green peppers")').text().substr(1).split(' ')[0])
        }

        $('aside strong').text("$" + price)
    })

    $('.btn-mushrooms').on('click', function() {
        $('.mushroom').toggle()
        $('.btn-mushrooms').toggleClass('active')
        $('aside li:contains("mushrooms")').toggle()
        if ($('.btn-mushrooms').hasClass('active') === false) {
            price = Number($('aside strong').text().substr(1)) - Number($('aside li:contains("mushrooms")').text().substr(1).split(' ')[0])
        } else {
            price = Number($('aside strong').text().substr(1)) + Number($('aside li:contains("mushrooms")').text().substr(1).split(' ')[0])
        }
        $('aside strong').text("$" + price)
    })

    $('.btn-pepperonni').on('click', function() {
        $('.pep').toggle()
        $('.btn-pepperonni').toggleClass('active')
        $('aside li:contains("pepperonni")').toggle()
        if ($('.btn-pepperonni').hasClass('active') === false) {
            price = Number($('aside strong').text().substr(1)) - Number($('aside li:contains("pepperonni")').text().substr(1).split(' ')[0])
        } else {
            price = Number($('aside strong').text().substr(1)) + Number($('aside li:contains("pepperonni")').text().substr(1).split(' ')[0])
        }
        $('aside strong').text("$" + price)
    })

    $('.btn-sauce').on('click', function() {
        $('.sauce').toggleClass('sauce-white')
        $('.btn-sauce').toggleClass('active')
        $('aside li:contains("sauce")').toggle()
        if ($('.btn-sauce').hasClass('active') === false) {
            price = Number($('aside strong').text().substr(1)) - Number($('aside li:contains("sauce")').text().substr(1).split(' ')[0])
        } else {
            price = Number($('aside strong').text().substr(1)) + Number($('aside li:contains("sauce")').text().substr(1).split(' ')[0])
        }
        $('aside strong').text("$" + price)
    })

    $('.btn-crust').on('click', function() {
        $('.crust').toggleClass('crust-gluten-free')
        $('.btn-crust').toggleClass('active')
        $('aside li:contains("crust")').toggle()
        if ($('.btn-crust').hasClass('active') === false) {
            price = Number($('aside strong').text().substr(1)) - Number($('aside li:contains("crust")').text().substr(1).split(' ')[0])
        } else {
            price = Number($('aside strong').text().substr(1)) + Number($('aside li:contains("crust")').text().substr(1).split(' ')[0])
        }
        $('aside strong').text("$" + price)
    })


});

$(window).on("load", function() {
    // var greenPeperspActive = $('.btn-green-peppers').hasClass('click', function() {
    //     $('.green-pepper').toggleClass('active');
    // })
})