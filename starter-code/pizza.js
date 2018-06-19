$(document).ready(function () {

        $('.green-pepper').hide();
        $('.pep').css({display: 'none'});
        $('.mushroom').css({display: 'none'});
        $('.active').removeClass('active');
        $('.price li').css({display : 'none'})
        $('.panel strong').text($('.panel b').text().split(" ")[0]);
        $('.crust-gluten-free').removeClass('crust-gluten-free');
        $('.sauce-white').removeClass('sauce-white')
 
    $('.btn-pepperonni').click( function (){

        $('.pep').toggle();
        $(this).toggleClass('active');
        $('li:contains("pepperonni")').toggle();
        var valor = -1;
        if ($('.btn-pepperonni').hasClass('active')){
            valor = 1
        }
        $('strong').text("$" + (parseInt(($('strong').text().slice(1))) + valor ));
     })


     $('.btn-mushrooms').click( function (){
        $('.mushroom').toggle();
        $(this).toggleClass('active');
        $('li:contains("mushroom")').toggle()
        var valor = -1
        if ($('.btn-mushrooms').hasClass('active')){
            valor = 1
        }
        $('strong').text("$" + (parseInt(($('strong').text().slice(1))) + valor ));
     })

     $('.btn-green-peppers').click( function (){

        $('.green-pepper').toggle();
        $(this).toggleClass('active');
        $('li:contains("green pepper")').toggle()
        var valor = -1
        if ($('.btn-green-peppers').hasClass('active')){
            valor = 1
        }
        $('strong').text("$" + (parseInt(($('strong').text().slice(1))) + valor ));
     })

     $('.btn-crust').click( function (){

        $('.crust').toggleClass('crust-gluten-free');
        $(this).toggleClass('active');
        $('li:contains("gluten-free crust")').toggle()
        var valor = -5
        if ($('.btn-crust').hasClass('active')){
            valor = 5
        }
        $('strong').text("$" + (parseInt(($('strong').text().slice(1))) + valor ));
     })

     $('.btn-sauce').click( function (){

        $('.sauce').toggleClass('sauce-white');
        $(this).toggleClass('active');
        $('li:contains("white sauce")').toggle()
        var valor = -3
        if ($('.btn-sauce').hasClass('active')){
            valor = 3
        }
        
        $('strong').text("$" + (parseInt(($('strong').text().slice(1))) + valor ));
     })





   


})