// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    $(".btn-pepperonni").toggleClass("active");
    $(".btn-mushrooms").toggleClass("active");
    $(".btn-green-peppers").toggleClass("active");

    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();

    $(".price ul li:nth-child(4)").hide();
    $(".price ul li:nth-child(5)").hide();

    $(".btn-pepperonni").click(function () {
        $('.pep').toggle();
        $(".btn-pepperonni").toggleClass("active")
        
    });

    $(".btn-mushrooms").click(function () {
        $('.mushroom').toggle();
        $(".btn-mushrooms").toggleClass("active")
        
    });

    $(".btn-green-peppers").click(function () {
        $('.green-pepper').toggle();
        $(".btn-green-peppers").toggleClass("active")

    });

    $('.crust').toggleClass("crust-gluten-free");

    $('.sauce-white').toggleClass("sauce-white");




})


