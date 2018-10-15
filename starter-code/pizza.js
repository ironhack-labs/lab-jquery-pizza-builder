// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){ 

    var btnPep = $(".btn-pepperonni");
    var btnMush = $(".btn-mushrooms");
    var btnGreen = $(".btn-green-peppers");
    var btnSauce = $(".btn-sauce");
    var btnCrust = $(".btn-crust");

    btnPep.click(function(){
        $(this).toggleClass("active");
        $(".pep").toggle();
        $("li:contains('pepperonni')").toggle();
    });

    btnMush.click(function(){
        $(this).toggleClass("active");
        $(".mushroom").toggle();
        $("li:contains('mushrooms')").toggle();
    });

    btnGreen.click(function(){
        $(this).toggleClass("active");
        $(".green-pepper").toggle();
        $("li:contains('green')").toggle();
    });

    btnSauce.click(function(){
        $(this).toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        $("li:contains('white')").toggle();
    });

    btnCrust.click(function(){
        $(this).toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains('gluten')").toggle();
    });




});
