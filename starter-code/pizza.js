// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');  
    $('.pep, .mushroom, .green-pepper').hide();
    // $('.mushroom').hide();
    // $('.green-pepper').hide();
    $('.btn-pepperonni, .btn-mushrooms, .btn-green-peppers').removeClass('active');


    $(".btn-pepperonni").click(function(){
        $('.pep').toggle();
        $(this).toggleClass('active');
       
    })

    $(".btn-mushrooms").click(function(){
        $('.mushroom').toggle();
        $(this).toggleClass('active');
       
    })

    $(".btn-green-peppers").click(function(){
        $('.green-pepper').toggle();
        $(this).toggleClass('active');
       
    })

    $(".btn-crust").click(function () {
        $('.crust').toggleClass('crust-gluten-free');
    })

    $(".btn-sauce").click(function () {
        $('.sauce').toggleClass('sauce-white');
    })

})