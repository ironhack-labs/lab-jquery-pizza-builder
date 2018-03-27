'use strict'

// Write your Pizza Builder JavaScript in this file.


// Select the pepperonni from the panel control
var main = function () {

    var totalPrice = 13;
    $('aside strong').text("$"+totalPrice);

    // Click in the pepperonni
    $('.btn-pepperonni').click(function() {
    
        // Find every pepperonni
        if($(this).hasClass('active') === true){
            //Delete the class
            //$(this).parent().remove();
            $('.pep').css('display', 'none');
            $(this).removeClass('active');
            $('aside ul li:nth-child(1)').css('display', 'none');
            totalPrice -= 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        } else {
            $('.pep').css('display', 'block');
            $(this).addClass('active');
            $('aside ul li:nth-child(1)').css('display', 'block');
            totalPrice += 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        }
        
    });

    // Click in the mushrooms
    $(".btn-mushrooms").click(function() {
    
        // Find every mushroom
        if($(this).hasClass('active') === true){
            //Delete the class
            $('.mushroom').css('display', 'none');
            $(this).removeClass('active');
            $('aside ul li:nth-child(2)').css('display', 'none');
            totalPrice -= 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);

        } else {
            $('.mushroom').css('display', 'block');
            $(this).addClass('active');
            $('aside ul li:nth-child(2)').css('display', 'block');
            totalPrice += 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        }
    
    });

    // Click in the green-peppers
    $(".btn-green-peppers").click(function() {
    
        // Find every green-pepper
        if($(this).hasClass('active') === true){
            //Delete the class
            $('.green-pepper').css('display', 'none');
            $(this).removeClass('active');
            $('aside ul li:nth-child(3)').css('display', 'none');
            totalPrice -= 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);

        } else {
            $('.green-pepper').css('display', 'block');
            $(this).addClass('active');
            $('aside ul li:nth-child(3)').css('display', 'block');
            totalPrice += 1;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        }
    
    });


    // Click in the green-peppers
    $('.btn-sauce').removeClass('active');
    $('aside ul li:nth-child(4)').css('display', 'none');

    $(".btn-sauce").click(function() {
        
        // Find every pepperonni
        if($(this).hasClass('active') === true){
            //Delete the class
            $(this).removeClass('active');
            console.log('sauce desactivated');
            $('aside ul li:nth-child(4)').css('display', 'none');
            totalPrice -= 3;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        } else {
            $(this).addClass('active');
            console.log('sauce activated');
            $('aside ul li:nth-child(4)').css('display', 'block');
            totalPrice += 3;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);

        }

    });

    $('.btn-crust').removeClass('active');
    $('aside ul li:nth-child(5)').css('display', 'none');

    $(".btn-crust").click(function() {
        
        // Find every pepperonni
        if($(this).hasClass('active') === true){
            //Delete the class
            $(this).removeClass('active');
            console.log('crust desactivated');
            $('aside ul li:nth-child(5)').css('display', 'none');
            totalPrice -= 5;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);

        } else {
            $(this).addClass('active');
            console.log('crust activated');
            $('aside ul li:nth-child(5)').css('display', 'block');
            totalPrice += 5;
            console.log(totalPrice);
            $('aside strong').text("$"+totalPrice);
        }

    });

}


main();