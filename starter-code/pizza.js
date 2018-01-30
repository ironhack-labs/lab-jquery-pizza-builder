// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(e){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".pep-price").toggle();
    sumPrices()
})
$(".btn-mushrooms").click(function(e){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom-price").toggle();
    sumPrices()
})
$(".btn-green-peppers").click(function(e){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".pepper-price").toggle();
    sumPrices()
})

$(".btn-sauce").click(function(e){
    $(".sauce").toggleClass("sauce-white")
    $(".btn-sauce").toggleClass("active");
    $(".sauce-price").toggle();
    sumPrices()
})
$(".btn-crust").click(function(e){
    $(".crust").toggleClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active");
    $(".crust-price").toggle();
    sumPrices()
})

function sumPrices() {
    var thing = $("* .price-li:visible");
    var result=0;
    for (let i =0; i < thing.length; i++) {
        result += parseInt(thing[i].innerHTML.slice(1,2));
    }
    $("strong").text("$" + ( 10 + result));
}

sumPrices()
