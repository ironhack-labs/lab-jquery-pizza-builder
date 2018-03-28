$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".panel.price ul li:nth-child(1)").toggle();
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".panel.price ul li:nth-child(2)").toggle();
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".panel.price ul li:nth-child(3)").toggle();
})

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".panel.price ul li:nth-child(4)").toggle();
})

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel.price ul li:nth-child(5)").toggle();
})

// var totalPrice = $("strong").html();
// var basicPrice = 10;


// var totalPrice = $("strong").html();
// console.log(totalPrice)

// var numberTotalPrice = Number(totalPrice.slice(1,3));

// console.log(typeof numberTotalPrice);

// var mushPrice = 1;
// var pepPrice = 1;
// var pepperPrice = 1;
// var saucePrice = 3;
// var crustPrice = 5;

// var totalPrice =