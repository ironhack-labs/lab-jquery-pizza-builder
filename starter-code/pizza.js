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

    $('.btn-pepperonni').click(function(event) {
        peps.toggle();
        $(this).toggleClass('active');
    });

    $('.btn-mushrooms').click(function(event) {
        mushrooms.toggle();
        $(this).toggleClass('active');
    });

    $('.btn-green-peppers').click(function(event) {
        greenPeppers.toggle();
        $(this).toggleClass('active');
    });

    $('.btn-sauce').click(function(event) {
        sauce.toggleClass('sauce-white');
        $(this).toggleClass('active');

    });

    $('.btn-crust').click(function(event) {
        crust.toggleClass('crust-gluten-free');
        $(this).toggleClass('active');
    });


}

$(document).ready(init);
