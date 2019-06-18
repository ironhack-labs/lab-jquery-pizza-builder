// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('.btn-sauce').toggleClass('active');
    $('.btn-crust').toggleClass('active');
    $('.sauce').removeClass('sauce-white');
    $("li:contains('white sauce')").hide();
    $('.crust').removeClass('crust-gluten-free');
    $("li:contains('gluten-free crust')").hide();
    priceTotal();


    $('.btn-pepperonni').click(function (e) {
        console.log('pepperoni button clicked');
        $('.pep').toggle();
        $(this).toggleClass('active');
        $("li:contains('pepperonni')").toggle();
        priceTotal();


    })
    $('.btn-mushrooms').click(function (e) {
        console.log('mushroom button clicked');
        $('.mushroom').toggle();
        $(this).toggleClass('active');
        $("li:contains('mushrooms')").toggle();
        priceTotal();

    })
    $('.btn-green-peppers').click(function (e) {
        console.log('green pepper button clicked');
        $('.green-pepper').toggle();
        $(this).toggleClass('active');
        $("li:contains('green peppers')").toggle();
        priceTotal();

    })
    $('.btn-sauce').click(function (e) {
        console.log('sauce clicked');
        $(this).toggleClass('active');    
        $('.sauce').toggleClass('sauce-white');
        $("li:contains('white sauce')").toggle()
        priceTotal();

        
    })
    $('.btn-crust').click(function (e) {
        $(this).toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
        $("li:contains('gluten-free crust')").toggle()
        priceTotal();
    })

    function priceTotal() {
    
        let price = 10;
        if ($('.panel.price>ul>li:visible:contains(pepperonni)').length >0) {
          price += 1;
        }
        if ($('.panel.price>ul>li:visible:contains(mushrooms)').length >0) {
          price += 1;
        }
        if ($('.panel.price>ul>li:visible:contains(green)').length >0) {
          price += 1;
        }
        if ($('.panel.price>ul>li:visible:contains(white)').length >0) {
          price += 3;
        }
        if ($('.panel.price>ul>li:visible:contains(gluten)').length >0) {
          price += 5;
        }
        $('.panel.price>strong').eq(0).text('$'+ price); 
      }









});