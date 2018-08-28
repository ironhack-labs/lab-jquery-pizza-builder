// Write your Pizza Builder JavaScript in this file.
//$('.pep').css('opacity','0');
$('#base').removeClass('crust-gluten-free');
$('#salsa').removeClass('sauce-white');

$('.btn-pepperonni').on('click',function(){
    $('.btn-pepperonni').toggleClass('active');
    $('.pep').toggleClass('pep-none');
    $("#precios li:contains('$1 pepperonni')").toggle("display");
    $(".total").text('$' + tot());
})

function tot(){
    var total=10;
    if ($('.btn-pepperonni').hasClass('active')){
        total++;
    }
    if ($('.btn-mushrooms').hasClass('active')){
        total++;
    }
    if ($('.btn-green-peppers').hasClass('active')){
        total++;
    }
    if ($('.btn-sauce').hasClass('active')){
        total = total + 3;
    }
    if ($('.btn-crust').hasClass('active')){
        total = total + 5;   
    }
    return total;
}


$('.btn-mushrooms').on('click',function(){
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom').toggleClass('mush-none');
    $("#precios li:contains('$1 mushrooms')").toggle("display");
    $(".total").text('$' + tot());
})

$('.btn-green-peppers').on('click',function(){
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper').toggleClass('pepper-none');
    $("#precios li:contains('$1 green peppers')").toggle("display");
    $(".total").text('$' + tot());
})

$('.btn-sauce').on('click',function(){
    $('.btn-sauce').toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $("#precios li:contains('$3 white sauce')").toggle("display");
    $(".total").text('$' + tot());
})

$('.btn-crust').on('click',function(){
    $('.btn-crust').toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $("#precios li:contains('$5 gluten-free crust')").toggle("display");
    $(".total").text('$' + tot());
})









