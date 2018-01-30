// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    
    $(".btn-pepperonni").click(function(){
        if ($(".pep").css("opacity")==="0"){
            $(".pep").css("opacity", "1");
            $(this).addClass("active");
            $(".price li:nth-child(1)").css("opacity", "1");
        } else {
        $(".pep").css("opacity", "0");
        $(this).removeClass("active");
        $(".price li:nth-child(1)").css("opacity", "0");
        }
        calculatePrice();
    });
    $(".btn-mushrooms").click(function(){
        if ($(".mushroom").css("opacity")==="0"){
            $(".mushroom").css("opacity", "1");
            $(this).addClass("active");
            $(".price li:nth-child(2)").css("opacity", "1");
        } else {
        $(".mushroom").css("opacity", "0");
        $(this).removeClass("active");
        $(".price li:nth-child(2)").css("opacity", "0");
        }
        calculatePrice();
    });
    $(".btn-green-peppers").click(function(){
        if ($(".green-pepper").css("opacity")==="0"){
            $(".green-pepper").css("opacity", "1");
            $(this).addClass("active");
            $(".price li:nth-child(3)").css("opacity", "1");
        } else {
        $(".green-pepper").css("opacity", "0");
        $(this).removeClass("active");
        $(".price li:nth-child(3)").css("opacity", "0");
        }
        calculatePrice();
    });
    
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");
    $(".price li:nth-child(4)").css("opacity", "0");
    $(".price li:nth-child(5)").css("opacity", "0");

    $(".btn-sauce").click(function(){
        if ($(".sauce").hasClass("sauce-white")){
            $(".sauce").removeClass("sauce-white");
            $(this).removeClass("active");
            $(".price li:nth-child(4)").css("opacity", "0");
        } else {
            $(".sauce").addClass("sauce-white");
            $(this).addClass("active");
            $(".price li:nth-child(4)").css("opacity", "1");
        }
        calculatePrice();
    });
    $(".btn-crust").click(function(){
        if ($(".crust").hasClass("crust-gluten-free")){
            $(".crust").removeClass("crust-gluten-free");
            $(this).removeClass("active");
            $(".price li:nth-child(5)").css("opacity", "0");
        } else {
            $(".crust").addClass("crust-gluten-free");
            $(this).addClass("active");
            $(".price li:nth-child(5)").css("opacity", "1");
        }
        calculatePrice();
    });
    var calculatePrice = function (){
        var valor=10
        if ($(".btn-pepperonni").hasClass("active")){
            valor+=1;
        }
        if ($(".btn-mushrooms").hasClass("active")){
            valor+=1;
        }
        if ($(".btn-green-peppers").hasClass("active")){
            valor+=1;
        }
        if ($(".btn-sauce").hasClass("active")){
            valor+=3;
        }
        if ($(".btn-crust").hasClass("active")){
            valor+=5;
        }
        console.log(valor);
        $(".price strong").text("$"+valor);
    }
    calculatePrice();
})