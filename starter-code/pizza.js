// Write your Pizza Builder JavaScript in this file.

// Reset pizza

$(document).ready(function(){
    resetPizza();
    pizzaDefault()
    btnDefault();

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
    })
    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
    })
    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
    })
    $(".btn-sauce" ).click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
    })
    $(".btn-crust" ).click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
    })
    









})

function resetPizza(){
    $(".pep, .mushroom, .green-pepper").show();
}
function pizzaDefault(){
   $(".crust").removeClass("crust-gluten-free");
   $(".sauce").removeClass("sauce-white");   
}
function btnDefault(){
    $(".btn-sauce, .btn-crust").removeClass("active");
}

function basicPrice (){

}
