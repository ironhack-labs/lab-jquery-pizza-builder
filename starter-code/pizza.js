// Write your Pizza Builder JavaScript in this file.
var total = 10;


$(".btn-pepperonni").click(function(){
    if($(".btn-pepperoni").hasClass("active")){

       
        total--;
    }else{

        total++;
    }



$('strong').text(`$${total}`);


})
$(".btn-green-peppers").click(function(){
    if($(".btn-green-peppers").hasClass("active")){

       
        total--;
    }else{

        total++;
    }



$('strong').text(`$${total}`);


})
$(".btn-mushrooms").click(function(){
    if($(".btn-mushrooms").hasClass("active")){

       
        total--;
    }else{

        total++;
    }



$('strong').text(`$${total}`);


})

$(".btn-crust").click(function(){
    if($(".btn-crust").hasClass("active")){

       
        total-=5;
    }else{

        total+=5;
    }



$('strong').text(`$${total}`);


})

$(".btn-sauce").click(function(){
    if($(".btn-sauce").hasClass("active")){

       
        total-= 3;
    }else{

        total+=3;
    }



$('strong').text(`$${total}`);


})


$(document).ready(function() {

    
$('.btn-pepperonni').click(function extract() {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active')
    $('.panel.price li:eq(0)').toggle()
})
$('.btn-green-peppers').click(function extract() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active')
    $('.panel.price li:eq(2)').toggle();
})
$('.btn-mushrooms').click(function extract() {

    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active')
    $('.panel.price li:eq(1)').toggle();
})
//2 ITERACION

$('.crust').removeClass('crust-gluten-free');
$('.btn-crust').click(function () {

    $('.crust').toggleClass('crust-gluten-free');
    $('.panel.price li:eq(3)').toggle();
})
//3ITERACION
$('.sauce').removeClass('sauce-white');
$('.btn-sauce').click(function () {
    var saucePrice = 3
    $('.sauce').toggleClass('sauce-white');
    $('.panel.price li:eq(4)').toggle();
})

//4ITERACION
$('.panel.price li:eq(3)').hide();
$('.panel.price li:eq(4)').hide();



});




