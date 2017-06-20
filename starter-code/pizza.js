
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    //(iteration5)
    var price = 13;
    updatePizzaPrice();
    //iteration1
    $('.controls .btn-pepperonni').on('click', function (e) {
        $('.pep').toggle();
        $('.price li:nth-child(1)').toggle();
    
    });
    $('.controls .btn-mushrooms').on('click', function (e) {
        $('.mushroom').toggle();
        $('.price li:nth-child(2)').toggle();
        
    });
    $('.controls .btn-green-peppers').on('click', function (e) {
        $('.green-pepper').toggle();
        $('.price li:nth-child(3)').toggle();
         
    });

    //iteration2
    $('.crust-gluten-free').removeClass('crust-gluten-free');
    $('.sauce-white').removeClass('sauce-white');

    $('.controls .btn-crust').on('click', function (e) {
        $('.crust').toggleClass('crust-gluten-free');
    });

    $('.controls .btn-sauce').on('click', function (e) {
        $('.sauce').toggleClass('sauce-white');
    });
    //iteration3
    $('.btn-pepperonni,.btn-mushrooms,.btn-green-peppers').addClass('active');
    $('.btn-sauce,.btn-crust').removeClass('active');

    $('.btn-pepperonni').on('click', function (e) {
        $('.btn-pepperonni').toggleClass('active');   
        price = ($('.btn-pepperonni').hasClass("active")) ? price+=1 : price -=1
        updatePizzaPrice();
    });
    $('.btn-mushrooms').on('click', function (e) {
        $('.btn-mushrooms').toggleClass('active');
        price = ($('.btn-mushrooms').hasClass("active")) ? price+=1 : price -=1
        updatePizzaPrice();
    });
    $('.btn-green-peppers').on('click', function (e) {
        $('.btn-green-peppers').toggleClass('active');
        price = ($('.btn-green-peppers').hasClass("active")) ? price+=1 : price -=1
        updatePizzaPrice();
    });
    $('.btn-sauce').on('click', function (e) {
        $('.btn-sauce').toggleClass('active');
         $('.price li:nth-child(4)').toggle();
        price = ($('.btn-sauce').hasClass("active")) ? price+=3 : price -=3
        updatePizzaPrice();

    });
    $('.btn-crust').on('click', function (e) {
        $('.btn-crust').toggleClass('active');
         $('.price li:nth-child(5)').toggle();
        price = ($('.btn-crust').hasClass("active")) ? price+=5 : price -=5
        updatePizzaPrice();
    });

    $('.price li:nth-child(4)').hide();
    $('.price li:nth-child(5)').hide();

    function updatePizzaPrice() {$('strong').text(price);}

});

