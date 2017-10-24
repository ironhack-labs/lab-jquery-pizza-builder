// Write your Pizza Builder JavaScript in this file.
function init() {

    var peps = $('.pep');
    var mushrooms = $('.mushroom');
    var greenPeppers = $('.green-pepper');

    $('.btn-pepperonni').click(function(event) {
        peps.toggle();
    });

    $('.btn-mushrooms').click(function(event) {
        mushrooms.toggle();
    });

    $('.btn-green-peppers').click(function(event) {
        greenPeppers.toggle();
    });


}

$(document).ready(init);
