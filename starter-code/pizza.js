// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('section').removeClass('crust-gluten-free sauce-white');
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');
    $('li:contains("$3 white sauce")').toggle();
    $('li:contains("$5 gluten-free crust")').toggle();

    let pepperonni = 1;
    let mushrooms = 1;
    let greenPeppers = 1;
    let crust = 0;
    let sauce = 0;

    let price = 10+ pepperonni + mushrooms + greenPeppers;

    $('strong').text('$'+price);

    $('.btn-pepperonni').click(function() { 
        $('.pep').toggle();
        $('.btn-pepperonni').toggleClass('active');
        $('li:contains("$1 pepperonni")').toggle();
        if(pepperonni === 1) {
            pepperonni -= 1;
            price -= 1;
        } else {
            pepperonni += 1;
            price += 1;
        }
        $('strong').text('$'+price);
    });
    
    $('.btn-mushrooms').click(function() {   
        $('.mushroom').toggle();
        $('.btn-mushrooms').toggleClass('active');
        $('li:contains("$1 mushrooms")').toggle();
        if(mushrooms === 1) {
            mushrooms -= 1;
            price -= 1;
        } else {
            mushrooms += 1;
            price += 1;
        }
        $('strong').text('$'+price);
    });

    

    $('.btn-green-peppers').click(function() {
        $('.green-pepper').toggle();
        $('.btn-green-peppers').toggleClass('active');
        $('li:contains("$1 green peppers")').toggle();
        if(greenPeppers === 1) {
            greenPeppers -= 1;
            price -= 1;
        } else {
            greenPeppers += 1;
            price += 1;
        }
        $('strong').text('$'+price);
    });    


    $('.btn-sauce').click(function() {
        $('.sauce').toggleClass('sauce-white');
        $('.btn-sauce').toggleClass('active');
        $('li:contains("$3 white sauce")').toggle();
        if(sauce === 3) {
            sauce -= 3;
            price -= 3;
        } else {
            sauce += 3;
            price += 3;
        }
        $('strong').text('$'+price);
    });   
    
    $('.btn-crust').click(function() {
        $('.crust').toggleClass('crust-gluten-free');
        $('.btn-crust').toggleClass('active');
        $('li:contains("$5 gluten-free crust")').toggle();
        if(crust === 5) {
            crust -= 5;
            price -= 5;
        } else {
            crust += 5;
            price += 5;
        }
        $('strong').text('$'+price);
    });  

});
