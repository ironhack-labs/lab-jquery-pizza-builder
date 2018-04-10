// Write your Pizza Builder JavaScript in this file.


$(document).ready(function(){

    var resultado = $('.price strong span').text();
    

    $('.btn-pepperonni').click(function(){
        $('.btn-pepperonni').toggleClass('active');
        $('.pep').toggle();

        $('.price ul li:nth-child(1)').toggle();
        if($('.btn-pepperonni').hasClass('active')){
            resultado++
            $('.price strong span').text(resultado);
        } else {
            resultado--
            $('.price strong span').text(resultado);
        }

    })

    $('.btn-mushrooms').click(function(){
        $('.btn-mushrooms').toggleClass('active');
        $('.mushroom').toggle();

        $('.price ul li:nth-child(2)').toggle();
        if($('.btn-mushrooms').hasClass('active')){
            resultado++
            $('.price strong span').text(resultado);
        } else {
            resultado--
            $('.price strong span').text(resultado);
        }


    })

    $('.btn-green-peppers').click(function(){
        $('.btn-green-peppers').toggleClass('active');
        $('.green-pepper').toggle()
        $('.price ul li:nth-child(3)').toggle();

        if($('.btn-green-peppers').hasClass('active')){
            resultado++
            $('.price strong span').text(resultado);
        } else {
            resultado--
            $('.price strong span').text(resultado);
        }

    })

    $('.btn-sauce').click(function(){
        $('.btn-sauce').toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
        $('.price ul li:nth-child(4)').toggleClass('visible');
        
        if($('.btn-sauce').hasClass('active')){
            resultado = parseInt(resultado) + 3;
            $('.price strong span').text(resultado);
        } else {
            resultado = parseInt(resultado) - 3;
            $('.price strong span').text(resultado);
        }

    })

    $('.btn-crust').click(function(){
        $('.btn-crust').toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');

        $('.price ul li:nth-child(5)').toggleClass('visible');

        if($('.price ul li:nth-child(5)').hasClass('visible')){
            resultado = parseInt(resultado) + 5;
            $('.price strong span').text(resultado);
        } else {
            resultado = parseInt(resultado) - 5;
            $('.price strong span').text(resultado);
        }

    })
/*
    function precios (){
        var precioPep = $('.price ul li:nth-child(1)');
        var precioMus = $('.price ul li:nth-child(2)');
        var precioGpe = $('.price ul li:nth-child(3)');
        var precioSau = $('.price ul li:nth-child(4)');
        var precioGlu = $('.price ul li:nth-child(5)');
     
        if($('.price ul li:nth-child(1)').hasClass('active')){
            console.log("Hola");
        }
*/







    






});