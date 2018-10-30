// Write your Pizza Builder JavaScript in this file.

$(function(){
    $('.btn-pepperonni').click(function() {
        $('.pep').toggle();
        $(this).toggleClass('active');
        $('.price li:contains("pepperonni")').toggle();
        updatePrice();
    });

    $('.btn-mushrooms').click(function() {
        $('.mushroom').toggle();
        $(this).toggleClass('active');
        $('.price li:contains("mushrooms")').toggle();
        updatePrice();
    });

    $('.btn-green-peppers').click(function() {
        $('.green-pepper').toggle();
        $(this).toggleClass('active');
        $('.price li:contains("peppers")').toggle();
        updatePrice();
    });

    $('.crust').removeClass('crust-gluten-free');

    $('.sauce').removeClass('sauce-white');

    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');

    $('.price li:contains("sauce")').hide();
    $('.price li:contains("crust")').hide();

    updatePrice();

    $('.btn-crust').click(function() {
        $('.crust').toggleClass('crust-gluten-free');
        $(this).toggleClass('active');
        $('.price li:contains("crust")').toggle();
        updatePrice();
    });

    $('.btn-sauce').click(function() {
        $('.sauce').toggleClass('sauce-white');
        $(this).toggleClass('active');
        $('.price li:contains("sauce")').toggle();
        updatePrice();
    });

    function updatePrice() {
        var basePrice = parseInt($('.price b').text().match(/\d+/)[0]);

        $('.price li:visible').each(function(i){
            basePrice += parseInt($(this).text().match(/\d+/)[0]);
        });
        
        $('.price strong').text(`$${basePrice}`);
    }




});
