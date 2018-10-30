// Write your Pizza Builder JavaScript in this file.

$(function () {

    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass("active");

    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass("active");

    $('.panel.price li').eq(3).toggle();
    $('.panel.price li').eq(4).toggle();

    calcPrice();

});


$('.btn-pepperonni').on("click", function () {
    $('.pep').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(0).toggle();
    calcPrice();
})

$('.btn-mushrooms').on("click", function () {
    $('.mushroom').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(1).toggle();
    calcPrice();
})

$('.btn-green-peppers').on("click", function () {
    $('.green-pepper').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(2).toggle();
    calcPrice();
})

$('.btn-sauce').on("click", function () {
    $('.sauce').toggleClass('sauce-white')
    $(this).toggleClass("active");
    $('.panel.price li').eq(3).toggle();
    calcPrice();
})

$('.btn-crust').on("click", function () {
    $('.crust').toggleClass('crust-gluten-free')
    $(this).toggleClass("active");
    $('.panel.price li').eq(4).toggle();
    calcPrice();
})


function calcPrice() {
    let total = 10;
    for (i = 0; i < $('.panel.price li:visible').length; i++) {
        total += parseInt($('.panel.price li:visible').eq(i).text().slice(1));
    }
    // console.log(total)
    $('.panel.price strong').text(`$${total}`);

};

