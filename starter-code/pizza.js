// Write your Pizza Builder JavaScript in this file.
$(function(){
    ingActive(".pep",".btn-pepperonni");
    ingActive(".green-pepper",".btn-green-peppers");
    ingActive(".mushroom",".btn-mushrooms");
    

//Iteration 1
$(".btn-pepperonni").click(function(){
    showElements(".pep","pepperonni");
    ingActive(".pep",".btn-pepperonni");
    totalPrice();    
});

$(".btn-green-peppers").click(function(){
    showElements(".green-pepper","green");
    ingActive(".green-pepper",".btn-green-peppers");
    totalPrice();
});

$(".btn-mushrooms").click(function(){
    showElements(".mushroom","mush");
    ingActive(".mushroom",".btn-mushrooms");
    totalPrice();
});

//Iteration 2

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function(){
    eleClass(".crust","crust-gluten-free",".btn-crust");
    showElements2("gluten-free");
    $(".crust").toggleClass("crust-gluten-free");
    totalPrice();
});

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function(){
    eleClass(".sauce","sauce-white",".btn-sauce");
    showElements2("white sauce");
    $(".sauce").toggleClass("sauce-white");
    totalPrice();
});

//Iteration 3


});

function ingActive(element,button){
    if($(element+":visible").length>0)
    {
       $(button).removeClass("active"); 
    }
    else $(button).addClass("active");
}

function eleClass(element,classs,button){
    if($(element).hasClass(classs))
    {
       $(button).addClass("active"); 
    }
    else $(button).removeClass("active");
}

function showElements(element,identText){
    $(element).toggle();
    $("li:contains('"+identText+"')").toggle();
}

function showElements2(identText){
    $("li:contains('"+identText+"')").toggle();
}

function totalPrice(){
    var list = $(".price li:visible").toArray();
    var mainEle = $("b").toArray()[0].innerText;
    var total = Number(mainEle.substring(1,mainEle.indexOf(" ")));
    for(var i=0;i<list.length;i++){
        element = list[i].innerText;
        total += Number(element.substring(1,element.indexOf(" ")));
    }

    $("strong").text("$"+total);
    
}