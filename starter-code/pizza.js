// Write your Pizza Builder JavaScript in this file.

// ----------------------------1.ITERACION 1

    // Quitar Champiñones

$(document).ready(function (){
    $('.btn-mushrooms').on("click", function () {  
    $('.cap').toggle();
    $('.stem').toggle();
    });
});


    // Quitar Peperonni
$(document).ready(function () {
    $('.btn-pepperonni').on("click", function () {
        $('.pep').toggle();
    });
});

    // Quitar pimientos
$(document).ready(function () {
    $('.btn-green-peppers').on("click", function () {
        $('.green-pepper').toggle();
    });
});

// ----------------------------2.ITERACION 2
//Quitar White Sauce
$(document).ready(function () {
    $('.btn-sauce').click(function (event) {
        //event.preventDefault();
            $('.sauce-white').toggle();  
            $('.cheese').toggle();     
    });
});


//Quitar Gluten-Free crust
$(document).ready(function () {
    $('.btn-crust').click(function (event) {
        //event.preventDefault();
        $('.crust-gluten-free').toggle();
    });
});

