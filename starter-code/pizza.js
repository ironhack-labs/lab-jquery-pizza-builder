// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {


    $('.btn-pepperonni').click(function () {
        $('.pep').toggleClass("inactive active")
    })
    $('.btn-mushrooms').click(function () {
        $('.mushroom').toggleClass("inactive active")
    })
    $('.btn-green-peppers').click(function () {
        $('.green-pepper').toggleClass("inactive active")
    })

    $('.btn-sauce').click(function () {
        $('.sauce').toggleClass("sauce-white")
    })

    $('.btn-crust').click(function () {
        $('.crust').toggleClass('crust-gluten-free')
    })


});