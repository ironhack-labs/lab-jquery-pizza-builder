// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {


    var sumPrice = document.getElementsByClassName('ingredients');
    var totalPrice = document.querySelector('.totalPrice');
    var calculatePrice = 0;
    
    //elegimos ingredientes, ingrediente-botón activo ||no ingrediente-no activo
    $(".btn").removeClass("active")

    $(".btn-pepperonni").click(function(event){
        if ($(".pep").hasClass("pep-index")) {
            $(".pep").removeClass("pep-index") && $(".price li:nth-child(1)").removeClass("visible");
            $(".btn-pepperonni").removeClass("active")
            totalPrice.innerHTML = calculatePrice -= 1;
           
        } else {
            $(".pep").addClass("pep-index") && $(".price li:nth-child(1)").addClass("visible");
            $(".btn-pepperonni").addClass("active")
            totalPrice.innerHTML = calculatePrice += 1;
        }
        
    })

    $(".btn-mushrooms").click(function(event){
        if ($(".mushroom").hasClass("mushroom-index")) {
            $(".mushroom").removeClass("mushroom-index") && $(".price li:nth-child(2)").removeClass("visible");
            $(".btn-mushrooms").removeClass("active")
            totalPrice.innerHTML = calculatePrice -= 1;
            
        } else {
            $(".mushroom").addClass("mushroom-index") && $(".price li:nth-child(2)").addClass("visible");
            $(".btn-mushrooms").addClass("active")
            totalPrice.innerHTML = calculatePrice += 1;
        }
    })

    $(".btn-green-peppers").click(function(event){
        if ($(".green-pepper").hasClass("green-pepper-index")) {
            $(".green-pepper").removeClass("green-pepper-index") && $(".price li:nth-child(3)").removeClass("visible");
            $(".btn-green-peppers").removeClass("active")
            totalPrice.innerHTML = calculatePrice -= 1;
            
        } else {
            $(".green-pepper").addClass("green-pepper-index") && $(".price li:nth-child(3)").addClass("visible");
            $(".btn-green-peppers").addClass("active")
            totalPrice.innerHTML = calculatePrice += 1;
        }
    }) 

    $(".btn-sauce").click(function(event){
        if ($(".sauce").hasClass("sauce-white")) {
            $(".sauce").removeClass("sauce-white") && $(".price li:nth-child(5)").removeClass("visible");
            $(".btn-sauce").removeClass("active")
            totalPrice.innerHTML = calculatePrice -= 3;
            
        } else {
            $(".sauce").addClass("sauce-white") && $(".price li:nth-child(5)").addClass("visible");
            $(".btn-sauce").addClass("active")
            totalPrice.innerHTML = calculatePrice += 3;
        }
    })

    $(".btn-crust").click(function(event){
        if ($(".crust").hasClass("crust-gluten-free")) {
            $(".crust").removeClass("crust-gluten-free") && $(".price li:nth-child(4)").removeClass("visible");
            $(".btn-crust").removeClass("active")
            totalPrice.innerHTML = calculatePrice -= 5;
            
        } else {
            $(".crust").addClass("crust-gluten-free") && $(".price li:nth-child(4)").addClass("visible");
            $(".btn-crust").addClass("active")
            totalPrice.innerHTML = calculatePrice += 5;
        }
    })

    

});

