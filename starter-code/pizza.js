// Write your Pizza Builder JavaScript in this file.
function init() {

    var peps = $('.pep');
    var mushrooms = $('.mushroom');
    var greenPeppers = $('.green-pepper');
    var sauce = $('.sauce');
    var crust = $('.crust');

    sauce.removeClass('sauce-white');
    crust.removeClass('crust-gluten-free');

    $('.btn-pepperonni').click(function(event) {
        peps.toggle();
    });

    $('.btn-mushrooms').click(function(event) {
        mushrooms.toggle();
    });

    $('.btn-green-peppers').click(function(event) {
        greenPeppers.toggle();
    });

    $('.btn-sauce').click(function(event) {
        sauce.toggleClass('sauce-white');
    });

    $('.btn-crust').click(function(event) {
        crust.toggleClass('crust-gluten-free');
    });


}

$(document).ready(init);
