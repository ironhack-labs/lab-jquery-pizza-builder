// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(".pep-price").toggle();


    });

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(".mushrooms-price").toggle();


    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(".peppers-price").toggle();


    });

    //crust and sauce
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".sauce-price").toggle();


    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".crust-price").toggle();


    });

    //toggle button active state
    $(".btn").click(function(){
        $(this).toggleClass("active");

    });

});


    //hide or show price depending on button state

    if ($(".btn-crust").hasClass("active")) {
        $(".crust-price").show();
    } else {
        $(".crust-price").hide();
    }

    if ($(".btn-pepperonni").hasClass("active")) {
        $(".pep-price").show();
    } else {
        $(".pep-price").hide();
    }

    if ($(".btn-mushrooms").hasClass("active")) {
        $(".mushrooms-price").show();
    } else {
        $(".mushrooms-price").hide();
    }

    if ($(".btn-green-peppers").hasClass("active")) {
        $(".peppers-price").show();
    } else {
        $(".peppers-price").hide();
    }

    if ($(".btn-sauce").hasClass("active")) {
        $(".sauce-price").show();
    } else {
        $(".sauce-price").hide();
    }