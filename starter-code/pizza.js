// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {

    var $greenPepper = $('.green-pepper');
    var $mushroom = $('.mushroom');
    var $pep = $('.pep');


    $('.btn-green-peppers').on('click', greenPepper);
    $('.btn-mushrooms').on('click', mushrooms);
    $('.btn-pepperonni').on('click', pepperonni);



    function greenPepper() {
        $('.green-pepper').toggle();
    }
    function mushrooms() {
        $('.mushroom').toggle();
    }

    function pepperonni() {
        $('.pep').toggle();
    }

    $('.btn-sauce').on('click', whiteSauce);
    
    
    function whiteSauce() {
        var sauceName = $('.btn-sauce').text();
        
        if (sauceName === 'White sauce') {
            $('.sauce').removeClass('sauce-white')
            $('.btn-sauce').text('Regular sauce')
        }
        else {
            $('.sauce').addClass('sauce-white')
            $('.btn-sauce').text('White sauce')
            
        }
        

        
     }

    function crustFunction() {
        var crustName = $('.btn-crust').text();

        if (crustName === 'Gluten-free crust') {
            $('.crust').removeClass('crust-gluten-free')
            $('.btn-crust').text('Crust')
        }

        else {
            $('.crust').addClass('crust-gluten-free')
            $('.btn-crust').text('Gluten-free crust')
        }

    }

    $('.btn-crust').on('click', crustFunction);

});