// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    

//btn peperoni



$('.btn-pepperonni').click(function(){
    $(".btn-pepperonni").toggleClass("active")
    if($('.pep').css('display') === 'none') {
        $(".pep").css("display","block") 
        
    } else {
        $(".pep").css("display","none") 
    }    

})

//btn mushroom

$('.btn-mushrooms').click(function(){
    $(".btn-mushrooms").toggleClass("active")
    if($(".cap, .stem").css('display') === 'none') {
        $(".cap, .stem").css("display","block") 
    } else {
        $(".cap, .stem").css("display","none") 
    }    

})

//btn green-peper

$('.btn-green-peppers').click(function(){
    $(".btn-green-peppers").toggleClass("active")
    if($(".green-pepper").css('display') === 'none') {
        $(".green-pepper").css("display","block") 
    } else {
        $(".green-pepper").css("display","none") 
    }    

})

//btn sauce

$(".sauce").removeClass("sauce-white");//es para que la red souce sea de default


$('.btn-sauce').click(function(){
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
     if($(".sauce-white").css('display') === 'none') {
         $(".sauce-white").css("display","block") 
     } else {
         $(".sauce-white").css("display","none") 
     }    

})

//btn crust


$(".crust").removeClass("crust-gluten-free");

 $('.btn-crust').click(function(){
    $(".btn-crust").toggleClass("active")
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
    } else {
        $(".crust").addClass("crust-gluten-free");
    }

})

});
  