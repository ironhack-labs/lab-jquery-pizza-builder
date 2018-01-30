// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $('.price li:nth-child(4)').hide();
    $('.price li:nth-child(5)').hide();
    $('.sauce').toggleClass('sauce-white');
    $('.crust').toggleClass('crust-glute-free');
    var peps = 1;
    var mush = 1;
    var greenpep = 1;
    var wsauce = 3;
    var gluten = 5;

    $('.btn-pepperonni').click(function(){
        if ($('.pep').css('display') ==='block'){
            $('.pep').hide();
            $('.btn-pepperonni').removeClass('active');
            $('.price li:nth-child(1)').hide();
        } else {
            $('.pep').show();
            $('.btn-pepperonni').addClass('active');
            $('.price li:nth-child(1)').show();
        }
    });

    $('.btn-mushrooms').click(function(){
        if ($('.mushroom').css('display') ==='block'){
            $('.mushroom').hide()
            $('.btn-mushrooms').removeClass('active');
            $('.price li:nth-child(2)').hide();
        } else {
            $('.mushroom').show();
            $('.btn-mushrooms').addClass('active');
            $('.price li:nth-child(2)').show();
        }
    });
    $('.btn-green-peppers').click(function(){
        if ($('.green-pepper').css('display') ==='block'){
            $('.green-pepper').hide();
            $('.btn-green-peppers').removeClass('active');
            $('.price li:nth-child(3)').hide();
        } else {
            $('.green-pepper').show();
            $('.btn-green-peppers').addClass('active');
            $('.price li:nth-child(3)').show();
        }
    });

    $('.btn-sauce').click(function(){
        if($('.sauce').hasClass('sauce-white')){
            $('.sauce').removeClass('sauce-white')
            $('.btn-sauce').removeClass('active');
            $('.btn-sauce').text('Regular Sauce');
            $('.price li:nth-child(4)').hide();
        } else {
            $('.sauce').addClass('sauce-white');
            $('.btn-sauce').addClass('active');
            $('.btn-sauce').text('White Sauce');
            $('.price li:nth-child(4)').show();
        }
    })

    $('.btn-crust').click(function(){
        if($('.crust').hasClass('crust-gluten-free')){
            $('.crust').removeClass('crust-gluten-free')
            $('.btn-crust').removeClass('active');
            $('.btn-crust').text('Crust')
            $('.price li:nth-child(5)').hide();
        } else {
            $('.crust').addClass('crust-gluten-free')
            $('.btn-crust').addClass('active');
            $('.btn-crust').text('Gluten-free crust') 
            $('.price li:nth-child(5)').show(); 
        } 
    })
    //PRICE
// var sum = 0;
//     (function ($) { console.log($) });
// }
})
