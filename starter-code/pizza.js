// Write your Pizza Builder JavaScript in this file.
$(function(){
    $(".btn").removeClass("active");
    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();
    $(".sauce").removeClass('sauce-white');
    $(".crust").removeClass('crust-gluten-free');
    $(".price > ul").children().hide();

    var totalPrice = 0;
    function renderPrice(price){
        totalPrice += price;
        ($(".price > strong").html("$" + totalPrice))
    };

    renderPrice(10);

$(".btn-pepperonni").click(function() {
    if ($(".btn-pepperonni").hasClass("active")){
        $(".pep").hide();
        $(".price > ul > li:first-child").hide();
        renderPrice(-1);
    } else{
        $(".pep").show();
        $(".price > ul > li:first-child").show();
        renderPrice(1);
    }
    $(".btn-pepperonni").toggleClass("active");
});

$(".btn-mushrooms").click(function() {
    if ($(".btn-mushrooms").hasClass("active")){
        $(".mushroom").hide();
        $(".price > ul > li:nth-child(2)").hide();
        renderPrice(-1);
    } else{
        $(".mushroom").show();
        $(".price > ul > li:nth-child(2)").show();
        renderPrice(1);
    }
    $(".btn-mushrooms").toggleClass("active");  
});

$(".btn-green-peppers").click(function() {
    if ($(".btn-green-peppers").hasClass("active")){
        $(".green-pepper").hide();
        $(".price > ul > li:nth-child(3)").hide();
        renderPrice(-1);
    } else{
        $(".green-pepper").show();
        $(".price > ul > li:nth-child(3)").show();
        renderPrice(1);
    }
    $(".btn-green-peppers").toggleClass("active");
});

$(".btn-sauce").click(function() {
    if ($(".btn-sauce").hasClass("active")){
        $(".price > ul > li:nth-child(4)").hide();
        renderPrice(-3);
    } else {
        $(".price > ul > li:nth-child(4)").slideUp();
        renderPrice(3);
    }
    $(".sauce").toggleClass('sauce-white');
    $(".btn-sauce").toggleClass("active");
});

$(".btn-crust").click(function() {
    if ($(".btn-crust").hasClass("active")){
        $(".price > ul > li:nth-child(5)").hide();
        renderPrice(-5);
    } else {
        $(".price > ul > li:nth-child(5)").show();
        renderPrice(5);
    }
    $(".crust").toggleClass('crust-gluten-free');
    $(".btn-crust").toggleClass("active");
});

});
