// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


    $("section[class*='crust']").removeClass("crust-gluten-free")
    $("section[class*='sauce']").removeClass("sauce-white")
    if($("section[class*='green-pepper]")){
        $('.btn-green-peppers').addClass('active')
    }else{
        $('.btn-green-peppers').addClass('active')
    }
    if($("section[class*='mushroom]")){
        $('.btn-mushrooms').addClass('active')
    }else{
        $('.btn-mushrooms').addClass('active')
    }
    if($("section[class*='pep']")){
        $('.btn-pepperonni').addClass('active')
    }else{
        $('.btn-pepperonni').addClass('active')
    }
    $('.btn-crust').removeClass('active')
    $('.btn-sauce').removeClass('active')
    $("li:contains(white sauce)").addClass("ocultar")
    $("li:contains(gluten-free crust)").addClass("ocultar")
    
    $("strong").text("$3")
    
})
var tot=3;
$('.btn-pepperonni').on("click",function(e){
    $("section[class^='pep']").toggleClass("ocultar")
    $('.btn-pepperonni').toggleClass('active')
    $("li:contains(pepperonni)").toggleClass("ocultar")
    if($("li:contains(pepperonni)").hasClass('ocultar')){
        tot -= 1;
    }else{
        tot +=1
    }
    $("strong").text("$"+tot)


});
$('.btn-mushrooms').on("click",function(e){
    $("section[class*='mushroom']").toggleClass("ocultar")
    $('.btn-mushrooms').toggleClass('active')
    $("li:contains(mushrooms)").toggleClass("ocultar")
    if(($("li:contains(mushrooms)").hasClass('ocultar'))){
        tot -= 1;
    }else{
        tot +=1;
    }
    $("strong").text("$"+tot)
});
$('.btn-green-peppers').on("click",function(e){
    $("section[class*='green-pepper']").toggleClass("ocultar")
    $('.btn-green-peppers').toggleClass('active')
    $("li:contains(green peppers)").toggleClass("ocultar")
    if(($("li:contains(green peppers)").hasClass('ocultar'))){
        tot -= 1;
    }else{
        tot +=1;
    }

    $("strong").text("$"+tot)
});
$('.btn-sauce').on("click",function(e){
    $("section[class*='sauce']").toggleClass("sauce-white")
    $('.btn-sauce').toggleClass('active')
    $("li:contains(white sauce)").toggleClass("ocultar")
    if(($("li:contains(white sauce)").hasClass('ocultar'))){
        tot -= 3;
    }else{
        tot +=3;
    }
    $("strong").text("$"+tot)
});
$('.btn-crust').on("click",function(e){
    $("section[class*='crust']").toggleClass("crust-gluten-free")
    $('.btn-crust').toggleClass('active')
    $("li:contains(gluten-free crust)").toggleClass("ocultar")
    if(($("li:contains(gluten-free crust)").hasClass('ocultar'))){
        tot -= 5;
    }else{
        tot +=5;
    }
    $("strong").text("$"+tot)
});








