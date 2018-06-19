// Write your Pizza Builder JavaScript in this file.
//Iteration 1: Add and remove toppings

$(document).ready(function(){
    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();
    $('.price ul li').hide();
    $(".crust").removeClass('crust-gluten free');
    $(".sauce").removeClass('sauce-white');
    $(".btn").removeClass('active');
})
var sum =10;
$('.price strong').html(sum);
$(".btn-pepperonni").click(function(){
    $(this).toggleClass('active');
    $(".pep").toggle();
    $('.price ul li:first-child').toggle();
    if ($(this).hasClass('active')){
        sum+=1;
    }else{
        sum-=1;
    }
    $('.price strong').html(sum);
})

$(".btn-mushrooms").click(function(){
    $(this).toggleClass('active');
    $(".mushroom").toggle();
    $('.price ul li:nth-child(2)').toggle();
    if ($(this).hasClass('active')){
        sum+=1;
    }else{
        sum-=1;
    }
    $('.price strong').html(sum);
})

$(".btn-green-peppers").click(function(){
    $(this).toggleClass('active');
    $(".green-pepper").toggle();
    $('.price ul li:nth-child(3)').toggle();
    if ($(this).hasClass('active')){
        sum+=1;
    }else{
        sum-=1;
    }
    $('.price strong').html(sum);
})

$(".btn-sauce").click(function(){
    $(this).toggleClass('active');
    $(".sauce").toggleClass('sauce-white');
    $('.price ul li:nth-child(4)').toggle();
    if ($(this).hasClass('active')){
        sum+=3;
    }else{
        sum-=3;
    }
    $('.price strong').html(sum);
})
$(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten free");
    $('.price ul li:nth-child(5)').toggle();
    if ($(this).hasClass('active')){
        sum+=5;
    }else{
        sum-=5;
    }
    $('.price strong').html(sum);
})

