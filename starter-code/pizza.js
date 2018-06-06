// Write your Pizza Builder JavaScript in this file.

var totalPrice= 13;
var tot= document.querySelector("strong");
tot.innerHTML=("$"+totalPrice);
$("aside li:contains('gluten-free crust')").toggle();
$("aside li:contains('white sauce')").toggle();
$(".btn-crust").toggleClass("active");
$(".btn-sauce").toggleClass("active");

// -----------
// ITERATION 1
// -----------

$('.btn-pepperonni').click(function(){
    $(".pep").toggle(".pep");

});

$('.btn-mushrooms').click(function(){
    $(".mushroom").toggle(".mushroom");
   
});

$('.btn-green-peppers').click(function(){
    $(".green-pepper").toggle(".green-pepper");

});

// -----------
// ITERATION 2
// -----------


$('.btn-sauce').click(function(){
    $(".sauce").toggleClass("sauce-white");
    $("aside li:contains('white sauce')").toggle();


});

$('.btn-crust').click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $("aside li:contains('gluten-free crust')").toggle();


});

// -----------
// ITERATION 3
// -----------

$('.btn-sauce').click(function(){
    $(".btn-sauce").toggleClass("active");
    if($(".btn-sauce").hasClass("active")){
        totalPrice += 3;
        console.log(totalPrice);
        tot.innerHTML=("$"+totalPrice);
        return totalPrice;
    }
    totalPrice-=3;
    console.log(totalPrice);
    tot.innerHTML=("$"+totalPrice);
    return totalPrice;


    
});


$('.btn-crust').click(function(){
    $(".btn-crust").toggleClass("active");
    if($(".btn-crust").hasClass("active")){
        totalPrice += 5;
        console.log(totalPrice);
        tot.innerHTML=("$"+totalPrice);
        return totalPrice;
    }
    totalPrice-=5;
    console.log(totalPrice);
    tot.innerHTML=("$"+totalPrice);
    return totalPrice;



});


$('.btn-pepperonni').click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $("aside li:contains('pepperonni')").toggle();
    if($(".btn-pepperonni").hasClass("active")){
     totalPrice += 1;
     console.log(totalPrice);
     tot.innerHTML=("$"+totalPrice);
     return totalPrice;
}
totalPrice-=1;
console.log(totalPrice);
tot.innerHTML=("$"+totalPrice);
return totalPrice;
});


$('.btn-mushrooms').click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $("aside li:contains('mushrooms')").toggle();
    if($(".btn-mushrooms").hasClass("active")){
        totalPrice += 1;
        console.log(totalPrice);
        tot.innerHTML=("$"+totalPrice);
        return totalPrice;
    }
    totalPrice-=1;
    console.log(totalPrice);
    tot.innerHTML=("$"+totalPrice);
    return totalPrice;
});

$('.btn-green-peppers').click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $("aside li:contains('peppers')").toggle();
    if($(".btn-green-peppers").hasClass("active")){
        totalPrice += 1;
        console.log(totalPrice);
        tot.innerHTML=("$"+totalPrice);
        return totalPrice;
    }
    totalPrice-=1;
    console.log(totalPrice);
    tot.innerHTML=("$"+totalPrice);
    return totalPrice;
});


