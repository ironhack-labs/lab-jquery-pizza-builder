// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    //elegimos ingredientes, ingrediente-botón activo ||no ingrediente-no activo
    $(".btn-pepperonni").click(function(event){
        if ($(".pep").hasClass("pep-index")) {
            $(".pep").removeClass("pep-index") && $(".price li:nth-child(1)").removeClass("visible");
            $(".btn-pepperonni").removeClass("active")
           
        } else {
            $(".pep").addClass("pep-index") && $(".price li:nth-child(1)").addClass("visible");
            $(".btn-pepperonni").addClass("active")
        }
        
    })

    $(".btn-mushrooms").click(function(event){
        if ($(".mushroom").hasClass("mushroom-index")) {
            $(".mushroom").removeClass("mushroom-index") && $(".price li:nth-child(2)").removeClass("visible");
            $(".btn-mushrooms").removeClass("active")
        } else {
            $(".mushroom").addClass("mushroom-index") && $(".price li:nth-child(2)").addClass("visible");
            $(".btn-mushrooms").addClass("active")
        }
    })

    $(".btn-green-peppers").click(function(event){
        if ($(".green-pepper").hasClass("green-pepper-index")) {
            $(".green-pepper").removeClass("green-pepper-index") && $(".price li:nth-child(3)").removeClass("visible");
            $(".btn-green-peppers").removeClass("active")
        } else {
            $(".green-pepper").addClass("green-pepper-index") && $(".price li:nth-child(3)").addClass("visible");
            $(".btn-green-peppers").addClass("active")
        }
    }) 

    $(".btn-crust").click(function(event){
        if ($(".crust").hasClass("crust-gluten-free")) {
            $(".crust").removeClass("crust-gluten-free") && $(".price li:nth-child(4)").removeClass("visible");
            $(".btn-crust").removeClass("active")
        } else {
            $(".crust").addClass("crust-gluten-free") && $(".price li:nth-child(4)").addClass("visible");
            $(".btn-crust").addClass("active")
        }
    })

    $(".btn-sauce").click(function(event){
        if ($(".sauce").hasClass("sauce-white")) {
            $(".sauce").removeClass("sauce-white") && $(".price li:nth-child(5)").removeClass("visible");
            $(".btn-sauce").removeClass("active")
        } else {
            $(".sauce").addClass("sauce-white") && $(".price li:nth-child(5)").addClass("visible");
            $(".btn-sauce").addClass("active")
        }
    })


    // Total price
    var sumPrice = document.getElementsByClassName('ingredients');
    var whatPrice = [];
    var calculatePrice = 0;
    for(i=0; i<sumPrice.length; i++){
        whatPrice = sumPrice[i].innerHTML;
        whatPrice = whatPrice.substr(1, 1);
        calculatePrice += whatPrice;
        console.log(calculatePrice);
    }
});

