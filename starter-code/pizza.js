$(function(){

$('.btn-pepperonni').on('click',function(e){
    $('.pep').toggle(".pep");
    if($(".btn-pepperonni").hasClass('active')){
        $(".btn-pepperonni").removeClass('active');
        $(".price li:eq(0)").hide();
    }else{
        $(".btn-pepperonni").addClass('active');
        $(".price li:eq(0)").show();
    }
});
$('.btn-mushrooms').on('click',function(e){
    $('.mushroom').toggle(".mushroom");
    if($(".btn-mushrooms").hasClass('active')){
        $(".btn-mushrooms").removeClass('active');
        $(".price li:eq(1)").hide();
    }else{
        $(".btn-mushrooms").addClass('active');
        $(".price li:eq(1)").show();
    }
});
$('.btn-green-peppers').on('click',function(e){
    $('.green-pepper').toggle(".green-pepper");
    if($(".btn-green-peppers").hasClass('active')){
        $(".btn-green-peppers").removeClass('active');
        $(".price li:eq(2)").hide();
    }else{
        $(".btn-green-peppers").addClass('active');
        $(".price li:eq(2)").show();
    }
});


$('.btn-sauce').on('click',function(e){
    if($("#sauce").hasClass('sauce-white')){
        $("#sauce").removeClass('sauce-white');
        $(".btn-sauce").removeClass('active');
        $(".price li:eq(3)").hide();
    }else{
        $("#sauce").addClass('sauce-white');
        $(".btn-sauce").addClass('active');
        $(".price li:eq(3)").show();
    }
});

$('.btn-crust').on('click',function(e){
    if($("#pan").hasClass('crust-gluten-free')){
        $("#pan").removeClass('crust-gluten-free');
        $(".btn-crust").removeClass('active');
        $(".price li:eq(4)").hide();
    }else{
        $("#pan").addClass('crust-gluten-free');
        $(".btn-crust").addClass('active');
        $(".price li:eq(4)").show();
    }
});

$("#sauce").removeClass('sauce-white');

$("#pan").removeClass('crust-gluten-free');

$(".btn-sauce").removeClass('active');

$(".btn-crust").removeClass('active');

$(".price li:eq(3)").hide();
$(".price li:eq(4)").hide();

});