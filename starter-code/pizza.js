// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.

let priceEl = $(".price strong");
let price = 10;

function starter() {
    $(".mushroom").css("opacity", "0");
    $(".pep").css("opacity", "0");
    $(".green-pepper").css("opacity", "0");
    $(".crust").toggleClass("crust-gluten-free");
    $(".sauce").toggleClass("sauce-white");
    $(".btn").toggleClass("active");
    $(".price ul li").css("display","none");
}

starter();

$(".btn-pepperonni").on("click", function(){
    if($(".pep").css("opacity") == 0){ 
        $(".pep").css("opacity", "1");
        $(".btn-pepperonni").toggleClass("active");
        $(".price ul li:nth-child(1)").css("display", "inherit");
        price += 1;
        priceEl.text(price);
        return 0;
    } 
    $(".pep").css("opacity", "0");
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").css("display", "none");
    price -= 1;
    priceEl.text(price);
})

$(".btn-mushrooms").on("click", function(){
    if($(".mushroom").css("opacity") == 0){ 
        $(".mushroom").css("opacity", "1");
        $(".btn-mushrooms").toggleClass("active");
        $(".price ul li:nth-child(2)").css("display", "inherit");
        price += 1;
        priceEl.text(price);
        return 0;
    } 
    $(".mushroom").css("opacity", "0");
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").css("display", "none");
    price -= 1;
    priceEl.text(price);
})

$(".btn-green-peppers").on("click", function(){
    if($(".green-pepper").css("opacity") == 0){ 
        $(".green-pepper").css("opacity", "1");
        $(".btn-green-peppers").toggleClass("active");
        $(".price ul li:nth-child(3)").css("display", "inherit");
        price += 1;
        priceEl.text(price);
        return 0;
    } 
    $(".green-pepper").css("opacity", "0");
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").css("display", "none");
    price -= 1;
    priceEl.text(price);
})

$(".btn-sauce").on("click", function () {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    if($(".price ul li:nth-child(4)").css("display") == "none"){
        $(".price ul li:nth-child(4)").css("display", "inherit");
        price += 3;
        priceEl.text(price); 
    } else {
        $(".price ul li:nth-child(4)").css("display", "none");
        price -= 3;
        priceEl.text(price);
    }

})

$(".btn-crust").on("click", function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    if($(".price ul li:nth-child(5)").css("display") == "none"){
        $(".price ul li:nth-child(5)").css("display", "inherit");
        price += 5;
        priceEl.text(price);  
    } else {
        $(".price ul li:nth-child(5)").css("display", "none");
        price -= 5;
        priceEl.text(price); 
    }
})


//price.text("proeba");
