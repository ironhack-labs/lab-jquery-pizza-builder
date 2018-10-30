// Write your Pizza Builder JavaScript in this file.

$(function(){

    $('.btn-pepperonni').click(function() {
        $('.pep').toggle();
        });

        $('.btn-mushrooms').click(function() {
            $('.mushroom').toggle();
            });

            $('.btn-green-peppers').click(function() {
                $('.green-pepper').toggle();
                });

    $('.crust').removeClass('crust-gluten-free');

    $('.sauce').removeClass('sauce-white');

    $('.btn-crust').click(function() {
        $('.crust').toggleClass('crust-gluten-free');
    });

    $('.btn-sauce').click(function() {
        $('.sauce').toggleClass('sauce-white');
    });


});
