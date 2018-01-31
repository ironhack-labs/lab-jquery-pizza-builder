// Write your Pizza Builder JavaScript in this file.

    
 

$(document).ready(function() {

// ingrediants varibles
var liPepperonni = $(".price li:nth-child(1)");
var liMushrooms = $(".price li:nth-child(2)");
var liGreenPepper = $(".price li:nth-child(3)");
var liSauce = $(".price li:nth-child(4)");
var liCrust = $(".price li:nth-child(5)");
var sumTotal = 13;

// ingrediants varibles
var precioPepperonni = parseInt($(".price li:nth-child(1)").text()[1]); // .text porque el $("") nos reenvia a toda la linea de html, el .text nos renvia el puro string del cual extraemos la posicion 1 para agarar la cifra
var precioMushrooms = parseInt($(".price li:nth-child(2)").text()[1]);
var precioGreenPepper = parseInt($(".price li:nth-child(3)").text()[1]);
var precioSauce = parseInt($(".price li:nth-child(4)").text()[1]);
var precioCrust = parseInt($(".price li:nth-child(5)").text()[1]);

console.log(precioGreenPepper)

//defaoult varibles

console.log(liSauce)

liSauce.css("display", "none")

liCrust.css("display","none")

$("strong").text("$"+ sumTotal)

//btn peperoni


$('.btn-pepperonni').click(function(){
    $(".btn-pepperonni").toggleClass("active")
    if($('.pep').css('display') === 'none') {
        $(".pep").css("display","block")
        liPepperonni.css("display", "block")
        sumTotal += precioPepperonni;
       
        
       
    } else {
        $(".pep").css("display","none") 
        liPepperonni.css("display", "none")
        sumTotal -= precioPepperonni;
        
    }    
    $("strong").text("$"+ sumTotal)
})

//btn mushroom

$('.btn-mushrooms').click(function(){
    $(".btn-mushrooms").toggleClass("active")
    if($(".cap, .stem").css('display') === 'none') {
        $(".cap, .stem").css("display","block") 
        liMushrooms.css("display", "block")
        sumTotal += precioMushrooms;
        
    } else {
        $(".cap, .stem").css("display","none") 
        liMushrooms.css("display", "none")
        sumTotal -= precioMushrooms;
       
    }    
    $("strong").text("$"+ sumTotal)
})

//btn green-peper

$('.btn-green-peppers').click(function(){
    $(".btn-green-peppers").toggleClass("active")
    if($(".green-pepper").css('display') === 'none') {
        $(".green-pepper").css("display","block") 
        liGreenPepper.css("display", "block")
        sumTotal += precioGreenPepper;
    } else {
        $(".green-pepper").css("display","none") 
        liGreenPepper.css("display", "none")
        sumTotal -= precioGreenPepper;
    }    
    $("strong").text("$"+ sumTotal)
})

//btn sauce

$(".sauce").removeClass("sauce-white");//es para que la red souce sea de default

$(".btn-sauce").removeClass("active")
$('.btn-sauce').click(function(){
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
     if($(".sauce-white").css('display') === 'none') {
         $(".sauce-white").css("display","block")
         liSauce.css("display", "none") 
         sumTotal -= precioSauce;
         
     } else {
         $(".sauce-white").css("display","none") 
         liSauce.css("display", "block")
         sumTotal += precioSauce;
        
     }    
     $("strong").text("$"+ sumTotal) 
})

//btn crust


$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active")

 $('.btn-crust').click(function(){
    $(".btn-crust").toggleClass("active")
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
        liCrust.css("display", "none")
        sumTotal -= precioCrust;
    } else {
        $(".crust").addClass("crust-gluten-free");   
        liCrust.css("display", "block") 
        sumTotal += precioCrust;
    }
    $("strong").text("$"+ sumTotal)
})

//total





});
  


