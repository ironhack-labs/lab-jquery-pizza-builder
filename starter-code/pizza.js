// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('.green-pepper, .mushroom, .pep').hide();
    $('section.crust').removeClass('crust-gluten-free');
    $('section.sauce').removeClass('sauce-white');
    $('button').removeClass('active');
    $("aside li:contains('sauce'), aside li:contains('crust')").remove();

    $(".btn-pepperonni").click(function(){
        $(this).toggleClass("active");
        $('.pep').fadeToggle();
    });

    $(".btn-mushrooms").click(function(){
        $(this).toggleClass("active");
        $('.mushroom').fadeToggle();
    });

    $(".btn-green-peppers").click(function(){
        $(this).toggleClass("active");
        $('.green-pepper').fadeToggle();
    });

    $(".btn-sauce").click(function(){
        $(this).toggleClass("active");
        $('section.sauce').toggleClass('sauce-white');
    });

    $(".btn-crust").click(function(){
        $(this).toggleClass("active");
        $('section.crust').toggleClass('crust-gluten-free');
    });



});