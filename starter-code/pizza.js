// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

// ingrediants varibles
var liPepperonni = $(".price li:nth-child(1)");
var liMushrooms = $(".price li:nth-child(2)");
var liGreenPepper = $(".price li:nth-child(3)");
var liSauce = $(".price li:nth-child(4)");
var liCrust = $(".price li:nth-child(5)");
var total = $("strong");
var numeroTotal = 10;

//defaoult varibles

console.log(liSauce)

liSauce.css("display", "none")

liCrust.css("display","none")

total.text("$"+numeroTotal)
  

//btn peperoni



$('.btn-pepperonni').click(function(){
    $(".btn-pepperonni").toggleClass("active")
    if($('.pep').css('display') === 'none') {
        $(".pep").css("display","block")
        liPepperonni.css("display", "block")
       
    } else {
        $(".pep").css("display","none") 
        liPepperonni.css("display", "none")
    }    

})

//btn mushroom

$('.btn-mushrooms').click(function(){
    $(".btn-mushrooms").toggleClass("active")
    if($(".cap, .stem").css('display') === 'none') {
        $(".cap, .stem").css("display","block") 
        liMushrooms.css("display", "block")
    } else {
        $(".cap, .stem").css("display","none") 
        liMushrooms.css("display", "none")
    }    

})

//btn green-peper

$('.btn-green-peppers').click(function(){
    $(".btn-green-peppers").toggleClass("active")
    if($(".green-pepper").css('display') === 'none') {
        $(".green-pepper").css("display","block") 
        liGreenPepper.css("display", "block")
    } else {
        $(".green-pepper").css("display","none") 
        liGreenPepper.css("display", "none")

    }    

})

//btn sauce

$(".sauce").removeClass("sauce-white");//es para que la red souce sea de default

$(".btn-sauce").removeClass("active")
$('.btn-sauce').click(function(){
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
     if($(".sauce-white").css('display') === 'none') {
         $(".sauce-white").css("display","block")
         liSauce.css("display", "block") 
     } else {
         $(".sauce-white").css("display","none") 
         liSauce.css("display", "none") 
     }    

})

//btn crust


$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active")

 $('.btn-crust').click(function(){
    $(".btn-crust").toggleClass("active")
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
        liCrust.css("display", "block") 
    } else {
        $(".crust").addClass("crust-gluten-free");
        liCrust.css("display", "none") 
    }

})

});
  


