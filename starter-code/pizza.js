// Write your Pizza Builder JavaScript in this file.

// Toggle Toppings

$(".btn-pepperonni").click(function(){

    $(".pep-price").toggle();
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    total()
}); 

$(".btn-mushrooms").click(function(){

    $(".mush-price").toggle();
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    total()
}); 

$(".btn-green-peppers").click(function(){

    $(".green-pep-price").toggle();
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    total()
}); 

$(".sauce").toggleClass("sauce-white");
$(".btn-sauce").toggleClass("active");
$(".w-sauce").toggle();

$(".btn-sauce").click(function(){

    $(".w-sauce").toggle();
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    total()
}); 

$(".crust").toggleClass("crust-gluten-free");
$(".btn-crust").toggleClass("active");
$(".g-f-crust").toggle();

$(".btn-crust").click(function(){

    $(".g-f-crust").toggle();
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    total()
}); 


function total() {
    var totalPrice = 10;
    
 $(".ingredient-list li").each( function(index, li) {
    if (li.style.display !== "none") {
        totalPrice += Number(li.querySelector("span").innerHTML);
    }

 })

 totalPrice = "$"+ totalPrice;
 $("aside strong").html(totalPrice);
};



