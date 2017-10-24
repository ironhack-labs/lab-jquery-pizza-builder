// Write your Pizza Builder JavaScript in this file.
function init() {

    var peps = $('.pep');
    var mushrooms = $('.mushroom');
    var greenPeppers = $('.green-pepper');
    var sauce = $('.sauce');
    var crust = $('.crust');

    sauce.removeClass('sauce-white');
    crust.removeClass('crust-gluten-free');
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');

    $('.panel.price li:last').prev().hide();
    $('.panel.price li:last').hide();

    $('.btn-pepperonni').click(function(event) {
        peps.toggle();
        $(this).toggleClass('active');
        $('.panel.price li:first').toggle();
    });

    $('.btn-mushrooms').click(function(event) {
        mushrooms.toggle();
        $(this).toggleClass('active');
        $('.panel.price li:nth-child(2)').toggle();
    });

    $('.btn-green-peppers').click(function(event) {
        greenPeppers.toggle();
        $(this).toggleClass('active');
        $('.panel.price li:nth-child(3)').toggle();
    });

    $('.btn-sauce').click(function(event) {
        sauce.toggleClass('sauce-white');
        $(this).toggleClass('active');
        $('.panel.price li:nth-child(4)').toggle();

    });

    $('.btn-crust').click(function(event) {
        crust.toggleClass('crust-gluten-free');
        $(this).toggleClass('active');
        $('.panel.price li:nth-child(5)').toggle();
    });


}

$(document).ready(init);
