// Write your Pizza Builder JavaScript in this file.
$(".sauce-price").toggle();
$(".crust-price").toggle();

let totalPrice = function () {
    let ingredientsPrice = $(".price>ul>li:visible");
    let totalPrice = 10;
    for (let i = 0; i < ingredientsPrice.length; i += 1) {
        let cafe = ingredientsPrice[i].textContent;
        totalPrice += parseInt(cafe[1]);
    }
    $(".price>strong").empty().append(`$ ${totalPrice}`)
}

totalPrice();

let changeButton = function (button) {
    if (button.hasClass("active")) {
        button.removeClass("active");
    } else {
        button.addClass("active")
    }
}

$(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    $(".pep-price").toggle();
    changeButton($(".btn-pepperonni"));
    totalPrice();
})

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".mushrooms-price").toggle();
    changeButton($(".btn-mushrooms"))
    totalPrice();

})

$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    $(".green-peppers-price").toggle();
    changeButton($(".btn-green-peppers"))
    totalPrice();
})

$(".btn-sauce").click(function () {
    $(".sauce").addClass("sauce-white");
    $(".sauce-price").toggle();
    changeButton($(".btn-sauce"))
    totalPrice();
})

$(".btn-crust").click(function () {
    $(".crust").addClass("crust-gluten-free");
    $(".crust-price").toggle();
    changeButton($(".btn-crust"))
    totalPrice();
})

