// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    
    $('.sauce').removeClass('sauce-white');

    $('.crust').removeClass('crust-gluten-free');

    $('.btn').removeClass('active');

    $('.pep').hide();

    $('.green-pepper').hide();

    $('.mushroom').hide();

    $(".price li").hide();

    // $(".price strong").hide();
    // $('.price strong').text(total);

    
    // Nicks Parts
    // function CalcTotalPrice();
    // var allTheButtons =$('.btn')
    // var total = 10;

    // $('.btn-pepperonni').data('price', 1);
    // $('.btn-mushrooms').data('price', 1);
    // $('.btn-green-peppers').data('price', 1);
    // $('.btn-sauce').data('price', 3);
    // $('.btn-crust').data('price', 5);

    // for (var i =0; i < $('.btn').length; i++){
    //     if(allTheButtons.eq(i).hasClass('active')){
    //         price += allTheButtons[i].data('price')
    //     }
    // }

        

    $('.btn-pepperonni').click(function(event){
        $('.pep').toggle();
        $('.btn-pepperonni').toggleClass('active');
        $('.price li:contains($1 p)').toggle();        
        $('.price strong').text(total);
        
    })


    $('.btn-mushrooms').click(function(event){
        $('.mushroom').toggle();
        $('.btn-mushrooms').toggleClass('active');
        $('.price li:contains($1 m)').toggle();

        $('.price strong').text(total);
    })

    $('.btn-green-peppers').click(function(event){
        $('.green-pepper').toggle();
        $('.btn-green-peppers').toggleClass('active');
        $('.price li:contains($1 g)').toggle();

    })

    $('.btn-sauce').click(function(event){
        $(".sauce").toggleClass("sauce-white");
        $('.btn-sauce').toggleClass('active');
        $('.price li:contains($3)').toggle();

    })

    $('.btn-crust').click(function(event){
        $(".crust").toggleClass("crust-gluten-free");
        $('.btn-crust').toggleClass('active');
        $('.price li:contains($5)').toggle();

    })
    

});

