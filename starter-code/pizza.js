// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

var totalPrice = 13;

$('.btn-pepperonni').click(function(){
    if($(this).hasClass('active') === true){
        $('.pep').css('display', 'none');
        $(this).removeClass('active');
        $('aside ul li:nth-child(1)').css('display','none');
        totalPrice = totalPrice - 1;
        $('strong').html('$' + totalPrice);
    }else {
        $('.pep').css('display', 'block');
        $(this).addClass('active');
        $('aside ul li:nth-child(1)').css('display','block');
        totalPrice = totalPrice + 1;
        $('strong').html('$' + totalPrice);
    }
});

$('.btn-mushrooms').click(function(){
    if($(this).hasClass('active') === true){
        $('.mushroom').css('display', 'none');
        $(this).removeClass('active');
        $('aside ul li:nth-child(2)').css('display','none');
        totalPrice = totalPrice - 1;
        $('strong').html('$' + totalPrice);
    }else {
        $('.mushroom').css('display', 'block');
        $(this).addClass('active');
        $('aside ul li:nth-child(2)').css('display','block');
        totalPrice = totalPrice + 1;
        $('strong').html('$' + totalPrice);
    }
});

$('.btn-green-peppers').click(function(){
    if($(this).hasClass('active') === true){
        $('.green-pepper').css('display', 'none');
        $(this).removeClass('active');
        $('aside ul li:nth-child(3)').css('display','none');
        totalPrice = totalPrice - 1;
        $('strong').html('$' + totalPrice);
    }else {
        $('.green-pepper').css('display', 'block');
        $(this).addClass('active');
        $('aside ul li:nth-child(3)').css('display','block');
        totalPrice = totalPrice + 1;
        $('strong').html('$' + totalPrice);
    }
});

$('.btn-sauce').click(function(){
    if($(this).hasClass('active') === true){
        $('.sauce').removeClass('sauce-white');
        $(this).removeClass('active');
        $('aside ul li:nth-child(4)').css('display','none');
        totalPrice = totalPrice - 3;
        $('strong').html('$' + totalPrice);
    }else {
        $('.sauce').addClass('sauce-white');
        $(this).addClass('active');
        $('aside ul li:nth-child(4)').css('display','block');
        totalPrice = totalPrice + 3;
        $('strong').html('$' + totalPrice);
    }
});

$('.btn-crust').click(function(){
    if($(this).hasClass('active') === true){
        $('.crust').removeClass('crust-gluten-free');
        $(this).removeClass('active');
        $('aside ul li:nth-child(5)').css('display','none');
        totalPrice = totalPrice - 5;
        $('strong').html('$' + totalPrice);
    }else {
        $('.crust').addClass('crust-gluten-free');
        $(this).addClass('active');
        $('aside ul li:nth-child(5)').css('display','block');
        totalPrice = totalPrice + 5;
        $('strong').html('$' + totalPrice);
    }
});

});