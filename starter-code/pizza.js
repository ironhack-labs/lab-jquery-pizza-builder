$(function(){

$('.btn-pepperonni').on('click',function(e){
    $('.pep').toggle(".pep");
});
$('.btn-mushrooms').on('click',function(e){
    $('.mushroom').toggle(".mushroom");
});
$('.btn-green-peppers').on('click',function(e){
    $('.green-pepper').toggle(".green-pepper");
});

$("#sauce").removeClass('sauce-white');

$("#pan").removeClass('crust-gluten-free');

$('.btn-sauce').on('click',function(e){
    if($("#sauce").hasClass('sauce-white')){
        $("#sauce").removeClass('sauce-white');
    }else{
        $("#sauce").addClass('sauce-white');
    }
});

$('.btn-crust').on('click',function(e){
    if($("#pan").hasClass('crust-gluten-free')){
        $("#pan").removeClass('crust-gluten-free');
    }else{
        $("#pan").addClass('crust-gluten-free');
    }
});

})