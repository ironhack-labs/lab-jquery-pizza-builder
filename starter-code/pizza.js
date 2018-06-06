// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".panel ul li:contains('pepperonni')").toggle();
    })

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        $(".panel ul li:contains('mushrooms')").toggle();
    })

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $(".panel ul li:contains('green peppers')").toggle();
    })

    $("section").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".panel ul li:contains('white sauce')").hide();
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $(".panel ul li:contains('white sauce')").toggle();

    })

    $("section").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".panel ul li:contains('gluten-free crust')").hide();
    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $(".panel ul li:contains('gluten-free crust')").toggle();
     })

});


// var totalPrice = parseFloat('.panel strong:contains').text().substr(1);
// var price= "$" + (totalPrice-1);
