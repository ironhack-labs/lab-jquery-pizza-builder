// INITIAL TOTAL PRICE 

calculateTotalPrice();

// SHOW AND HIDE INGREDIENTS 

$(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("aside ul li:first").toggle();
    calculateTotalPrice()
});
$(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $("aside ul li:nth-child(2)").toggle();
    calculateTotalPrice()
});
$(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $("aside ul li:nth-child(3)").toggle();
    calculateTotalPrice()
});

// SAUCE AND CRUST OPTIONS 

$(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("aside ul li:nth-child(5)").toggleClass("hidden");
    calculateTotalPrice()
});
$(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("aside ul li:nth-child(4)").toggleClass("hidden");
    calculateTotalPrice()
});

// TOTAL PRICE 
function calculateTotalPrice() {
    var totalPrice = 10;
    if ($(".btn-pepperonni").hasClass("active")){
        totalPrice += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")){
        totalPrice += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")){
        totalPrice += 1;
    }
    if ($(".btn-crust").hasClass("active")){
        totalPrice += 5;
    }
    if ($(".btn-sauce").hasClass("active")){
        totalPrice += 3;
    }
    document.getElementById("pizza-price").innerHTML = "$" + totalPrice ;
}