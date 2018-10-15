// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){ 

    refreshPrice();

    var btnPep = $(".btn-pepperonni");
    var btnMush = $(".btn-mushrooms");
    var btnGreen = $(".btn-green-peppers");
    var btnSauce = $(".btn-sauce");
    var btnCrust = $(".btn-crust");

    btnPep.click(function(){
        $(this).toggleClass("active");
        $(".pep").toggle();
        $("li:contains('pepperonni')").toggle();
        refreshPrice();
    });

    btnMush.click(function(){
        $(this).toggleClass("active");
        $(".mushroom").toggle();
        $("li:contains('mushrooms')").toggle();
        refreshPrice();
    });

    btnGreen.click(function(){
        $(this).toggleClass("active");
        $(".green-pepper").toggle();
        $("li:contains('green')").toggle();
        refreshPrice();
    });

    btnSauce.click(function(){
        $(this).toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        $("li:contains('white')").toggle();
        refreshPrice();
    });

    btnCrust.click(function(){
        $(this).toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains('gluten')").toggle();
        refreshPrice();
    });
});

function refreshPrice() {
    var totalPrice = 0;
    totalPrice += parseInt($(".base-price").html());
    $("li:visible > span.price").each(function(){
        totalPrice += parseInt(this.innerHTML);
    })
    $("span.total-price").html(totalPrice);
}