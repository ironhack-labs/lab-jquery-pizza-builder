// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
    //default area
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $("li:contains($3 w)").toggle();
    $("li:contains($5 g)").toggle();
    $(".btn-pepperonni").data('price', 1);
    $(".btn-mushrooms").data('price', 1);
    $(".btn-green-peppers").data('price', 1);
    $(".btn-sauce").data('price', 3);
    $(".btn-crust").data('price', 5);
    //put stuff in me :D

    function calculateTotalPrice(){
        var price = 10;
        var allTheButtons = $('.btn');

        for(var i=0; i<allTheButtons.length; i++){
            if(allTheButtons.eq(i).hasClass('active')){
                price += allTheButtons.eq(i).data('price')
            }
        }
        $('strong').text('$' +price)
    }


    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggle();
        $("btn-musrooms").toggleClass("active");
        $("li:contains($1 m)").toggle();
        calculateTotalPrice();
    });
    $(".btn-pepperonni").click(function () {
        $(".pep").toggle();
        $("btn-pepperoni active").toggleClass("active");
        $("li:contains($1 p)").toggle();
        calculateTotalPrice();
    });

    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggle();
        $("btn-green-peppers active").toggleClass("active");
        $("li:contains($1 g)").toggle();
        calculateTotalPrice();
    });


    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $("li:contains($3 w)").toggle();
        calculateTotalPrice();
    });
    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $("li:contains($5 g)").toggle();
        calculateTotalPrice();
    });
});
