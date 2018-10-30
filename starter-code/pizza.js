$(function(){

$('.btn-pepperonni').on('click',function(e){
    $('.pep').toggle(".pep");
    if($(".btn-pepperonni").hasClass('active')){
        $(".btn-pepperonni").removeClass('active');
    }else{
        $(".btn-pepperonni").addClass('active');
    }
});
$('.btn-mushrooms').on('click',function(e){
    $('.mushroom').toggle(".mushroom");
    if($(".btn-mushrooms").hasClass('active')){
        $(".btn-mushrooms").removeClass('active');
    }else{
        $(".btn-mushrooms").addClass('active');
    }
});
$('.btn-green-peppers').on('click',function(e){
    $('.green-pepper').toggle(".green-pepper");
    if($(".btn-green-peppers").hasClass('active')){
        $(".btn-green-peppers").removeClass('active');
    }else{
        $(".btn-green-peppers").addClass('active');
    }
});


$('.btn-sauce').on('click',function(e){
    if($("#sauce").hasClass('sauce-white')){
        $("#sauce").removeClass('sauce-white');
        $(".btn-sauce").removeClass('active');
    }else{
        $("#sauce").addClass('sauce-white');
        $(".btn-sauce").addClass('active');
    }
});

$('.btn-crust').on('click',function(e){
    if($("#pan").hasClass('crust-gluten-free')){
        $("#pan").removeClass('crust-gluten-free');
        $(".btn-crust").removeClass('active');
    }else{
        $("#pan").addClass('crust-gluten-free');
        $(".btn-crust").addClass('active');
    }
});

$("#sauce").removeClass('sauce-white');

$("#pan").removeClass('crust-gluten-free');

$(".btn-sauce").removeClass('active');

$(".btn-crust").removeClass('active');

});