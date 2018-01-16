// Write your Pizza Builder JavaScript in this file.
$(function () {
    var totalPrice = 13;
    var pepPrice = 1;
    var mushPrice = 1;
    var greenPrice = 1;
    var saucePrice = 3;
    var crustPrice = 5;
    $('.price li:nth-child(4)').hide();
    $('.price li:nth-child(5)').hide();
    $('strong').html('');
    $('strong').html('$13');
    $('.btn-pepperonni').on('click', function (event) {
        event.preventDefault();
        $('.pep').toggle();
        $('.btn-pepperonni').toggleClass('active');
        if ($('.btn-pepperonni').hasClass('active')) {
            // $('.price ul li:first').remove();
            // $('.price ul').prepend('<li>$1 pepperonni</li>');
            $('.price ul li:nth-child(1)').toggle();
            totalPrice += pepPrice;
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);
        } else {
            totalPrice -= pepPrice;
            $('.price ul li:nth-child(1)').hide();
            
            $('.price strong').html('$' + totalPrice);
        }

    });
    $('.btn-mushrooms').on('click', function (event) {
        event.preventDefault();
        $('.mushroom').toggle();
        $('.btn-mushrooms').toggleClass('active');
        if ($('.btn-mushrooms').hasClass('active')) {
            $('.price ul li:nth-child(2)').toggle();
            totalPrice += mushPrice;
           
            $('.price strong').html('$' + totalPrice);
        } else {
            totalPrice -= mushPrice;
            $('.price ul li:nth-child(2)').hide();
            
            
            $('.price strong').html('$' + totalPrice);
        }

    });
    $('.btn-green-peppers').on('click', function (event) {
        event.preventDefault();
        $('.green-pepper').toggle();
        $('.btn-green-peppers').toggleClass('active');
        if ($('.btn-green-peppers').hasClass('active')) {
            $('.price ul li:nth-child(3)').toggle();
            totalPrice += greenPrice;
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);
        } else {
            totalPrice -= greenPrice;
            $('.price ul li:nth-child(3)').hide();
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);
        }

    });

    $('.btn-sauce').on('click', function (event) {
        event.preventDefault();
        $('.sauce').toggleClass('sauce-white');
        $('.btn-sauce').toggleClass('active');
        $('.price li:nth-child(4)').toggle();
        if ($('.btn-sauce').hasClass('active')) {
            totalPrice -= saucePrice;
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);

            
        } else {
            $('.price ul li:nth-child(4)').append();
            totalPrice += saucePrice;
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);
        }
    });

    $('.btn-crust').on('click', function (event) {
        event.preventDefault();
        $('.crust').toggleClass('crust-gluten-free');
        $('.btn-crust').toggleClass('active');
        $('.price li:nth-child(5)').toggle();
        if ($('.btn-crust').hasClass('active')) {
            totalPrice -= crustPrice;
            $('.price ul li:nth-child(5)').html('$5 gluten-free crust');
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);

           
        } else {
            $('.price ul li:nth-child(5)').append();
            totalPrice += crustPrice;
            $('.price strong').html('');
            $('.price strong').html('$' + totalPrice);
        }
    });

});