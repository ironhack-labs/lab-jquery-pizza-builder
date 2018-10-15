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
    });

    btnMush.click(function(){
        $(this).toggleClass("active");
        $(".mushroom").toggle();
    });

    btnGreen.click(function(){
        $(this).toggleClass("active");
        $(".green-pepper").toggle();
    });

    btnSauce.click(function(){
        $(this).toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
    });

    btnCrust.click(function(){
        $(this).toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
    });


});
