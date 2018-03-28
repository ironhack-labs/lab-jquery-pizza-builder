// Write your Pizza Builder JavaScript in this file.
// $('body').css({'background':'#f00'});

// initialisation
$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.sauce').removeClass('sauce-white');
$('.crust').removeClass('crust-gluten-free');
$('.price li').hide();

var price = 10;

var priceShow = $('.price strong');
priceShow.text('$' + price);

$('.btn-pepperonni').click(function(){
    if($('.btn-pepperonni').hasClass('active')){
        $('.pep').show();
        $('.btn-pepperonni').removeClass('active');
        $('.price li:nth-child(1)').show(300);
        price += 1;
        priceShow.text('$' + price);
    }
    else{
        $('.pep').hide();
        $('.btn-pepperonni').addClass('active');
        $('.price li:nth-child(1)').hide(300);
        price -= 1;
        priceShow.text('$' + price);
    }
});

$('.btn-mushrooms').click(function(){
    if($('.btn-mushrooms').hasClass('active')){
        $('.mushroom').show();
        $('.btn-mushrooms').removeClass('active');
        $('.price li:nth-child(2)').show(300);
        price += 1;
        priceShow.text('$' + price);
    }
    else{
        $('.mushroom').hide();
        $('.btn-mushrooms').addClass('active');
        $('.price li:nth-child(2)').hide(300);
        price -= 1;
        priceShow.text('$' + price);
    }
});

$('.btn-green-peppers').click(function(){
    if($('.btn-green-peppers').hasClass('active')){
        $('.green-pepper').show();
        $('.btn-green-peppers').removeClass('active');
        $('.price li:nth-child(3)').show(300);
        price += 1;
        priceShow.text('$' + price);
    }
    else{
        $('.green-pepper').hide();
        $('.btn-green-peppers').addClass('active');
        $('.price li:nth-child(3)').hide(300);
        price -= 1;
        priceShow.text('$' + price);
    }
});

$('.btn-sauce').click(function(){
    if($('.btn-sauce').hasClass('active')){
        $('.sauce').addClass('sauce-white');
        $('.btn-sauce').removeClass('active');
        $('.price li:nth-child(4)').show(300);
        price += 3;
        priceShow.text('$' + price);
    }
    else{
        $('.sauce').removeClass('sauce-white');
        $('.btn-sauce').addClass('active');
        $('.price li:nth-child(4)').hide(300);
        price -= 3;
        priceShow.text('$' + price);
    }
});

$('.btn-crust').click(function(){
    if($('.btn-crust').hasClass('active')){
        $('.crust').addClass('crust-gluten-free');
        $('.btn-crust').removeClass('active');
        $('.price li:nth-child(5)').show(300);
        price += 5;
        priceShow.text('$' + price);
    }
    else{
        $('.crust').removeClass('crust-gluten-free');
        $('.btn-crust').addClass('active');
        $('.price li:nth-child(5)').hide(300);
        price -= 5;
        priceShow.text('$' + price);
    }
});

